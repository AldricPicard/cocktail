import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelAPIComponent } from './appel-api.component';

describe('AppelAPIComponent', () => {
  let component: AppelAPIComponent;
  let fixture: ComponentFixture<AppelAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppelAPIComponent]
    });
    fixture = TestBed.createComponent(AppelAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
