import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeModule } from './view/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { SinglePokemonModule } from './view/single-pokemon/single-pokemon.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    SinglePokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
