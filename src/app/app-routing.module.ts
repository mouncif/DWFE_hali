import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionDesVentesComponent } from './gestion-des-ventes/gestion-des-ventes.component';
import { GestionDesUtilisateuresComponent } from './gestion-des-utilisateures/gestion-des-utilisateures.component';
import { GestionDesDroitsComponent } from './gestion-des-droits/gestion-des-droits.component';
import { ProduitComponent } from './gestion-des-ventes/produit/produit.component';
import { ClientComponent } from './gestion-des-ventes/client/client.component';
import { FournisseurComponent } from './gestion-des-ventes/fournisseur/fournisseur.component';


const routes: Routes = [
  {path: 'gestionVente', component: ProduitComponent},
  {path: 'gestionuser', component: GestionDesUtilisateuresComponent},
  {path: 'gestionDroit', component: GestionDesDroitsComponent},
  {path :'produit', component: ProduitComponent},
  {path :'fournisseur', component: FournisseurComponent},
  {path :'client', component: ClientComponent},
  {path: '', component: ProduitComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
