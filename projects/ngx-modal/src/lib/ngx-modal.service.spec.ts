import { TestBed } from '@angular/core/testing';

import { NgxModalService } from './ngx-modal.service';

describe('NgxModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxModalService = TestBed.get(NgxModalService);
    expect(service).toBeTruthy();
  });
});
