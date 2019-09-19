import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './models/user';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ListeruserService {
  public userlist: string = "http://localhost:8000/api/listerusers/1";

  constructor(private http: HttpClient, private authService: AuthentificationService) { }

  getAlluser(): Observable<IUser[]> {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<IUser[]>(this.userlist, { headers: headers })
  }
}
