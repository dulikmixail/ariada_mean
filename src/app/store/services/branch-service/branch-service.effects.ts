import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {BranchServiceActionTypes, LoadBranchesSuccess} from './branch-service.actions';
import {BranchService} from '../../../_services/api/branch/branch.service';
import {map, switchMap} from 'rxjs/operators';


@Injectable()
export class BranchServiceEffects {


  @Effect()
  LoadBranches$ = this.actions$.pipe(
    ofType(BranchServiceActionTypes.LoadBranches),
    switchMap(() => this.branchService.getAll().pipe(
      map(branches => new LoadBranchesSuccess(branches))
    ))
  );


  constructor(private actions$: Actions, private branchService: BranchService) {
  }

}
