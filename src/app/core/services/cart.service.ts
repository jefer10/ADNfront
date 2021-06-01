import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{Producto}from'@producto/shared/model/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productos:Producto[]=[];
  private cart=new BehaviorSubject<Producto[]>([]);
  cart$=this.cart.asObservable();

  constructor() { }

  addCart(productos:Producto){
    this.productos=[...this.productos,productos];
    this.cart.next(this.productos);
  }
}
