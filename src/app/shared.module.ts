import { NgModule } from '@angular/core';
import { Standard1Component } from './standard/standard1/standard1.component';
import { Standard2Component } from './standard/standard2/standard2.component';

@NgModule({
  declarations: [Standard1Component, Standard2Component],
  imports: [],
  exports: [Standard1Component, Standard2Component],
  providers: [],
})
export class SharedModule {}
