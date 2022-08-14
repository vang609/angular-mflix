import { TestBed } from '@angular/core/testing';

import { MenuFlagsService } from './menu-flags.service';

describe('MenuFlagsService', () => {
  let service: MenuFlagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuFlagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
