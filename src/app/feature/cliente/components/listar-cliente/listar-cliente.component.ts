import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService}from'../../shared/service/cliente.service'
import {Cliente}from'../../shared/model/cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  public listaCliente: Observable<Cliente[]>;

  constructor(private clienteservice:ClienteService) { }

  ngOnInit(): void {
    this.listaCliente=this.clienteservice.consultar();
  }

}
