import { TestBed } from '@angular/core/testing';

import { ItemsArrayService } from './items-array.service';

describe('ItemsArrayService', () => {
  let service: ItemsArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
