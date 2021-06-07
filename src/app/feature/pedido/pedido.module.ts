import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearPedidoComponent } from './components/crear-pedido/crear-pedido.component';
import { BorrarPedidoComponent } from './components/borrar-pedido/borrar-pedido.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';
import { PedidoService } from './shared/service/pedido.service';
import { PedidoRoutingModule}from'./../pedido/pedido-routing.module';
import { ActualizarPedidoComponent } from './components/actualizar-pedido/actualizar-pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule}from '@shared/shared.module';
import { DatePipe } from '@angular/common';
import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  declarations: [
    CrearPedidoComponent,
    BorrarPedidoComponent,
    ListarPedidoComponent,
    ActualizarPedidoComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ],
  providers:[PedidoService, DatePipe]
})
export class PedidoModule { }
