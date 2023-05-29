import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {PersonalizadoComponent} from './components/personalizado/personalizado.component';
import { GenerosComponent } from './components/generos/generos.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'personalizado', component: PersonalizadoComponent },
  {path: 'generos', component: GenerosComponent},
  {path: 'carrito', component: CarritoComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

