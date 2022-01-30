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

  getNewReleases() {
    let token = "BQBeBLkxcco0ADzzlzjxEI-MWNttCJ6X7wRtgEHB2Mb38cIUY8t0zc3YTF9jgK_qHsHQWTZZg2ap0H1d8lY";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } )
                .pipe( map( (data: any ) => {
                  return data['albums'].items;
                }));
        

  }

  getArtista( termino: string) {
    let token = "BQBeBLkxcco0ADzzlzjxEI-MWNttCJ6X7wRtgEHB2Mb38cIUY8t0zc3YTF9jgK_qHsHQWTZZg2ap0H1d8lY";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } )
                    .pipe( map( (data: any) => {
                      return data['artists'].items;
                    }));
        
  }
}
