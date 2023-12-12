import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dysplay-calculator',
  templateUrl: './dysplay-calculator.component.html',
  styleUrls: ['./dysplay-calculator.component.css']
})
export class DysplayCalculatorComponent {
  @Input() response: string = "34234"
}
