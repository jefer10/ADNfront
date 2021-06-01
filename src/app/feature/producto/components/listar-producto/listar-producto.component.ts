import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import{CartService}from'@core-service/cart.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Observable<Producto[]>;

 
  constructor(protected productoService: ProductoService,private carrtService:CartService) { }

  ngOnInit() {
    this.listaProductos = this.productoService.consultar();
  }

  addcart(producto:Producto){   
    console.log(producto.nombre);
    this.carrtService.addCart(producto);
  }
}
