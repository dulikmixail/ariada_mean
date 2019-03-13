import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  addSearchSubMenuRouterLink: string;

  constructor() {
  }

  ngOnInit() {
  }

  setAddSearchSubMenuRouterLink(routerLink: string) {
    this.addSearchSubMenuRouterLink = routerLink;
  }
}
