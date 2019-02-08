import {NgModule} from '@angular/core';

@NgModule()
export class PatientsNavLinkModule {
  public navLinks: PatientsNavLink[] = [
    {routerLink: 'anamnesis', label: 'Анамнез', active: true},
    {routerLink: 'emc_patient', label: 'ЕМК пацієнта', active: false},
    {routerLink: 'rehabilitation', label: 'Критерії реабілітації', active: false},
    {routerLink: 'efficiency', label: 'Оцінка ефективності', active: false},
    {routerLink: '', label: 'Робота з біосигналами', active: false},
    {routerLink: '', label: 'Звіти', active: false},
  ];
}

export interface PatientsNavLink {
  routerLink: string;
  label: string;
  active: boolean;
}
