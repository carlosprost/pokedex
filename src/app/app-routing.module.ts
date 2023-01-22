import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule) },
  { path: ':order', loadChildren: () => import('./view/single-pokemon/single-pokemon.module').then(m => m.SinglePokemonModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
