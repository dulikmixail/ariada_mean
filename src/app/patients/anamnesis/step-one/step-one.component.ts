import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material';
import {map} from 'rxjs/operators';
import {PhRSubGroupService} from '../../../_services/api/ph_r_sub_group/ph-r-sub-group.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private phRSubGroupService: PhRSubGroupService) {
    this.filteredFruits = phRSubGroupService.getAll().pipe(map(phRSubGroups => {
      return phRSubGroups.map(phRSubGroup => {
        return phRSubGroup.title;
      });
    }));
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.filteredFruits = this.filteredFruits.pipe(map(items => {
      return items.filter(item => item !== event.option.viewValue);
    }));
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  // }

  ngOnInit() {
  }

}
