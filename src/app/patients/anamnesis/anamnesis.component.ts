import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {PhRSubGroup} from '../../_models/api/ph-r-sub-group';
import {PhRSubGroupService} from '../../_services/api/ph_r_sub_group/ph-r-sub-group.service';
import {PhRAllowed} from '../../_models/api/ph-r-allowed';
import {PhRAllowedService} from '../../_services/api/ph_r_allowed/ph-r-allowed.service';
import {TreatmentService} from '../../_services/api/treatment/treatment.service';
import {SelfServiceService} from '../../_services/api/self_service/self-service.service';
import {PsychologicalStatusService} from '../../_services/api/psychological_status/psychological-status.service';
import {CriterionService} from '../../_services/api/criterion/criterion.service';
import {AssessmentOfFunctionalCapabilityService} from '../../_services/api/assessment_of_functional_capability/assessment-of-functional-capability.service';
import {Treatment} from '../../_models/api/treatment';
import {SelfService} from '../../_models/api/self-service';
import {PsychologicalStatus} from '../../_models/api/psychological-status';
import {Criterion} from '../../_models/api/criterion';
import {AssessmentOfFunctionalCapability} from '../../_models/api/assessment-of-functional-capability';

@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.css']
})
export class AnamnesisComponent implements OnInit {
  // Step one
  phRSubGroups$: Observable<PhRSubGroup[]>;
  // Step two
  phRAlloweds$: Observable<PhRAllowed[]>;
  phRAllowedsSelected: PhRAllowed[];
  isAllowPhysicalRahabilitation;
  // Step three
  treatments$: Observable<Treatment[]>;
  selfServices$: Observable<SelfService[]>;
  psychologicalStatuses$: Observable<PsychologicalStatus[]>;
  criteria$: Observable<Criterion[]>;
  assessmentOfFunctionalCapabilities$: Observable<AssessmentOfFunctionalCapability[]>;

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
    console.log('Anamnesis constructor');
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
    console.log('Anamnesis ngOnInit');
    // Form validation
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
