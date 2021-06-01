import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';



@NgModule({
  declarations: [
    CrearClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
