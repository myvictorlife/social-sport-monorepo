import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLibService } from './auth-lib.service';

import { AuthLibComponent } from './auth-lib.component';
import { HttpClientModule } from '@angular/common/http';

describe('AuthLibComponent', () => {
  let component: AuthLibComponent;
  let fixture: ComponentFixture<AuthLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLibComponent ],
      imports: [
        HttpClientModule
      ],
      providers: [
        AuthLibService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
