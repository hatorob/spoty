import { Component, OnInit } from '@angular/core';
//Obtener ese parametro del artista

import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;

  topTracks: any = [];

  constructor( private router: ActivatedRoute,
                private spotify: SpotifyService ) { 
    this.loading = true;
    this.router.params.subscribe( params =>  {
      //console.log(params);
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );

    })
  }

  getArtista( id:string ){
    this.loading = true;
    this.spotify.getArtista(id)
        .subscribe(artista => {
          console.log(artista);
          this.artista = artista;
          this.loading = false;
    });

  } 

  getTopTracks( id:string ) {
    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        })
  }

  ngOnInit(): void {
  }




}
