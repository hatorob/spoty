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
    let token = "BQD-lEV9pNbvv-Z7VMmhThIav52pFY9ZEfGe2l-hRQHE_W8HP3OD-ERb2Wo7-8PD-QtqVWKrPzcwy_js7NI";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );
        

  }

}
