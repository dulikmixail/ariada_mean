import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {AppState} from '../../store';
import {LoadHistoryIncoming} from '../../store/services/history-incoming-service/history-incoming-service.actions';
import {LoadGenders} from '../../store/services/gender-service/gender-service.actions';

@Injectable({
  providedIn: 'root'
})
export class ApiResourcePreloaderService {
  private readonly initialStoreActions: Action[] = [
    new LoadHistoryIncoming(),
    new LoadGenders()
  ];

  constructor(private store: Store<AppState>) {
  }

  initializeStoreResource() {
    this.initialStoreActions.forEach(action => this.store.dispatch(action));
  }
}
