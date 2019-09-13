import { Component, OnInit } from '@angular/core';
import { ListeruserService } from '../listeruser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeruser',
  templateUrl: './listeruser.component.html',
  styleUrls: ['./listeruser.component.css']
})
export class ListeruserComponent implements OnInit {

  constructor(private listuse:ListeruserService, private router:Router) { }
  utilisateur=[];
  ngOnInit(){

    this.listuse.getAlluser()
      .subscribe(

        res => this.utilisateur = res,
        err => {
          console.log(this.utilisateur)

          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login'])
            }
          }
        }
      )
       

  }


  onGetUser(parte) {
    let url = parte.links.user.href;
    this.router.navigateByUrl("/user/" + parte.links);
  }

}
