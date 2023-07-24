import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbarList:boolean = false;


  slide() {
    this.navbarList = !this.navbarList;
  }
}
