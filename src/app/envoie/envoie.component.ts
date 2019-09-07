import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.css']
})
export class EnvoieComponent implements OnInit {

  constructor( private enve:TransactionService) { }

  ngOnInit() {
  }
  
  onsubmit(data: any) {
    console.log(data);
    this.enve.envoie(data,)
      .subscribe(
        data => {
          console.log(' Envoie effectué ')

        }, err => {
          console.log(err);
        }
      )
  }

  envoie = new FormGroup({
    nomExp: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]),
    prenomExp: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)],
  ),
    telephonExp: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(
      /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
    numeropieceEXp: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(9), Validators.pattern(
      /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
    montant: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(9), Validators.pattern(
      /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)]),
    nomBen: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]),
    prenomBen: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^([a-zA-Z \u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/)]),
    telephonBen: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(
      /^7[0678]([0-9][0-9][0-9][0-9][0-9][0-9][0-9])/)])
            
  })

  erreurmes = {
    'nomExp': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'pattern', message: 'Veuilez saisir des lettres' }

    ],

    'prenomExp': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'pattern', message: 'Veuilez saisir des lettres' }

    ],

    'telephonExp': [
      { type: 'required', message: 'Le téléphone est obligatoire' },
      { type: 'pattern', message: 'Veuilez renseigner un numéro correct' }
    ],
  
    'numeropieceEXp': [
      { type: 'required', message: 'Le téléphone est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir au minimum 12 chiffres' },
      
    ],
     
    'montant': [
      { type: 'required', message: 'Ce champ est obligatoire' },
    ],

    'nomBen': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir des lettres' }
    ],

    'prenomBen': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'minlength', message: 'Veuilez saisir des lettres' }
    ],

    'telephonBen': [
      { type: 'required', message: 'Ce champ est obligatoire' },
      { type: 'minlength', message: 'Veuilez renseigner un numéro correct' }
    ],

  }

}
