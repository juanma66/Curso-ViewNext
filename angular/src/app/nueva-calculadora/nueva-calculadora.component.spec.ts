import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCalculadoraComponent } from './nueva-calculadora.component';

describe('NuevaCalculadoraComponent', () => {
  let component: NuevaCalculadoraComponent;
  let fixture: ComponentFixture<NuevaCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
