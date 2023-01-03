import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DataCatsService } from './data-cats.service';

describe('DataCatsService', () => {
  let service: DataCatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataCatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});