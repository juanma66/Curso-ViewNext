import { TestBed } from '@angular/core/testing';

import { ContactosViewModelService } from './servicios.service';

describe('ContactosViewModelService', () => {
  let service: ContactosViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
