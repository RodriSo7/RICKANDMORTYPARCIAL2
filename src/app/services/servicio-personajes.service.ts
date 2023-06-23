import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject, infoRootObject } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  constructor(private http:HttpClient) { }
  getMetodoPersonaje(){
    return this.http.get<RootObject>("https://rickandmortyapi.com/api/character");
  }




   /****Mostrar INFO Personajes****/
   infoID: number=0;
   asignarId(id: number) {
    this.infoID = id;
  }
  
  getDetallePersonaje(id: Number){
    return this.http.get<infoRootObject>("https://rickandmortyapi.com/api/character/"+ id);      
   }
   
  /*FILTRO Personajes**/
  getFiltroStatus(filtro: string) {     
    return this.http.get<RootObject>("https://rickandmortyapi.com/api/character/?status=" + filtro);
}
getFiltroSpecies(filtro: string) {     
    return this.http.get<RootObject>("https://rickandmortyapi.com/api/character/?species=" + filtro);
}
  


}
