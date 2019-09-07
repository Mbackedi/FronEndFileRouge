import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  public ajoututil: string = "http://localhost:8000/api/admin/1";

  constructor(private http: HttpClient) { }

  getAlluser(): Observable<any[]> {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.ajoututil, { headers: headers })
  }

  adduser(util, fileToUpload) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/admin";
    const formData: FormData = new FormData();
    formData.append('RS', util.RS);
    formData.append('NINEA', util.NINEA);
    formData.append('Adresse', util.Adresse);
    formData.append('username', util.username);
    formData.append('nomEntreprise', util.nomEntreprise);
    formData.append('nomcomplet', util.nomcomplet);
    formData.append('plainPassword', util.plainPassword);
    formData.append('telephone', util.telephone);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    return this.http.post(host, formData, { headers: headers });
  }
}
