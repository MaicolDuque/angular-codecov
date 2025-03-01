import { Component } from '@angular/core';
import { AppModule } from '../../app.module';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-standalone1',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './standalone1.component.html',
  styleUrl: './standalone1.component.scss',
})
export class Standalone1Component {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }
}
