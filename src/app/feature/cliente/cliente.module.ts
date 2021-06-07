import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ClienteRoutingModule }from './cliente-routing.module';
import {ClienteService} from './shared/service/cliente.service';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrearClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent,
    ListarClienteComponent,
    ClienteComponent,

  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers:[ClienteService]
})
export class ClienteModule { }
