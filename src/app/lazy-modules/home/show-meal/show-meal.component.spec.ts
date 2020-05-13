import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMealComponent } from './show-meal.component';

describe('ShowMealComponent', () => {
  let component: ShowMealComponent;
  let fixture: ComponentFixture<ShowMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
