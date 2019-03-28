import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {TitleModel} from '../../_models/api/title.model';
import {Validator} from '../../_helpers';

@Component({
  selector: 'app-base-title-list',
  templateUrl: './base-title-list.component.html',
  styleUrls: ['./base-title-list.component.css']
})
export class BaseTitleListComponent implements OnInit {
  @Input() titleModels$: Observable<TitleModel[]>;
  @Input() loadAction: any;
  @Input() deleteAction: any;

  constructor(private store: Store<AppState>,
              private validator: Validator) {
  }

  ngOnInit() {
    this.validator.checkRequiredFields(this.titleModels$, 'titleModels$');
    this.validator.checkRequiredFields(this.loadAction, 'loadAction');
    this.validator.checkRequiredFields(this.deleteAction, 'deleteAction');
    this.store.dispatch(new this.loadAction());
  }

  deleteBranch(titleModel: TitleModel) {
    this.store.dispatch(new this.deleteAction(titleModel));
  }

}
