import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCocktailComponent } from './un-cocktail.component';

describe('UnCocktailComponent', () => {
  let component: UnCocktailComponent;
  let fixture: ComponentFixture<UnCocktailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnCocktailComponent]
    });
    fixture = TestBed.createComponent(UnCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
