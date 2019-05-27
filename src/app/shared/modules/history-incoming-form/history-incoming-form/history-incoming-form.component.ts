import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {HowIncomingModel} from '../../../../_models';
import {AppState} from '../../../../store';
import {Store} from '@ngrx/store';
import {selectHowIncomingModels} from '../../../../store/services/how-incoming-service/how-incoming-service.selector';
import {LoadHowIncoming} from '../../../../store/services/how-incoming-service/how-incoming-service.actions';

@Component({
  selector: 'app-history-incoming-form',
  templateUrl: './history-incoming-form.component.html',
  styleUrls: ['./history-incoming-form.component.css']
})
export class HistoryIncomingFormComponent implements OnInit {
  form: FormGroup;
  howIncomingModels$: Observable<HowIncomingModel[]>;

  maxDate: Date = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.howIncomingModels$ = this.store.select(selectHowIncomingModels);
    this.store.dispatch(new LoadHowIncoming());
    this.createFrom();
  }

  createFrom() {
    this.form = this.formBuilder.group({
      hospitalizationDate: [new Date()],
      senderMedicalFacility: [''],
      diagnosis: [''],
      finalDiagnosis: [''],
      howIncoming: [''],
      issuanceDate: [''],
      note: [''],
      examination: [''],
      placement: [''],
    });
  }
}
