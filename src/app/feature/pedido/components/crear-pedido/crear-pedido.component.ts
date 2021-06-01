import { Component, OnInit } from '@angular/core';
import {Producto}from'@producto/shared/model/producto';
import {CartService}from'@core-service/cart.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PedidoService }from'./../../shared/service/pedido.service';


//,FormControl, Validators
//const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
//const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

  productoForm: FormGroup;
  productos$:Observable<Producto[]>;
  
  fecha:Date;
  valorProductos:number=0;
  valorTotal:number;
  valorEnvio:number=50000;
  valorIva:number;

  constructor(private cartService:CartService,
                      protected pedidoService:PedidoService) {

    this.productos$=this.cartService.cart$;
    this.cartService.cart$.subscribe(productos=>{
      productos.map(producto1=>{
        this.valorProductos=producto1.precio+this.valorProductos;
      });
    });
  }

  ngOnInit(): void {
    
    this.fecha= new Date();
    this.valorIva=this.valorProductos*0.19;
    if(this.valorProductos<200000){
      this.valorEnvio=0;
    }
    this.valorTotal=this.valorProductos+this.valorEnvio+this.valorIva; 
    
    this.construirFormularioProducto();

  }

  cerar() {
    this.pedidoService.guardar(this.productoForm.value);
  }


  private construirFormularioProducto() {
    /*
    this.productoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
    */
  }
}
