import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../compartido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  username: string = '';
  constructor(private router: Router, private compartidoService: CompartidoService)
  {

  }
  ngOnInit(): void {
    const userToken = this.compartidoService.obtenerSesion();
    if (userToken) {
      this.username = userToken.userName;
    }
  }
  logout(){
  this.compartidoService.eliminarSesion();
  this.router.navigate(['login']);
  }
}
