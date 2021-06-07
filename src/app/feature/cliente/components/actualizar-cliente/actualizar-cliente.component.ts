import { Component, OnInit } from '@angular/core';
import { Cliente}from './../../shared/model/cliente';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService}from'./../../shared/service/cliente.service';


@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  clienteForm:FormGroup;
  public listaCliente: Observable<Cliente[]>;
  estado:Boolean=false;


  constructor(protected clienteServices: ClienteService,
    protected formBuilder:FormBuilder) { 
      this.contruirFormulario(Cliente);
    }

  ngOnInit(): void {
    this.listaCliente= this.clienteServices.consultar();
  }


  formulario(cliente:Cliente){
    this.contruirFormulario(cliente);
    this.estado=true;
  }

  actualizar(){
    console.log(this.clienteForm.value);
    this.clienteServices.actualizar(this.clienteForm.value).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }

  private contruirFormulario(cliente){
    this.clienteForm=this.formBuilder.group({
      id:[cliente.id,[Validators.required]],
      nombre:[cliente.nombre,[Validators.required]],
      direccion:[cliente.direccion,[Validators.required]]
    });
  }


}
