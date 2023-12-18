import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeButtonMode } from 'src/app/common/enum/typeButtonMode.enum';

@Component({
  selector: 'app-button-mode',
  templateUrl: './button-mode.component.html',
  styleUrls: ['./button-mode.component.css']
})
export class ButtonModeComponent {
  typeMode = TypeButtonMode;
  @Input() mode = TypeButtonMode.Light;
  @Output() onClick = new EventEmitter;

  public onChange(): void {
    this.onClick.emit();
  }
}
