import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthentificationService,
    private router: Router) { }

  ngOnInit() {
  }
  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
        let jwt = resp.body['token']
        this.authService.saveToken(jwt);
        this.router.navigateByUrl("/");
      }, err => {

      })
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
  isUser() {
    return this.authService.isUser();
  }

}
