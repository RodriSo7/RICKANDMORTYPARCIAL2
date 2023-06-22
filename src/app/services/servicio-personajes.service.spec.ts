import { TestBed } from '@angular/core/testing';

import { ServicioPersonajesService } from './servicio-personajes.service';

describe('ServicioPersonajesService', () => {
  let service: ServicioPersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
