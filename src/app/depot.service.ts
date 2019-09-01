import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {
  public deposer: string = "http://localhost:8000/api/depot"; 
  public compte: string = "http://localhost:8000/api/listercompte"; 

  constructor(private http: HttpClient) { }

  getAlldepot(): Observable<any[]> {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.deposer, { headers: headers })
  }

  ajoutdepot(depo) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/depot";
    const formData: FormData = new FormData();
    formData.append('montant', depo.montant);
    formData.append('compte', depo.compte);
    return this.http.post(host, formData, { headers: headers });

  }
  getAllcompte(): Observable<any[]> {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.compte, { headers: headers })
  }
}
