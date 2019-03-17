import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';


import {
  AddBranch,
  AddBranchSuccess,
  BranchServiceActionTypes,
  DeleteBranch,
  DeleteBranchSuccess,
  LoadBranches,
  LoadBranchesSuccess,
  ResetBranchForm
} from './branch-service.actions';
import {BranchService} from '../../../_services/api/branch/branch.service';
import {concatMapTo, map, mapTo, switchMap} from 'rxjs/operators';


@Injectable()
export class BranchServiceEffects {


  @Effect()
  loadBranches$ = this.actions$.pipe(
    ofType(BranchServiceActionTypes.LoadBranches),
    switchMap(() => {
      return this.branchService.getAll().pipe(
        map(branches => new LoadBranchesSuccess(branches))
      );
    })
  );

  @Effect()
  addBranch$ = this.actions$.pipe(
    ofType(BranchServiceActionTypes.AddBranch),
    switchMap((action: AddBranch) => this.branchService.create(action.payload).pipe(
      map(branch => new AddBranchSuccess(branch))
    ))
  );

  @Effect()
  addBranchSuccess$ = this.actions$.pipe(
    ofType(BranchServiceActionTypes.AddBranchSuccess),
    concatMapTo([
      new ResetBranchForm(),
      new LoadBranches()
    ])
  );

  @Effect()
  deleteBranch$ = this.actions$.pipe(
    ofType(BranchServiceActionTypes.DeleteBranch),
    switchMap((action: DeleteBranch) => this.branchService.delete(action.payload._id).pipe(
      map(branch => new DeleteBranchSuccess(branch))
    ))
  );

  @Effect()
  deleteBranchSuccess$ = this.actions$.pipe(
    ofType(BranchServiceActionTypes.DeleteBranchSuccess),
    mapTo(new LoadBranches())
  );

  constructor(private actions$: Actions, private branchService: BranchService) {
  }

}
