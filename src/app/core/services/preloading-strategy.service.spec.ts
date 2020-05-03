import { TestBed } from '@angular/core/testing';

import { PreloadingStrategyService } from './preloading-strategy.service';

describe('PreloadingStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloadingStrategyService = TestBed.get(PreloadingStrategyService);
    expect(service).toBeTruthy();
  });
});
