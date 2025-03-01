import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Standalone1Component } from './standalone/standalone1/standalone1.component';
import { SharedModule } from './shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Standalone1Component, SharedModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-angular-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-angular-app');
  });
});
