import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyratesComponent } from './currencyrates.component';

describe('CurrencyratesComponent', () => {
  let component: CurrencyratesComponent;
  let fixture: ComponentFixture<CurrencyratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
