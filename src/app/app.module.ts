import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonItemComponent } from './components/button-item/button-item.component';
import { DysplayCalculatorComponent } from './components/dysplay-calculator/dysplay-calculator.component';
import { BodyCalculatorComponent } from './components/body-calculator/body-calculator.component';
import { ButtonModeComponent } from './components/button-mode/button-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonItemComponent,
    DysplayCalculatorComponent,
    BodyCalculatorComponent,
    ButtonModeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
