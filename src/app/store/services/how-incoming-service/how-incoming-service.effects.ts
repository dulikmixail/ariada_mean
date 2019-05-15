import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {HowIncomingEmptySuccess, HowIncomingServiceActionTypes, LoadHowIncomingSuccess} from './how-incoming-service.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../index';
import {HowIncomingService} from '../../../_services/api/how-incoming/how-incoming.service';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {selectHowIncomingModels} from './how-incoming-service.selector';
import {EMPTY} from 'rxjs';

@Injectable()
export class HowIncomingServiceEffects {


  @Effect()
  loadHowIncomingServices$ = this.actions$.pipe(
    ofType(HowIncomingServiceActionTypes.LoadHowIncoming),
    withLatestFrom(this.store.select(selectHowIncomingModels)),
    switchMap(([, howIncomingModels]) => {
      if (howIncomingModels.length === 0) {
        return this.howIncomingService.getAll().pipe(
          map(hims => {
            return new LoadHowIncomingSuccess(hims);
          })
        );
      } else {
        this.store.dispatch(new HowIncomingEmptySuccess());
        return EMPTY;
      }
    })
  );


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private howIncomingService: HowIncomingService) {
  }

}
