import { Component, signal } from '@angular/core';
import { TypeButtonMode } from './common/enum/typeButtonMode.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typeMode = signal(TypeButtonMode);
  mode = signal(TypeButtonMode.Light);

  public onChangeMode(): void {
    this.mode.set(
      this.mode() === TypeButtonMode.Light
        ? TypeButtonMode.Dark
        : TypeButtonMode.Light
    );
  }
}
