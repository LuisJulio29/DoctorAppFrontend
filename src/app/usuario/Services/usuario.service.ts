import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Login } from '../interface/login';
import { Observable } from 'rxjs';
import { Sesion } from '../interface/sesion';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = environment.apiUrl+"Usuario/";
  constructor(private http:HttpClient) { } 

  iniciarSesion(request:Login) : Observable<Sesion>{
    return this.http.post<Sesion>(this.baseUrl+"login",request);
  }

}
