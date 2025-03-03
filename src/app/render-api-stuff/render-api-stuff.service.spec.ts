import { TestBed } from '@angular/core/testing';

import { RenderApiStuffService } from './render-api-stuff.service';

describe('RenderApiStuffService', () => {
  let service: RenderApiStuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenderApiStuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
