import { Component, OnInit } from '@angular/core';
import { ServicioPersonajesService } from '../services/servicio-personajes.service';
import { Result } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

//Arreglo Personajes
arregloInfo:Result[]=[];

  constructor(private ServicioPersonajesService:ServicioPersonajesService, private router: Router, private alertController: AlertController) {}
   
  ngOnInit() {
      //HOME Personajes
      this.ServicioPersonajesService.getMetodoPersonaje().subscribe(respuesta=>{ console.log (respuesta);
      this.arregloInfo=respuesta.results})
    }

  // DETALLES Personajes
  idPersonaje(id: number){// Esta funcion trae el id del HTML
      this.ServicioPersonajesService.asignarId(id);
  }

  //FILTRO Personajes
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

  //BUSCADOR Personajes
  texto: string = '';
  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  enviarTexto(texto: string) {
      this.ServicioPersonajesService.getBuscarPersonaje(texto)
        
        .pipe(
          catchError(error => {
            this.mostrarAlerta('Buscamos en el portal de Rick', 'Pero no encontramos resultados');
            return [];
          }))
        
        .subscribe(
          respuestaBuscar => {
            console.log(respuestaBuscar); 
            this.arregloInfo = respuestaBuscar.results;
          })
    }
}

