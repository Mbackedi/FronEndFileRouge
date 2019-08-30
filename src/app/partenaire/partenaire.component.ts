import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {

  constructor(private parteService: PartenaireService, private router: Router) { }
  partenaires = [];
  ngOnInit(): void {

    this.parteService.getAllpartenaire()
      .subscribe(

        res => this.partenaires = res,
        err => {
          console.log(this.partenaires)
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
