import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {BedServiceActionTypes} from './bed-service.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../index';
import {BedService} from '../../../_services/api';

@Injectable()
export class BedServiceEffects {


  @Effect()
  loadBedServices$ = this.actions$.pipe(ofType(BedServiceActionTypes.LoadBeds));


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private bedService: BedService
  ) {
  }

}
