import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import {Observable} from 'rxjs';
import {BedModel, ChamberModel, DepartmentModel} from '../../../../_models';
import {selectDepartmentModels} from '../../../../store/services/department-service/department-service.selector';
import {selectChamberModels} from '../../../../store/services/chamber-service/chamber-service.selector';
import {selectBedModels} from '../../../../store/services/bed-service/bed-service.selector';
import {LoadDepartments, SelectDepartment} from '../../../../store/components/placement-form-component/placement-form-component.actions';

@Component({
  selector: 'app-placement-form',
  templateUrl: './placement-form.component.html',
  styleUrls: ['./placement-form.component.css']
})
export class PlacementFormComponent implements OnInit {
  form: FormGroup;
  departments$: Observable<DepartmentModel[]>;
  chambers$: Observable<ChamberModel[]>;
  beds$: Observable<BedModel[]>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
    this.initStoreData();
    this.loadStoreData();
  }

  createForm() {
    this.form = this.formBuilder.group({
      departments: ['', Validators.required],
      chambers: ['', Validators.required],
      beds: ['', Validators.required]
    });
  }

  initStoreData() {
    this.departments$ = this.store.select(selectDepartmentModels);
    this.chambers$ = this.store.select(selectChamberModels);
    this.beds$ = this.store.select(selectBedModels);
  }

  loadStoreData() {
    this.store.dispatch(new LoadDepartments());
  }

  selectDepartment(department: DepartmentModel) {
    this.store.dispatch(new SelectDepartment(department));
  }
}
