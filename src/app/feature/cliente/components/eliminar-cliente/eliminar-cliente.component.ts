import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Cliente}from'./../../shared/model/cliente';
import { ClienteService} from'./../../shared/service/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  public listaCliente: Observable<Cliente[]>;
  constructor(protected clienteService:ClienteService) { }

  ngOnInit(): void {
    this.listaCliente = this.clienteService.consultar();
  }

  borrar(cliente:Cliente){
    console.log(cliente);
    this.clienteService.eliminar(cliente).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }

}
