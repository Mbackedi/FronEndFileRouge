import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  constructor(private retre:TransactionService) { }

  ngOnInit() {
  }

  onsubmit(data: any) {
    console.log(data);
    this.retre.retrait(data)
      .subscribe(
        data => {
          console.log('Retrait effectué ')

        }, err => {
          console.log(err);
        }
      )
  }

  retrait = new FormGroup({
   
    code: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(
      /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
    typepieceBen: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(9), Validators.pattern(
      /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
    numeropieceBen: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(9), Validators.pattern(
      /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
   
  })

  erreurmes = {

    'code': [
      { type: 'required', message: 'le champ code est obligatoire' },
      { type: 'pattern', message: 'Veuilez renseigner un code correct' }
    ],

    'typepieceBen': [
      { type: 'required', message: 'Le type de piece est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir des numeros corrects' },

    ],

    'numeropieceBen': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'pattern', message: 'Veuilez renseigner un numéro correct' }

    ],

  }

}
