import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 
  title = 'TransfertApp';

  constructor(private authService:AuthentificationService){}

  ngOnInit(): void {
   this.authService.loadToken();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }

  isParte() {
    return this.authService.isParte();
  }

  isCais() {
    return this.authService.isCais();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

  logOut(){
    this.authService.logout();
  }
}
