import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthLibService } from './auth-lib.service';

describe('AuthLibService', () => {
  let service: AuthLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [AuthLibService]
    });
    service = TestBed.inject(AuthLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
