import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-history-incoming',
  templateUrl: './history-incoming.component.html',
  styleUrls: ['./history-incoming.component.css']
})
export class HistoryIncomingComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createFrom();
  }

  createFrom() {
    this.form = this.formBuilder.group({
      hospitalizationDate: ['']
    });
  }

}
