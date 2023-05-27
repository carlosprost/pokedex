import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pokemon } from '../../interface/pokemon.interfece';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss'],
})
export class ListadoPokemonComponent {
  @Input() singlePokemon!: Pokemon;

  listado: Pokemon[] = [];
  pokemon!: any;

  breakpoint: number = 5;

  pokemonSearch = new FormControl('');

  constructor(private poke: PokeapiService, private router: Router) {
    this.getPokemons();
    this.columnasPorTamaño(window.innerWidth);

  }

  getPokemons() {
    for (let i = 1; i < 248; i++) {
      this.poke.getPokemon(`${i}`).subscribe((data) => {
        let pokemones: Pokemon = data;
        this.listado.push(pokemones);
      });
    }
  }

  getPokemon(event: Event) {
    event.preventDefault();

    this.router.navigate(['/', this.pokemonSearch.value?.toLowerCase()])
    
  }

  onResize(window: any) {
    this.columnasPorTamaño(window.currentTarget.innerWidth);
  }

  columnasPorTamaño(tamaño: number) {
    if (tamaño >= 1500) {
      this.breakpoint = 5;
    } else if (tamaño < 1500 && tamaño >= 1230) {
      this.breakpoint = 4;
    } else if (tamaño < 1230 && tamaño >= 900) {
      this.breakpoint = 3;
    } else if (tamaño < 900 && tamaño >= 700) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 1;
    }
  }
}
