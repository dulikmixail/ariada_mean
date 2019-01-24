import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-chips-list',
  templateUrl: './chips-list.component.html',
  styleUrls: ['./chips-list.component.css']
})
export class ChipsListComponent implements OnInit {
  @Input() required = false;
  @Input() placeholder = '';
  @Input() selectableName: string;
  @Input() source: Observable<any[]>;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  formControl = new FormControl();
  items: any[] = [];
  allItems: any[] = [];
  filteredItems: Observable<any[]>;
  @Output() itemsEvent = new EventEmitter<any[]>();

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {

  }

  sendItems() {
    this.itemsEvent.emit(this.items);
  }

  click(): void {
    if (this.allItems.length > 0) {
      this.filteredItems = this.formControl.valueChanges.pipe(
        startWith(null),
        map((item: string | null) => typeof item === 'string' ? this._filter(item) : this.allItems.slice()));
    }
  }

  remove(item: string): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(event.option.viewValue);
    this.sendItems();
    this.itemInput.nativeElement.value = '';
    this.itemInput.nativeElement.blur();
    this.formControl.setValue(null);
  }

  private _filter(value: string): any[] {
    const itemValue = value.toLowerCase();

    return this.allItems.filter((item) => {
      return item[this.selectableName].toLowerCase().indexOf(itemValue) >= 0;
    });
  }

  ngOnInit() {
    this.filteredItems = this.source.pipe(map(values => this.allItems = values));
    if (!this.selectableName) {
      throw new Error(`${ChipsListComponent.name}. Attribute 'selectableName' is required`);
    }
  }

}
