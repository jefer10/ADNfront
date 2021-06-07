import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import {Pedido}from'./../../shared/model/pedido';
import { PedidoService }from'./../../shared/service/pedido.service';


@Component({
  selector: 'app-borrar-pedido',
  templateUrl: './borrar-pedido.component.html',
  styleUrls: ['./borrar-pedido.component.css']
})
export class BorrarPedidoComponent implements OnInit {
  
  pedidos$:Observable<Pedido[]>;
  constructor(protected pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.pedidos$=this.pedidoService.consultar();
  }
  eliminar(pedido:Pedido){
    this.pedidoService.eliminar(pedido).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }
  

}
