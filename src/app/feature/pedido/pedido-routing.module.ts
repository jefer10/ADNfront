import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPedidoComponent}from'./../pedido/components/crear-pedido/crear-pedido.component';
import { BorrarPedidoComponent}from'./../pedido/components/borrar-pedido/borrar-pedido.component';
import {ActualizarPedidoComponent}from'./components/actualizar-pedido/actualizar-pedido.component';
import {ListarPedidoComponent}from'./components/listar-pedido/listar-pedido.component';
import {PedidoComponent}from'./components/pedido/pedido.component';

const routes: Routes = [
  {
    path: '',
    component: CrearPedidoComponent
  },
  {
    path:'order',
    component:PedidoComponent,
    children: [
      {
        path: 'borrar',
        component: BorrarPedidoComponent
      },
      {
        path:'actualizar',
        component:ActualizarPedidoComponent
      },
      {
        path:'listar',
        component:ListarPedidoComponent
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
