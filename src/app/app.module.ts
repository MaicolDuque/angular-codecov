import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Standard1Component } from './standard/standard1/standard1.component';
import { Standard2Component } from './standard/standard2/standard2.component';
import { Standalone1Component } from './standalone/standalone1/standalone1.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, Standalone1Component],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
