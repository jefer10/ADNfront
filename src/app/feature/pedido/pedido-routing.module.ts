import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPedidoComponent}from'./../pedido/components/crear-pedido/crear-pedido.component';
import { BorrarPedidoComponent}from'./../pedido/components/borrar-pedido/borrar-pedido.component';
import {ActualizarPedidoComponent}from'./components/actualizar-pedido/actualizar-pedido.component';


const routes: Routes = [
  {
    path: '',
    component: CrearPedidoComponent,
    children: [
      {
        path: 'crear',
        component: ActualizarPedidoComponent
      },
      {
        path: 'borrar',
        component: BorrarPedidoComponent
      }
    ]
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
