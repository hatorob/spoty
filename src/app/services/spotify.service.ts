import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log("Servicio listo para usar....")
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAD0ZqdY7BYXObpVLBJweBc6mVHpeF1O88Fo1HjhTWeCQjnBrUkbc4XM9n9EJj11uDRxbnXLjX6vTEyu1Q'
    })
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } )
        .subscribe( data => {
          console.log(data);
        });

  }

}
