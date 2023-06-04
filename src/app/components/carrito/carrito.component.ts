import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {
  cartProducts: Product[] = [];

  addToCart(product: Product) {
    const itemIndex = this.cartProducts.findIndex(item => item.name === product.name);
    if (itemIndex > -1) {
      // El producto ya existe en el carrito, aumentar la cantidad
      this.cartProducts[itemIndex].quantity++;
    } else {
      // Agregar el nuevo producto al carrito
      const newProduct: Product = { ...product, quantity: 1 };
      this.cartProducts.push(newProduct);
    }
  }

  removeFromCart(product: Product) {
    const itemIndex = this.cartProducts.findIndex(item => item.name === product.name);
    if (itemIndex > -1) {
      const item = this.cartProducts[itemIndex];
      if (item.quantity > 1) {
        // Si la cantidad es mayor a 1, disminuir la cantidad
        item.quantity--;
      } else {
        // Si la cantidad es 1, eliminar el producto del carrito
        this.cartProducts.splice(itemIndex, 1);
      }
    }
  }
}


interface Product {
  name: string;
  image: string;
  price: string;
  quantity: number;
}


