import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../usuario/interface/sesion';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {

  constructor(private _snackbar:MatSnackBar) { }
  mostrarAlerta(mensaje:string , tipo:string)
  {
    this._snackbar.open(mensaje,tipo,{
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:2000,
      panelClass:tipo
    });
  }

  guardarSesion(Sesion:Sesion)
  {
    localStorage.setItem('UsuarioSesion',JSON.stringify(Sesion));
  }

  obtenerSesion()
  {
    const SesionString = localStorage.getItem('UsuarioSesion');
    const usuarioToken = JSON.parse(SesionString!);
    return usuarioToken;
  }

  eliminarSesion()
  {
    localStorage.removeItem('UsuarioSesion');
  }
}
