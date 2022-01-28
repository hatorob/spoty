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
    let token = "BQCTx1GmcMcwwvMBEp_lSq5lhmlGs64195fJQR0phvR9qPfqLZT0gC3ZOjb1OMy6Y-RL0Rvp1fzuGdidIz0";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );
        

  }

  getArtista( termino: string) {
    let token = "BQCTx1GmcMcwwvMBEp_lSq5lhmlGs64195fJQR0phvR9qPfqLZT0gC3ZOjb1OMy6Y-RL0Rvp1fzuGdidIz0";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } );
        
  }
}
