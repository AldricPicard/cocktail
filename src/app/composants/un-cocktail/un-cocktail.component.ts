import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {DrinkObject} from "../../modele/DrinkObject";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-un-cocktail',
  templateUrl: './un-cocktail.component.html',
  styleUrls: ['./un-cocktail.component.scss']
})
export class UnCocktailComponent implements OnInit{
  public id : number;
  public unCocktail$ : Observable<DrinkObject> | undefined;
  constructor(
    @Inject(HttpClient) private http: HttpClient,
    @Inject(ActivatedRoute) private route:ActivatedRoute
  )
  {
    this.id = +this.route.snapshot.paramMap.get('idDrink')!;
    console.log(this.id);

  }

  public ngOnInit(): void {
    this.unCocktail$ = this.http.get<DrinkObject>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+this.id)
   }
}
