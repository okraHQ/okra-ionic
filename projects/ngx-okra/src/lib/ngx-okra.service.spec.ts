import { TestBed } from '@angular/core/testing';

import { NgxOkraService } from './ngx-okra.service';

describe('NgxOkraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxOkraService = TestBed.get(NgxOkraService);
    expect(service).toBeTruthy();
  });
});
