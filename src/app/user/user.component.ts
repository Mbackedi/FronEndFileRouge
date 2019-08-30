import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private partenaireService:PartenaireService,
     private route:ActivatedRoute) {
    console.log(route);
     }

  ngOnInit() {
  }

}
