import { TestBed } from '@angular/core/testing';
import { IdiomaViewModelService } from './servicios.service';

fdescribe('IdiomaViewModelService', () => {
  let service: IdiomaViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdiomaViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
