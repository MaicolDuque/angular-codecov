import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standalone1Component } from './standalone1.component';

describe('Standalone1Component', () => {
  let component: Standalone1Component;
  let fixture: ComponentFixture<Standalone1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Standalone1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Standalone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add', () => {
    expect(component.add(4, 3)).toEqual(7);
  });
});
