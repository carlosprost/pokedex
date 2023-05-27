import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from "../../components/header/header.module";
import { MaterialModule } from 'src/app/material/material.module';
import { ListadoPokemonModule } from '../../components/listado-pokemon/listado-pokemon.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        HeaderModule,
        MaterialModule,
        ListadoPokemonModule
    ]
})
export class HomeModule { }
