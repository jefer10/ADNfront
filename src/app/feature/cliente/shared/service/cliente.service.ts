import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(protected http: HttpService) { }

  
  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/cliente`, this.http.optsName('consultar clientes'));
  }

  public guardar(cliente:  Cliente) {
    return  this.http.doPost<Cliente, boolean>(`${environment.endpoint}/cliente`, cliente,
                                                  this.http.optsName('crear cliente'));;
  }
  public actualizar(cliente:Cliente){
    return this.http.doPut<Cliente, boolean>(`${environment.endpoint}/cliente/${cliente.id}`, cliente,
    this.http.optsName('actualizar productos'));
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/cliente/${cliente.id}`,
                                                 this.http.optsName('eliminar pedido'));
  }
}
