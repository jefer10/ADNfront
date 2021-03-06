import { Component, OnInit } from '@angular/core';
import {Producto}from'@producto/shared/model/producto';
import {CartService}from'@core-service/cart.service';
import {FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { PedidoService }from'./../../shared/service/pedido.service';
import { DatePipe}from'@angular/common';
import { PartialPedidoProducto } from '../../shared/model/partialPedidoProducto';
import { Pedido } from '../../shared/model/pedido';








@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.css']
})
export class CrearPedidoComponent implements OnInit {

  pedidoField: FormGroup;
  productos$:Observable<Producto[]>;
  listaDeProductos:Producto[]=[];
  listaDePedido:Observable<Pedido[]>;
  pedidoProducto:PartialPedidoProducto;
  respuesta1:object;
  idpedido=1;

  cantidad:number=0;
  fecha:Date;
  valorProductos:number=0;
  valorTotal:number=0;
  valorEnvio:number=0;
  valorIva:number=0;

  constructor(private cartService:CartService,
              protected pedidoService:PedidoService,
              private formBuilder:FormBuilder,
              private datePipe:DatePipe
              //private http:HttpClient
              ){
                        this.valorProductos=0;
                        this.productos$=this.cartService.cart$;
                        this.cartService.cart$.subscribe(productos=>{
                          this.cantidad=productos.length;
                          productos.map(producto1=>{
                            this.valorProductos=producto1.precio+this.valorProductos;
                         });                         
                       });
                       this.iniciarDatos();
                       this.construirFormularioPedido();
                       this.listaDePedido=this.pedidoService.consultar();
                       this.listaDePedido.subscribe(pedidos=>{this.idpedido= pedidos.length});
                       
                      
  }

  ngOnInit(): void {
  }

  //event:Event
  crear() {

     this.pedidoService.guardar(this.pedidoField.value).subscribe(respuesta => {
      console.log(respuesta['valor']);   
    }); 
    
    this.enviarProductos();
    

    this.fecha=null;
    this.valorProductos=0;
    this.valorTotal=0;
    this.valorEnvio=0;
    this.valorIva=0;
  }



  enviarProductos(){

    this.cartService.cart$.subscribe(productos=>{
     productos.map(producto=>{
       this.listaDeProductos=[...this.listaDeProductos,producto];
     });
    });
    console.log(this.idpedido);
    console.log(this.listaDeProductos);
    this.idpedido=this.idpedido+1;
    console.log(this.idpedido);
    //setTimeout(function(){ ()=>{this.productosPedido();}  }, 500);
    this.productosPedido();
    
  }

 
  productosPedido(){
    
    for (let producto of this.listaDeProductos) {
      console.log(this.idpedido);
     this.pedidoProducto= new PartialPedidoProducto(this.idpedido,producto.id);
     this.pedidoService.enlace(this.pedidoProducto).subscribe(respuesta=>{
       console.log("ok");
       console.log(respuesta);
     });
     console.log(producto);
   }
  }



  private iniciarDatos(){
    this.fecha= new Date() ;
    this.valorIva=this.valorProductos*0.19;
    if(this.valorProductos>200000 || this.cantidad===0){
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

