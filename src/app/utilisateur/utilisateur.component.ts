import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';



@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilise;
  imageUrl: string = "assets/images/ima2.jpg";
  fileToUpload: File = null;

  constructor(private utilisateur:UtilisateurService) { }

  ngOnInit() {
    this.utilisateur.getAlluser().subscribe(
      res => {
        console.log(res);
        this.utilise = res;
      }, err => {
        console.log(err);
      }
    )
  }


  handleFileInput(File: FileList) {
    this.fileToUpload = File.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;

    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onsubmit(data: any) {
    console.log(data);
    console.log(this.fileToUpload);
    this.utilisateur.adduser(data, this.fileToUpload)
      .subscribe(
        data => {
          console.log('Utilisateur créer avec succès')

        }, err => {
          console.log(err);
        }
      )
  }
 

}
