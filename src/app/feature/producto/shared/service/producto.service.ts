import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/producto`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto) {
    console.log(`${environment.endpoint}/producto`);
    return this.http.doPost<Producto, boolean>(`${environment.endpoint}/producto`, producto,
                                                this.http.optsName('crear/actualizar productos'));
  }
  public actualizar(producto: Producto) {
    return this.http.doPut<Producto, boolean>(`${environment.endpoint}/producto/${producto.id}`, producto,
                                                this.http.optsName('crear/actualizar productos'));
  }


  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/producto/${producto.id}`,
                                                 this.http.optsName('eliminar productos'));
  }

  public consultarProductos(idpedido:number) {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/producto/${idpedido}`, this.http.optsName('consultar productos por pedido'));
  }
}
