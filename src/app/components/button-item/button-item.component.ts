import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeButtonInput } from 'src/app/common/enum/typeButtonInput.enum';

@Component({
  selector: 'app-button-item',
  templateUrl: './button-item.component.html',
  styleUrls: ['./button-item.component.css']
})
export class ButtonItemComponent {
  @Input() item: string = "";
  @Input() typeButton: TypeButtonInput = TypeButtonInput.Numbers;
  @Output() value = new EventEmitter();

  public onClick(): void {
    this.value.emit(this.item);
  }
}
