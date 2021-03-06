import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {selectBranchList} from '../../../../store/services/branch-service/branch-service.selector';
import {BranchModel} from '../../../../_models';
import {DeleteBranch, LoadBranches} from '../../../../store/services/branch-service/branch-service.actions';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  deleteBranch: any;
  loadBranches: any;
  branches$: Observable<BranchModel[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.deleteBranch = DeleteBranch;
    this.loadBranches = LoadBranches;
    this.branches$ = this.store.pipe(select(selectBranchList));
  }

}
