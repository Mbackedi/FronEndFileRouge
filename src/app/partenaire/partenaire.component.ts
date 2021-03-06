import { Component, OnInit, ViewChild } from '@angular/core';
import { PartenaireService } from '../partenaire.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  tableau: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private parteService: PartenaireService, private router: Router) { }
  partenaires = [];
  ngOnInit(){

    this.parteService.getAllpartenaire()
      .subscribe(

        res => {
          console.log(res);
          this.tableau = res;
          this.dataSource = new MatTableDataSource(this.tableau);
          this.dataSource.paginator = this.paginator;
        },
        err => {


          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login'])
            }
          }
        }
      )

  }

  displayedColumns: string[] = [' nomEntreprise', 'RS', 'NINEA', 'Adresse','Statut'];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onGetUser(parte) {
    let url = parte.links.user.href;
    this.router.navigateByUrl("/user/" + parte.links);
  }

}
