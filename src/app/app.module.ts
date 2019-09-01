import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { CompteComponent } from './compte/compte.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from './authentification.service';
import { PartenaireService } from './partenaire.service';
import { UserService } from './user.service';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurService } from './utilisateur.service';
import { DepotComponent } from './depot/depot.component';
import { DepotService } from './depot.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PartenaireComponent,
    CompteComponent,
    LoginComponent,
    UtilisateurComponent,
    DepotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [
    AuthentificationService, PartenaireService, UserService, UtilisateurService, DepotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
