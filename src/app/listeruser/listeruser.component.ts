import { Component, OnInit } from '@angular/core';
import { ListeruserService } from '../listeruser.service';

@Component({
  selector: 'app-listeruser',
  templateUrl: './listeruser.component.html',
  styleUrls: ['./listeruser.component.css']
})
export class ListeruserComponent implements OnInit {

  constructor(private listuse:ListeruserService) { }
  utilisateur=[];

  ngOnInit(): void {

    this.listuse
  }

}
