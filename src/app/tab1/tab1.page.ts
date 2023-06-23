import { Component, OnInit } from '@angular/core';
import { ServicioPersonajesService } from '../services/servicio-personajes.service';
import { Result } from '../interfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

arregloInfo:Result[]=[];

  constructor(private ServicioPersonajesService:ServicioPersonajesService, private router: Router) {}
  ngOnInit() {
    this.ServicioPersonajesService.getMetodoPersonaje().subscribe(respuesta=>{ console.log (respuesta);
    this.arregloInfo=respuesta.results})
    }


    //Traer ID
    idPersonaje(id: number){
      this.ServicioPersonajesService.asignarId(id);
    }



    /***FILTRO Personajes***/
arrayFiltroItemStatus=["Alive", "Dead"];
arrayFiltroItemSpecies=["Human", "Alien"];

valorFiltroStatus(filtro: string) {
  this.ServicioPersonajesService.getFiltroStatus(filtro).subscribe(respuestaFiltro => {
    console.log(respuestaFiltro);
    this.arregloInfo = respuestaFiltro.results;
  })
}
valorFiltroSpecies(filtro: string) {
  this.ServicioPersonajesService.getFiltroSpecies(filtro).subscribe(respuestaFiltro => {
    console.log(respuestaFiltro);
    this.arregloInfo = respuestaFiltro.results;
  })  
}
salirFiltro() {
  this.ngOnInit();
}
/**********/
}

