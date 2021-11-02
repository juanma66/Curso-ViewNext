import { TestBed } from '@angular/core/testing';
import { CategoriaViewModelService } from './servicios.service';

fdescribe('CategoriaViewModelService', () => {
  let service: CategoriaViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
