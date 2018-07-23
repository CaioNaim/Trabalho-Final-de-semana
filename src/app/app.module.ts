import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
    SobreNosComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
