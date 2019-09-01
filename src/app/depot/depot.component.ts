import { Component, OnInit } from '@angular/core';
import { DepotService } from '../depot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
comptes;
  constructor(private deposer:DepotService) { }

  ngOnInit() {
    this.deposer.getAllcompte().subscribe(
      res => {
        console.log(res);
        this.comptes = res;
      }, err => {
        console.log(err);
      }
    )

  }

  onsubmit(data: any) {
    console.log(data);
    this.deposer.ajoutdepot(data)
      .subscribe(
        data => {
          console.log('Depot effectué ')

        }, err => {
          console.log(err);
        }
      )
  }

}
