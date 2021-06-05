import { Component, OnInit } from '@angular/core';
import {Producto}from'@producto/shared/model/producto';
import {CartService}from'@core-service/cart.service';
import {FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { PedidoService }from'./../../shared/service/pedido.service';
import { DatePipe}from'@angular/common';







@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

  pedidoField: FormGroup;
  productos$:Observable<Producto[]>;
  
  fecha:Date;
  valorProductos:number;
  valorTotal:number;
  valorEnvio:number;
  valorIva:number;

  constructor(private cartService:CartService,
              protected pedidoService:PedidoService,
              private formBuilder:FormBuilder,
              private datePipe:DatePipe
              //private http:HttpClient
              ){
                        this.valorProductos=0;
                        this.productos$=this.cartService.cart$;
                        this.cartService.cart$.subscribe(productos=>{
                          productos.map(producto1=>{
                            this.valorProductos=producto1.precio+this.valorProductos;
                         });
                       });
                       this.iniciarDatos();
                       this.construirFormularioPedido();
                      
  }

  ngOnInit(): void {
  }

  //event:Event
  crear() {
    //event.preventDefault();//para evitar que recargue la pagina
    console.log(this.pedidoField.value);
    //return this.http.post(`${environment.endpoint}/pedido}`,this.pedidoField.value);
    this.pedidoService.guardar(this.pedidoField.value).subscribe(respuesta => {
      console.log(respuesta);
      console.log("yyyy");
    });

    this.fecha=null;
    this.valorProductos=null;
    this.valorTotal=null;
    this.valorEnvio=null;
    this.valorIva=null;
  }

  private iniciarDatos(){
    this.fecha= new Date() ;
    this.valorIva=this.valorProductos*0.19;
    if(this.valorProductos>200000){
      this.valorEnvio=0;
    }else{
      this.valorEnvio=77000;
    }
    this.valorTotal=this.valorProductos+this.valorEnvio+this.valorIva; 
  }

  private construirFormularioPedido() {
    this.pedidoField=this.formBuilder.group({

      fecha:[this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:00:00'),[Validators.required]],
      clienteId:[1,[Validators.required]],
      iva:[this.valorIva,[Validators.required]],
      valorEnvio:[this.valorEnvio],
      total:[this.valorTotal,[Validators.required,Validators.min(1000)]]

    });
  }



  
}

