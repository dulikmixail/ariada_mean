import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

import {User} from '../_models';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string) {
    return this.http.post<any>(`${environment.authUrl}/login`, {login, password})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    if (this.currentUserValue && this.currentUserValue.refreshToken) {
      const refreshToken = this.currentUserValue.refreshToken;
      this.http.post<any>(`${environment.authUrl}/logout`, {refreshToken})
        .subscribe(
          () => {
            this.cleanStorageAndNavigateToLoginPage();
          },
          () => {
            this.cleanStorageAndNavigateToLoginPage();
          }
        );
    }
  }

  private cleanStorageAndNavigateToLoginPage() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}
