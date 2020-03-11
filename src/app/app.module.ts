import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { TopBarNavComponent } from './top-bar-nav/top-bar-nav.component';


import { GestionDesVentesComponent } from './gestion-des-ventes/gestion-des-ventes.component';
import { GestionDesUtilisateuresComponent } from './gestion-des-utilisateures/gestion-des-utilisateures.component';
import { GestionDesDroitsComponent } from './gestion-des-droits/gestion-des-droits.component';
import { DroitService } from './Services/service droit/droit.service';
import { UtilisateurService } from './Services/service utilisateur/utilisateur.service';
import { ProduitComponent } from './gestion-des-ventes/produit/produit.component';
import { FournisseurComponent } from './gestion-des-ventes/fournisseur/fournisseur.component';
import { ClientComponent } from './gestion-des-ventes/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ProduitComponent,
    AppComponent,
    
    SideBarNavComponent,
    TopBarNavComponent,
    

    GestionDesVentesComponent,
    GestionDesUtilisateuresComponent,
    GestionDesDroitsComponent,
    ProduitComponent,
    FournisseurComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [DroitService , UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
