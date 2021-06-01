import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import{Pedido}from'../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Pedido[]>(`${environment.endpoint}/pedido`, this.http.optsName('consultar pedido'));
  }

  public guardar(pedido: Pedido) {
    return this.http.doPost<Pedido, boolean>(`${environment.endpoint}/pedido`, pedido,
                                                this.http.optsName('crear/actualizar pedido'));
  }

  public eliminar(pedido: Pedido) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/pedido/${pedido.id}`,
                                                 this.http.optsName('eliminar pedido'));
  }
}
