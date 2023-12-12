import { Component } from '@angular/core';
import { ItemsButtonsCalculator } from 'src/app/common/constants/itemsButtonsCalculator.constant';

@Component({
  selector: 'app-body-calculator',
  templateUrl: './body-calculator.component.html',
  styleUrls: ['./body-calculator.component.css']
})
export class BodyCalculatorComponent {
  systemFunction: string = "";
  itemsButtonsCalculator = ItemsButtonsCalculator;

  public addFunction(param: string): void {
    if (param === 'CE') {
      this.systemFunction = "";
      console.log(this.systemFunction);
    } else if (param === '=') {
      this.systemFunction = `${this.calcularExpressao(this.systemFunction)}`.replaceAll('.', ',');
      console.log(this.systemFunction);
    } else if(param.includes('E')) {
      this.systemFunction = "";
      console.log("sdbfdfffffffffff");
      
    }else {
      this.systemFunction = this.systemFunction.concat(param);
      console.log(this.systemFunction);
    }
  }

  private calcularExpressao(expressao: string): any {
    try {
      return Function('"use strict";return (' + expressao.replaceAll('×', '*').replaceAll('÷', '/') + ')')();  
    } catch (error) {
      return 'Error';
    }}
}
