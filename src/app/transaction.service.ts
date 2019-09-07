import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {


  constructor(private http:HttpClient) { }

  envoie(envoye) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/envoie";

    const formData: FormData = new FormData();
    formData.append('nomExp', envoye.nomExp);
    formData.append('prenomExp', envoye.prenomExp);
    formData.append('telephonExp', envoye.telephonExp);
    formData.append('numeropieceEXp', envoye.numeropieceEXp);
    formData.append('montant', envoye.montant);
    formData.append('nomBen', envoye.nomBen);
    formData.append('prenomBen', envoye.prenomBen);
    formData.append('telephonBen', envoye.telephonBen);
    return this.http.post(host, formData, {headers:headers});
  }
   
  retrait(retrait) {
    var headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    const host = "http://localhost:8000/api/retrait";
    const formData: FormData = new FormData();
    formData.append('code', retrait.code);
    formData.append('typepieceBen', retrait.typepieceBen);
    formData.append('numeropieceBen', retrait.numeropieceBen);
    return this.http.post(host, formData, {headers:headers});
  }

}
