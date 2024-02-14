import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  showSearchBar: boolean = false;
  showMenu: boolean = false;
  menu: any;


  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeMenu() {
    this.showMenu = false;
  }



  constructor() { }

  ngOnInit() { }

}
