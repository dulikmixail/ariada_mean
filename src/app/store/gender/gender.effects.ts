import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {GenderActionTypes, GetAllGendersSuccess} from './gender.actions';
import {map, switchMap} from 'rxjs/operators';
import {GenderService} from '../../_services/api/gender/gender.service';

@Injectable()
export class GenderEffects {


  @Effect()
  getAllGenders$ = this.actions$.pipe(
    ofType(GenderActionTypes.GetAllGenders),
    switchMap(() => this.genderService.getAll().pipe(
      map(genders => new GetAllGendersSuccess(genders))
    ))
  );

  constructor(private actions$: Actions, private genderService: GenderService) {
  }

}
