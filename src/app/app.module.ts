import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { TopBarNavComponent } from './top-bar-nav/top-bar-nav.component';


import { GestionDesVentesComponent } from './gestion-des-ventes/gestion-des-ventes.component';
import { GestionDesUtilisateuresComponent } from './gestion-des-utilisateures/gestion-des-utilisateures.component';
import { GestionDesDroitsComponent } from './gestion-des-droits/gestion-des-droits.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarNavComponent,
    TopBarNavComponent,


    GestionDesVentesComponent,
    GestionDesUtilisateuresComponent,
    GestionDesDroitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
