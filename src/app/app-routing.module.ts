import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionDesVentesComponent } from './gestion-des-ventes/gestion-des-ventes.component';
import { GestionDesUtilisateuresComponent } from './gestion-des-utilisateures/gestion-des-utilisateures.component';
import { GestionDesDroitsComponent } from './gestion-des-droits/gestion-des-droits.component';


const routes: Routes = [
  {path: 'gestionVente', component: GestionDesVentesComponent},
  {path: 'gestionuser', component: GestionDesUtilisateuresComponent},
  {path: 'gestionDroit', component: GestionDesDroitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
