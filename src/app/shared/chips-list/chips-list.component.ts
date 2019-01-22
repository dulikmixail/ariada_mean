import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material';
import {PhRSubGroupService} from '../../_services/api/ph_r_sub_group/ph-r-sub-group.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-chips-list',
  templateUrl: './chips-list.component.html',
  styleUrls: ['./chips-list.component.css']
})
export class ChipsListComponent implements OnInit {
  @Input() required = false;
  @Input() placeholder = '';
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl = new FormControl();
  filteredItems: Observable<string[]>;
  items: string[] = [];

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private phRSubGroupService: PhRSubGroupService) {
    this.filteredItems = phRSubGroupService.getAll().pipe(map(phRSubGroups => {
      return phRSubGroups.map(phRSubGroup => {
        return phRSubGroup.title;
      });
    }));
  }

  remove(fruit: string): void {
    const index = this.items.indexOf(fruit);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    // this.filteredItems = this.filteredItems.pipe(map(items => {
    //   return items.filter(item => item !== event.option.viewValue);
    // }));
    this.itemInput.nativeElement.value = '';
    this.itemInput.nativeElement.blur();
    this.formControl.setValue(null);
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  // }

  ngOnInit() {
  }


}
