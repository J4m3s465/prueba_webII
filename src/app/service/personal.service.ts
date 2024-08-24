import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http:HttpClient) { }

  private API_PERSONAL = 'https://jritsqmet.github.io/web-api/musica.json'

  getPersonal(): Observable <any>{
    return this.http.get(this.API_PERSONAL)
  }
}
