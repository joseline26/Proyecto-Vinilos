import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonalizadoComponent } from './components/personalizado/personalizado.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { GenerosComponent } from './components/generos/generos.component';
import { SharedComponent } from './components/shared/shared.component'



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    PersonalizadoComponent,
    CarritoComponent,
    GenerosComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


