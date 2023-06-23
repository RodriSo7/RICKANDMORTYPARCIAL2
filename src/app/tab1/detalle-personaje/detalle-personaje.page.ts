import { Component, OnInit } from '@angular/core';
import { ServicioPersonajesService } from 'src/app/services/servicio-personajes.service';
import { ActivatedRoute } from '@angular/router';
import { Result, RootObject, infoRootObject } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage implements OnInit {

  arregloDetallePersonajes: infoRootObject[]=[];
  constructor(private ServicioPersonajesService:ServicioPersonajesService, private route: ActivatedRoute) { }

  ngOnInit(){
    this.ServicioPersonajesService.getDetallePersonaje(this.ServicioPersonajesService.infoID).subscribe(respuestaDetalle =>{
      const tempArray: infoRootObject[] = [respuestaDetalle];
      this.arregloDetallePersonajes=tempArray;
      console.log(this.arregloDetallePersonajes);

  })

}
}