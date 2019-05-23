import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {
  AssessmentOfFunctionalCapabilityModel,
  CriterionModel,
  PhRAllowedModel,
  PhRSubGroupModel,
  PsychologicalStatusModel,
  SelfServiceModel,
  TreatmentModel
} from '../../_models';
import {
  PhRSubGroupService,
  PhRAllowedService,
  TreatmentService,
  SelfServiceService,
  PsychologicalStatusService,
  CriterionService,
  AssessmentOfFunctionalCapabilityService
} from '../../_services/api';

@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.css']
})
export class AnamnesisComponent implements OnInit {
  // Step one
  phRSubGroups$: Observable<PhRSubGroupModel[]>;
  // Step two
  phRAlloweds$: Observable<PhRAllowedModel[]>;
  phRAllowedsSelected: PhRAllowedModel[];
  isAllowPhysicalRahabilitation;
  // Step three
  treatments$: Observable<TreatmentModel[]>;
  selfServices$: Observable<SelfServiceModel[]>;
  psychologicalStatuses$: Observable<PsychologicalStatusModel[]>;
  criteria$: Observable<CriterionModel[]>;
  assessmentOfFunctionalCapabilities$: Observable<AssessmentOfFunctionalCapabilityModel[]>;

  formGroupOne: FormGroup;
  formGroupTwo: FormGroup;
  formGroupThree: FormGroup;

  constructor(private phRSubGroupService: PhRSubGroupService,
              private phRAllowedService: PhRAllowedService,
              private treatmentService: TreatmentService,
              private selfServiceService: SelfServiceService,
              private psychologicalStatusService: PsychologicalStatusService,
              private criterionService: CriterionService,
              private assessmentOfFunctionalCapabilityService: AssessmentOfFunctionalCapabilityService,
              private _formBuilder: FormBuilder) {
    // Load data from API

    this.phRSubGroups$ = this.phRSubGroupService.getAll();

    this.phRAlloweds$ = this.phRAllowedService.getAll();

    this.treatments$ = this.treatmentService.getAll();
    this.selfServices$ = this.selfServiceService.getAll();
    this.psychologicalStatuses$ = this.psychologicalStatusService.getAll();
    this.criteria$ = this.criterionService.getAll();
    this.assessmentOfFunctionalCapabilities$ = this.assessmentOfFunctionalCapabilityService.getAll();
  }

  calcAllowPhysicalRahabilitation() {
    this.isAllowPhysicalRahabilitation = true;
    this.phRAllowedsSelected = this.formGroupTwo.get('phRAllowedsSelected').value;
    if (!!this.phRAllowedsSelected) {
      this.phRAllowedsSelected.forEach(item => {
        this.isAllowPhysicalRahabilitation = this.isAllowPhysicalRahabilitation && item.isAllowed;
      });
    }
  }

  ngOnInit() {
    // FormHelper validation
    this.formGroupOne = this._formBuilder.group({
      phRSubGroupsSelected: ['', Validators.required]
    });
    this.formGroupTwo = this._formBuilder.group({
      phRAllowedsSelected: ['', Validators.required]
    });
    this.formGroupThree = this._formBuilder.group({
      treatmentsSelected: ['', Validators.required],
      selfServicesSelected: ['', Validators.required],
      psychologicalStatusesSelected: ['', Validators.required],
      criteriaSelected: ['', Validators.required],
      assessmentOfFunctionalCapabilitiesSelected: ['', Validators.required]
    });
  }
}
