import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RegistradosComponent } from './registrados/registrados.component';

const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'registrados', component: RegistradosComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, NavComponent, MainComponent, FooterComponent, RegistradosComponent ],
  bootstrap:    [ AppComponent ],
  
})



export class AppModule { }
