import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {GenderActionTypes, LoadGendersSuccess} from './gender.actions';
import {map, switchMap} from 'rxjs/operators';
import {GenderService} from '../../_services/api/gender/gender.service';

@Injectable()
export class GenderEffects {


  @Effect()
  loadGenders$ = this.actions$.pipe(
    ofType(GenderActionTypes.LoadGenders),
    switchMap(() => this.genderService.getAll().pipe(
      map(genders => new LoadGendersSuccess(genders))
    ))
  );

  constructor(private actions$: Actions, private genderService: GenderService) {
  }

}
