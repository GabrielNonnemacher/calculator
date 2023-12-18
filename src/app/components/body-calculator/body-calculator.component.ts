import { Component, signal } from '@angular/core';
import { ItemsButtonsCalculator } from 'src/app/common/constants/itemsButtonsCalculator.constant';

@Component({
  selector: 'app-body-calculator',
  templateUrl: './body-calculator.component.html',
  styleUrls: ['./body-calculator.component.css']
})
export class BodyCalculatorComponent {
  itemsButtonsCalculator = ItemsButtonsCalculator;
  systemFunction = signal("")

  public addFunction(param: string): void {
    if (param === 'CE') {
      this.clearDisplay();
    } else if (param === '=') {
      this.systemFunction.set(`${this.calcularExpressao(this.systemFunction())}`.replaceAll('.', ','));
    } else {
      this.systemFunction.update((elem) => elem.concat(param));
    }
  }

  private clearDisplay(): void {
    this.systemFunction.set("");
  }

  private calcularExpressao(expressao: string): string {
    try {
      return Function('"use strict";return (' + expressao.replaceAll('×', '*').replaceAll('÷', '/') + ')')();
    } catch (error) {
      setTimeout(() => this.clearDisplay(), 1000);
      return 'Error';
    }
  }
}
