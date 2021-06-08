import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import {Pedido}from'./../../shared/model/pedido';
import {PedidoService}from'./../../shared/service/pedido.service';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { PedidoProducto } from '../../shared/model/pedidoProducto';
import {FormBuilder, FormGroup , Validators} from '@angular/forms';
import { DatePipe}from'@angular/common';




@Component({
  selector: 'app-actualizar-pedido',
  templateUrl: './actualizar-pedido.component.html',
  styleUrls: ['./actualizar-pedido.component.css']
})
export class ActualizarPedidoComponent implements OnInit {

  pedidos$:Observable<Pedido[]>;
  public listaProductos: Observable<Producto[]>;
  visible:Boolean=false;
  pedidoField: FormGroup;
  pedidoG:Pedido;


  cantidad:number=0;
  fecha:Date;
  valorProductos:number=0;
  valorTotal:number=0;
  valorEnvio:number=0;
  valorIva:number=0;



  constructor(private pedidoService:PedidoService,
    protected productoService: ProductoService,
    private formBuilder:FormBuilder, private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.pedidos$=this.pedidoService.consultar();
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

  consulta(pedido:Pedido){
    this.listaProductos = this.productoService.consultarProductos(pedido.id);
    this.listaProductos.subscribe(productos=>{
      this.cantidad=productos.length;
      productos.map(producto1=>{
        this.valorProductos=producto1.precio+this.valorProductos;
     });                         
   });
  }

  mostarProductos(pedido:Pedido){
    this.consulta(pedido);
    this.pedidoG=pedido;
    this.visible=true;   
    this.iniciarDatos();
    this.construirFormularioPedido(pedido);
  }

  eliminar(item:PedidoProducto){
    console.log(item);
    this.pedidoService.eliminarProductoPedido(item).subscribe(respuesta=>{
      console.log(respuesta);
    });;
    this.consulta(this.pedidoG);
  }

  guardar(){
    this.pedidoService.actualizar(this.pedidoField.value).subscribe(respuesta => {
       console.log(respuesta['valor']);   
     }); 
     
  }

  private construirFormularioPedido(pedido:Pedido) {
    this.pedidoField=this.formBuilder.group({
      id:[pedido.id,[Validators.required]],
      fecha:[this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:00:00'),[Validators.required]],
      clienteId:[pedido.clienteId,[Validators.required]],
      iva:[pedido.iva,[Validators.required]],
      valorEnvio:[this.valorEnvio],
      total:[pedido.total,[Validators.required,Validators.min(1000)]]

    });
  }
}
