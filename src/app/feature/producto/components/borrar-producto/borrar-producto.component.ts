import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { Observable } from 'rxjs';
import { Producto } from '@producto/shared/model/producto';



@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls:['./borrar-producto.component.css']
  
})
export class BorrarProductoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio', 'eliminar'];

  public listaProductos: Observable<Producto[]>;
  constructor(protected productoServices: ProductoService) { 
    
  }

  ngOnInit() {
    this.listaProductos = this.productoServices.consultar();
  }

  borrar(producto:Producto){
    console.log(producto);
    this.productoServices.eliminar(producto).subscribe(respuesta=>{
      console.log(respuesta);
    });
    console.log("rrr");
  }

}
