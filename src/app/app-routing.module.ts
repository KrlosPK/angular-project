import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RolesComponent } from './components/roles/roles.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  { path: 'editar-usuario', component: EditarUsuarioComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'servicios', component: ServiciosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
