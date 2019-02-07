import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GenderModel} from '../../_models/api/gender.model';
import {AppState} from '../../store';
import {select, Store} from '@ngrx/store';
import {selectGenderList} from '../../store/gender/gender.selector';
import {GetAllGenders} from '../../store/gender/gender.actions';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  genders$: Observable<GenderModel[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.genders$ = this.store.pipe(select(selectGenderList));
    this.store.dispatch(new GetAllGenders());
  }

}
