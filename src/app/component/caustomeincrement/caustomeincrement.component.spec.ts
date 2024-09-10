import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaustomeincrementComponent } from './caustomeincrement.component';

describe('CaustomeincrementComponent', () => {
  let component: CaustomeincrementComponent;
  let fixture: ComponentFixture<CaustomeincrementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaustomeincrementComponent]
    });
    fixture = TestBed.createComponent(CaustomeincrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
