import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService} from './../../shared/service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  clienteForm:FormGroup;

  constructor(private clienteService:ClienteService,protected formBuilder:FormBuilder) {
    this.construirFormularioProducto();
   }

  ngOnInit(): void {
  }

  cerar() {
    console.log(this.clienteForm.value);
    this.clienteService.guardar(this.clienteForm.value).subscribe(respuesta => {
      console.log(respuesta);
    });;    
  }

  private construirFormularioProducto() {
    this.clienteForm =this.formBuilder.group({
      nombre:['',[Validators.required]],
      direccion:['',[Validators.required]]
    });
  }
}
