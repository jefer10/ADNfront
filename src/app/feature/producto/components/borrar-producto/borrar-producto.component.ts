import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { Observable } from 'rxjs';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  
})
export class BorrarProductoComponent implements OnInit {
  
  public listaProductos: Observable<Producto[]>;
 
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.listaProductos = this.productoServices.consultar();
  }

  borrar(producto:Producto){
    this.productoServices.eliminar(producto);
  }

}
