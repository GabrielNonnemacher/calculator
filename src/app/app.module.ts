import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonItemComponent } from './components/button-item/button-item.component';
import { DysplayCalculatorComponent } from './components/dysplay-calculator/dysplay-calculator.component';
import { BodyCalculatorComponent } from './components/body-calculator/body-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonItemComponent,
    DysplayCalculatorComponent,
    BodyCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
