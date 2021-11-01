import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeComponent } from './lenguaje.component';

describe('LenguajeComponent', () => {
  let component: LenguajeComponent;
  let fixture: ComponentFixture<LenguajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
