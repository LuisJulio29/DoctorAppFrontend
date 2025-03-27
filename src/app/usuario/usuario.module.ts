import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from '../compartido/compartido.module';
import { UsuarioService } from './Services/usuario.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule , CompartidoModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
