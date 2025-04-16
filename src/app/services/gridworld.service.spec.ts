import { TestBed } from '@angular/core/testing';

import { GridworldService } from './gridworld.service';

describe('GridworldService', () => {
  let service: GridworldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridworldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
