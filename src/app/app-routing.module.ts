import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';


const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "login", component: LoginComponent },
  { path: "partenaire", component: PartenaireComponent},   
  { path: "utilisateur", component:UtilisateurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
