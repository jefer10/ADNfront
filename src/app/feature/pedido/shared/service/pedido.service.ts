import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PartialPedidoProducto } from '../model/partialPedidoProducto';
import{Pedido}from'../model/pedido';
import { PedidoProducto } from '../model/pedidoProducto';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Pedido[]>(`${environment.endpoint}/pedido`, this.http.optsName('consultar pedido'));
  }

  public guardar(pedido: Pedido) {
    let tt:Observable<boolean>;
    tt=this.http.doPost<Pedido, boolean>(`${environment.endpoint}/pedido`, pedido,
    this.http.optsName('crear pedido'));
    console.log(`${environment.endpoint}/pedido`);
    return tt;
  }
  
  public actualizar(pedido: Pedido) {
    console.log(`${environment.endpoint}/pedido`);
    return this.http.doPut<Pedido, boolean>(`${environment.endpoint}/pedido/${pedido.id}`, pedido,
    this.http.optsName('crear pedido'));;
  }
  public enlace(pedidoProducto:PartialPedidoProducto){
    return this.http.doPost<PartialPedidoProducto, boolean>(`${environment.endpoint}/pedido-producto`, pedidoProducto,
    this.http.optsName('crea enlace pedido-producto'))
  }

  public eliminar(pedido: Pedido) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pedido/${pedido.id}`,
                                                 this.http.optsName('eliminar pedido'));
  }

  public eliminarProductoPedido(pedidoProducto: PedidoProducto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pedido-producto/${pedidoProducto.id}`,
                                                 this.http.optsName('eliminar pedido'));
  }
}
