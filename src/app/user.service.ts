import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listerprofil: string = "http://localhost:8000/api/listerprofil/1";
  constructor(private http: HttpClient) { }

  getAllprofil(): Observable<any[]> {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.listerprofil, { headers: headers })
  }

  ajoutuser(util, fileToUpload){
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/user";
    const formData:FormData = new FormData();
    formData.append('username',util.username);
    formData.append('nomcomplet', util.nomcomplet);
    formData.append('plainPassword', util.plainPassword);
    formData.append('telephone', util.telephone);
    formData.append('profil', util.profil);
    formData.append('imageName', fileToUpload, fileToUpload.name);
    return this.http.post(host, formData, { headers: headers } );

  }
}
