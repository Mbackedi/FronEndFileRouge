import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeruserService {
  public userlist: string = "http://localhost:8000/api/listerpartenaire/1";

  constructor() { }
}
