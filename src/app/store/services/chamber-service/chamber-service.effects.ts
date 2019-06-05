import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {ChambersEmptySuccess, ChamberServiceActionTypes, LoadChambersSuccess} from './chamber-service.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../index';
import {ChamberService} from '../../../_services/api';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {selectChamberModels} from './chamber-service.selector';
import {EMPTY} from 'rxjs';

@Injectable()
export class ChamberServiceEffects {


  @Effect()
  loadChamberServices$ = this.actions$.pipe(
    ofType(ChamberServiceActionTypes.LoadChambers),
    withLatestFrom(this.store.select(selectChamberModels)),
    switchMap(([, chamberModels]) => {
      if (chamberModels.length === 0) {
        return this.chamberService.getAll().pipe(
          map(chambers => new LoadChambersSuccess(chambers))
        );
      } else {
        this.store.dispatch(new ChambersEmptySuccess());
        return EMPTY;
      }
    })
  );


  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private chamberService: ChamberService) {
  }

}
