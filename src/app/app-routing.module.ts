import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UnCocktailComponent} from "./composants/un-cocktail/un-cocktail.component";
import {AppelAPIComponent} from "./composants/appel-api/appel-api.component";

const routes: Routes = [
  {path: 'uncocktail/:id', component: UnCocktailComponent},
  {path: 'touslescocktails' ,component : AppelAPIComponent},
  {path: '**' ,component : AppelAPIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
