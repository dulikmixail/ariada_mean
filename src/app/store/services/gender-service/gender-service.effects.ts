import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {GenderServiceActionTypes, LoadGendersSuccess} from './gender-service.actions';
import {GenderService} from '../../../_services/api';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class GenderServiceEffects {

  @Effect()
  loadGenders$ = this.actions$.pipe(
    ofType(GenderServiceActionTypes.LoadGenders),
    switchMap(() => this.genderService.getAll().pipe(
      map(genders => new LoadGendersSuccess(genders))
    ))
  );

  constructor(private actions$: Actions, private genderService: GenderService) {
  }

}
