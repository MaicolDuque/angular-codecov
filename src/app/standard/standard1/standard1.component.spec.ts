import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standard1Component } from './standard1.component';

describe('Standard1Component', () => {
  let component: Standard1Component;
  let fixture: ComponentFixture<Standard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Standard1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Standard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
