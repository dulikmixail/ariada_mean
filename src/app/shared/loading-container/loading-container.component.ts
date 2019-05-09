import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-loading-container',
  templateUrl: './loading-container.component.html',
  styleUrls: ['./loading-container.component.css']
})
export class LoadingContainerComponent implements OnInit {

  @Input() loading: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

}
