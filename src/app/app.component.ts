import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'myNewApp';
  faCoffee = faCoffee;
  constructor(private router: Router) {
  }

  goToIndex() {
    this.router.navigate(['/', 'index']);
  }
  goToPersonalizado() {
    this.router.navigate(['/', 'personalizado']);
  }
  goToGeneros() {
    this.router.navigate(['/', 'generos']);
  }
  goToCarrito() {
    this.router.navigate(['/', 'carrito']);
  }

}
