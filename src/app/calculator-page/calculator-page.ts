import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngIf, *ngFor, etc.


@Component({
  selector: 'calculator-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator-page.html',
  styleUrls: ['./calculator-page.scss'],
})
export class CalculatorPage {

}
