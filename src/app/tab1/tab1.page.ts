import { Component, OnInit } from '@angular/core';
import { ServicioPersonajesService } from '../services/servicio-personajes.service';
import { Result, RootObject } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

arregloInfo:Result[]=[];

  constructor(private propiedadPersonajes:ServicioPersonajesService) {}
  ngOnInit() {
    this.propiedadPersonajes.getMetodoPersonaje().subscribe(respuesta=>{ console.log (respuesta);
    this.arregloInfo=respuesta.results})
    }
  }
