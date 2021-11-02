import { TestBed } from '@angular/core/testing';
import { ActorViewModelService } from './servicios.service';

fdescribe('ActorViewModelService', () => {
  let service: ActorViewModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorViewModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
