import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {HistoryIncomingServiceActionTypes} from './history-incoming-service.actions';

@Injectable()
export class HistoryIncomingServiceEffects {

  @Effect()
  loadHistoryIncomingServices$ = this.actions$.pipe(
    ofType(HistoryIncomingServiceActionTypes.LoadHistoryIncoming)
  );


  constructor(
    private actions$: Actions) {
  }

}
