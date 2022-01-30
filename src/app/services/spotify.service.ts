import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Importamos el operador map, que nos permite hacer filtros en nuestras funciones "Solo trabajan con observables"
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log("Servicio listo para usar....")
  }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    let token = "BQCvuOeqbsXITAn5Iap1Iru0Gx4rtqNfMrkm2lpAmYKVluS1q9Zmi6d6QqRDddodTahAuNHHYH6sEyrJCoY";

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {
    /* let token = "BQBeBLkxcco0ADzzlzjxEI-MWNttCJ6X7wRtgEHB2Mb38cIUY8t0zc3YTF9jgK_qHsHQWTZZg2ap0H1d8lY";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); */   // Aquí centralizamos la información para que solo funcione con getQuery y no duplicar código

    return this.getQuery('browse/new-releases')
                .pipe( map( (data: any ) => data['albums'].items));

  }

  getArtistas( termino: string) {
    /* let token = "BQBeBLkxcco0ADzzlzjxEI-MWNttCJ6X7wRtgEHB2Mb38cIUY8t0zc3YTF9jgK_qHsHQWTZZg2ap0H1d8lY";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); */
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data: any) => data['artists'].items));
        
  }

  getArtista( id: string) {
    /* let token = "BQBeBLkxcco0ADzzlzjxEI-MWNttCJ6X7wRtgEHB2Mb38cIUY8t0zc3YTF9jgK_qHsHQWTZZg2ap0H1d8lY";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); */
    return this.getQuery(`artists/${ id }`);
                //.pipe( map( (data: any) => data['artists'].items)); No lo ocupamos
        
  }
}
