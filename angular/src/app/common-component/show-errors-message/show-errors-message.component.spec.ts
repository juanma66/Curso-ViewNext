import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowErrorsMessageComponent } from './show-errors-message.component';

describe('ShowErrorsMessageComponent', () => {
  let component: ShowErrorsMessageComponent;
  let fixture: ComponentFixture<ShowErrorsMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowErrorsMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowErrorsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
