import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '@producto/shared/model/producto';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {


  productForm:FormGroup;
  estado:Boolean=false;
  public listaProductos: Observable<Producto[]>;

  constructor(protected productoServices: ProductoService,
    protected formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.listaProductos = this.productoServices.consultar();

  }

  formulario(producto:Producto){
    this.contruirFormulario(producto);
    this.estado=true;
  }

  actualizar(){
    console.log(this.productForm.value);
    this.productoServices.actualizar(this.productForm.value).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }

  private contruirFormulario(producto){
    this.productForm=this.formBuilder.group({
      id:[producto.id,[Validators.required]],
      nombre:[producto.nombre,[Validators.required]],
      descripcion:[producto.descripcion,[Validators.required]],
      precio:[producto.precio,[Validators.required]]
    });
  }

 
}
