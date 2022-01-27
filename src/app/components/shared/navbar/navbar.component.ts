import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  rutas = [
    {
      nombre: "Home",
      url: "home"
    },
    {
      nombre: "Search",
      url: "search"
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
