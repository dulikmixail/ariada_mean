import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  form: FormGroup;
  @Output() search = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      searchText: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.search.emit(this.form.get('searchText').value);
    }
  }

}
