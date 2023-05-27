import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPokemonComponent } from './listado-pokemon.component';
import { CardComponent } from '../card/card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoPokemonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ListadoPokemonComponent
  ]
})
export class ListadoPokemonModule { }
