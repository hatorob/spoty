import { Component, OnInit } from '@angular/core';
//Obtener ese parametro del artista

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  constructor( private router: ActivatedRoute ) { 
    this.router.params.subscribe( params =>  {
      console.log(params);
    })
  }

  ngOnInit(): void {
  }




}
