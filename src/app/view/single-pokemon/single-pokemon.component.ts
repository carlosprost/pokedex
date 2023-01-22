import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/interface/pokemon.interfece';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss']
})
export class SinglePokemonComponent {

  order: string
  pokemon: Pokemon[] = []



  constructor(private route: Router, private router: ActivatedRoute, private pokeServicer: PokeapiService){
    this.order = this.router.snapshot.paramMap.get('order') || '1'

    this.getPokomon(this.order)
    
  }

  getPokomon(order: string){
    this.pokeServicer.getPokemon(order).subscribe(data =>{
      
      this.pokemon.push(data)
    })
  }

  volver(){
    this.route.navigate(['/'])
  }
}
