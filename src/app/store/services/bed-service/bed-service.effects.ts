import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {BedsEmptySuccess, BedServiceActionTypes, LoadBedsSuccess} from './bed-service.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../index';
import {BedService} from '../../../_services/api';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {selectBedModels} from './bed-service.selector';
import {EMPTY} from 'rxjs';

@Injectable()
export class BedServiceEffects {


  @Effect()
  loadBedServices$ = this.actions$.pipe(
    ofType(BedServiceActionTypes.LoadBeds),
    withLatestFrom(this.store.select(selectBedModels)),
    switchMap(([, bedModels]) => {
      if (bedModels.length === 0) {
        return this.bedService.getAll().pipe(
          map(beds => new LoadBedsSuccess(beds))
        );
      } else {
        this.store.dispatch(new BedsEmptySuccess());
        return EMPTY;
      }
    })
  );


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private bedService: BedService
  ) {
  }

}
