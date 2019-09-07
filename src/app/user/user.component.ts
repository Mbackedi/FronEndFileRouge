import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profils;
  imageUrl: string = "assets/images/sonatel.jpeg";
  fileToUpload: File = null;

  constructor(private users: UserService) {

  }

  ngOnInit() {
    this.users.getAllprofil().subscribe(
      res => {
        console.log(res); 
        this.profils = res;
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
    this.users.ajoutuser(data, this.fileToUpload)
      .subscribe(
        data => {
          console.log('Utilisateur créer')

        }, err => {
          console.log(err);
        }
      )
  }
   user=new FormGroup({
     username: new FormControl ('', [Validators.required, Validators.minLength(5)]),
     telephone: new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(9),Validators.pattern(
       /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)])

   })

   erreurmes={
     'username':[
       {type: 'required', message: 'Ce champ est obligatoire'},
       {type: 'minlength', message: 'Veuilez saisir au minimum 5 lettres' }
     ],
     'telephone': [
       { type: 'required', message: 'Le téléphone est obligatoire' },
       { type: 'minlength', message: 'Veuilez saisir au minimum 9 chiffres'},
       { type: 'maxlength', message: 'Veuilez saisir au maximum 9 chiffres' },
       { type: 'pattern', message: 'Veuilez renseigner un numéro correct' }

     ]

   }
}
