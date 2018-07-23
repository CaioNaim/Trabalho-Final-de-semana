import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';


import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreNosComponent} from './pages/sobre-nos/sobre-nos.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login' , component: LoginComponent},
  { path: 'contato' , component: ContatoComponent },
  { path: 'SobreNos' , component: SobreNosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}