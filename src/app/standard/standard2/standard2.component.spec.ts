import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard2Component } from './standard2.component';

describe('Standard2Component', () => {
  let component: Standard2Component;
  let fixture: ComponentFixture<Standard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Standard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Standard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
