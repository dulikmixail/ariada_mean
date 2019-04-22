import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Input() searchAction: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      searchText: ['', Validators.required]
    });
  }

  search() {
    if (this.form.valid) {
      this.store.dispatch(new this.searchAction(this.form.get('searchText').value));
    }
  }

}
