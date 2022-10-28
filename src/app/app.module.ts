import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RolesComponent } from './components/roles/roles.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    InicioComponent,
    ServiciosComponent,
    RolesComponent,
    EditarUsuarioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
