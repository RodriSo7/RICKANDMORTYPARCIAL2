import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, RootObject } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonajesService {

  constructor(private http:HttpClient) { }
  getMetodoPersonaje(){
    return this.http.get<RootObject>("https://rickandmortyapi.com/api/character");
  }
}
