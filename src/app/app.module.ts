import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppelAPIComponent } from './composants/appel-api/appel-api.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UnCocktailComponent } from './composants/un-cocktail/un-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    AppelAPIComponent,
    UnCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
