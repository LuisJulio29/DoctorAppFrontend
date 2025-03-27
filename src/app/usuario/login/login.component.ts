import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { CompartidoService } from 'src/app/compartido/compartido.service';
import { Login } from '../interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  FormLogin:FormGroup;
  OcultarPassword:boolean = true;
  mostrarLoading:boolean = false;

  constructor(private fb:FormBuilder,
  private router:Router, private usuarioService:UsuarioService,
  private compartidoService:CompartidoService) { 

    this.FormLogin = this.fb.group({
      Usuario: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  iniciarSesion(){
    this.mostrarLoading = true;
    const request: Login = {
      username: this.FormLogin.value.Usuario,
      password: this.FormLogin.value.Password
    };
    this.usuarioService.iniciarSesion(request).subscribe({
      next:(Response) => {
        this.compartidoService.guardarSesion(Response);
        this.router.navigate(['layout']);
      },
      complete: () => {
        this.mostrarLoading = false;
      },
      error: (error) => {
        this.compartidoService.mostrarAlerta(error.error, 'Error');
        this.mostrarLoading = false;
      }
    })
  }

}
