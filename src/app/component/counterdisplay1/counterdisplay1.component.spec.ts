import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counterdisplay1Component } from './counterdisplay1.component';

describe('Counterdisplay1Component', () => {
  let component: Counterdisplay1Component;
  let fixture: ComponentFixture<Counterdisplay1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Counterdisplay1Component]
    });
    fixture = TestBed.createComponent(Counterdisplay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
