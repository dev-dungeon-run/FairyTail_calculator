import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorPage } from './calculator-page/calculator-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fairyTail_calculator');
}
