import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarClienteComponent} from'./components/actualizar-cliente/actualizar-cliente.component';
import { CrearClienteComponent} from './components/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent} from './components/eliminar-cliente/eliminar-cliente.component';
import { ListarClienteComponent} from './components/listar-cliente/listar-cliente.component';
import {ClienteComponent}from'./components/cliente/cliente.component';


const routes: Routes = [
    {
      path: '',
      component: ClienteComponent,
      children: [
        {
          path:'listar',
          component:ListarClienteComponent,
        },
        {
          path: 'borrar',
          component: EliminarClienteComponent
        },
        {
          path: 'crear',
          component: CrearClienteComponent
        },
        {
          path:'actualizar',
          component:ActualizarClienteComponent
        }
      ]
    },
]

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ClienteRoutingModule{}