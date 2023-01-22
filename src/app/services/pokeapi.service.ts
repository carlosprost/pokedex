import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'
import { PokeList } from '../interface/pokemon-list.interfece'
import { Pokemon } from '../interface/pokemon.interfece'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  url: string = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  getPokemon(pokemon:string){
    return this.http.get<Pokemon>(`${this.url}${pokemon}`)
  }
}
