import { Component, Input} from '@angular/core';
import { Pokemon } from '../../interface/pokemon.interfece'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: Pokemon
  
  constructor(private router: Router){}


  abrirPokemon(pokemon: Pokemon){
    this.router.navigate(['/', pokemon.id])
    
  }
}
