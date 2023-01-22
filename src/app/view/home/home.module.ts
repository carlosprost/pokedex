import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from "../../components/header/header.module";
import { MaterialModule } from 'src/app/material/material.module';
import { ListadoPokemonModule } from '../../components/listado-pokemon/listado-pokemon.module';




@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeaderModule,
        MaterialModule,
        ListadoPokemonModule
    ]
})
export class HomeModule { }
