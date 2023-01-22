import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePokemonComponent } from './single-pokemon.component';
import { SinglePokemonRoutingModule } from './single-pokemon-routing.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    SinglePokemonComponent,
  ],
  imports: [
    CommonModule,
    SinglePokemonRoutingModule,
    MaterialModule
  ]
})
export class SinglePokemonModule { }
