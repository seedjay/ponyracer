import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  public navbarCollapsed = true;

  constructor() {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
