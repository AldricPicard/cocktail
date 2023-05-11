import {Component, Inject} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DrinkObject} from "../../modele/DrinkObject";

@Component({
  selector: 'app-appel-api',
  templateUrl: './appel-api.component.html',
  styleUrls: ['./appel-api.component.scss']
})
export class AppelAPIComponent {
  public appelAPI$ : Observable<DrinkObject>;



  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {
    this.appelAPI$ = this.http.get<DrinkObject>('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    console.log(this.appelAPI$)
  }

  public RechercheCocktail(recherchedrink: string) {
    this.appelAPI$ = this.http.get<DrinkObject>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ recherchedrink)
  }

  public rechercheingredient(rechercheingredient: string) {
    this.appelAPI$ = this.http.get<DrinkObject>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ rechercheingredient)
  }
}
