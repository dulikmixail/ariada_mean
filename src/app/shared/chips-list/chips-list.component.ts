import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {from, Observable} from 'rxjs';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material';
import {map} from 'rxjs/operators';

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
  @Input() sendOutputEvent = true;
  selectable = true;
  removable = true;
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
    if (this.sendOutputEvent) {
      this.itemsEvent.emit(this.items);
    }
  }

  remove(item: string): void {
    const index = this.items.indexOf(item);

    if (index >= 0) {
      this.items.splice(index, 1);
    }
    this.sendItems();
    this._filter();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.items.push(this.allItems.filter(item => item[this.selectableName] === event.option.viewValue)[0]);
    this.sendItems();
    this.itemInput.nativeElement.value = '';
    this.itemInput.nativeElement.blur();
    this._filter();
  }

  private _filter() {
    this.filteredItems = from([this.allItems]).pipe(
      map(arr => arr.filter((item) => {
        return this.items.indexOf(item) === -1;
      }))
    );
  }

  ngOnInit() {
    this.filteredItems = this.source.pipe(map(values => this.allItems = values));
    if (!this.selectableName) {
      throw new Error(`${ChipsListComponent.name}. Attribute 'selectableName' is required`);
    }
  }

}
