import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Observable, from } from 'rxjs';
import { IPartenaire } from './models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  public listerparte: string = "http://localhost:8000/api/listerpartenaire/1";
  constructor(private http: HttpClient, private authService: AuthentificationService) { }

  getAllpartenaire(): Observable<IPartenaire[]> {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<IPartenaire[]>(this.listerparte, { headers: headers })
  }
}
