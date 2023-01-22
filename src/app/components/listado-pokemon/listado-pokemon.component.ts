import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interface/pokemon.interfece'
import { PokeapiService } from 'src/app/services/pokeapi.service';


@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss']
})
export class ListadoPokemonComponent {
  @Input() singlePokemon!: Pokemon

  listado: Pokemon[] = []
  pokemon!:any

  breakpoint: number = 5

  constructor(private poke: PokeapiService){
    
    this.getPokemons()
    this.columnasPorTamaño(window.innerWidth)
    
  }

  getPokemons(){
    for(let i = 1; i < 248; i++){
      this.poke.getPokemon(`${i}`).subscribe(data => {
        let pokemones: Pokemon = data
        this.listado.push(pokemones)
        
      })
    }
  }

  onResize(window: any) {
    
    this.columnasPorTamaño(window.currentTarget.innerWidth)
  }

  columnasPorTamaño(tamaño: number){
    if(tamaño >= 1500){
      this.breakpoint = 5
    }else if(tamaño < 1500 && tamaño >= 1230){
      this.breakpoint = 4
    }else if(tamaño < 1230 && tamaño >= 900){
      this.breakpoint = 3
    }else if(tamaño < 900 && tamaño >= 700){
      this.breakpoint = 2
    }else{
      this.breakpoint = 1
    }
  }
 
}
