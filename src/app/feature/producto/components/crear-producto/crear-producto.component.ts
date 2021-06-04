import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService,protected formBuilder: FormBuilder) { 
    this.construirFormularioProducto();
  }

  ngOnInit() {
    
  }

  cerar() {
    console.log(this.productoForm.value);
    this.productoServices.guardar(this.productoForm.value).subscribe(respuesta => {
      console.log(respuesta);
      console.log("yyyy");
    });;
    console.log("zzzz");
    
  }

  private construirFormularioProducto() {
    this.productoForm =this.formBuilder.group({
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      precio:[0,[Validators.required]]
    });
  }

}

