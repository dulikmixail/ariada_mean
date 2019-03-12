import {Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationService} from '../../_services';
import {Router} from '@angular/router';
import {User} from '../../_models';
import {PatientsNavLink, PatientsNavLinkModule} from '../../patients/patients-nav-link.module';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css'],
})
export class TopNavigationComponent {
  currentUser: User;
  patientNavLinks: PatientsNavLink[];

  isSmallScreen$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 850px)'])
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private authenticationService: AuthenticationService, private patientsNavLinkModule: PatientsNavLinkModule) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.patientNavLinks = patientsNavLinkModule.navLinks;
  }

  logout() {
    this.authenticationService.logout();
  }
}
