import { Component, Input, EventEmitter, Output } from '@angular/core';
import { EmojiPickerOptions } from "../services";

@Component({
  selector: 'emoji-button',
  styleUrls: ['../styles/emoji-button.scss'],
  template: `
<button
  *ngIf="!emojiPickerOptions.options.sheet; else sheetButton"
  class="emoji-button"
  (click)="selectionEmitter.emit(dataToEmit || emoji)">
  {{emoji[0]}}
</button>
<ng-template #sheetButton>
  <span class="emoji-button-from-sheet-enclosure"
      (click)="selectionEmitter.emit(dataToEmit || emoji)">
    <span
      class="emoji-button-from-sheet"
      [style.backgroundImage]="'url(' + emojiPickerOptions.options.sheet.url + ')'"
      [style.backgroundPositionX]="-emojiPickerOptions.options.sheet.locator(emoji[1]).x * 25 + 'px'"
      [style.backgroundPositionY]="-emojiPickerOptions.options.sheet.locator(emoji[1]).y * 25 + 'px'">
    </span>
  </span>
</ng-template>
  `
})

export class EmojiButtonComponent {
  @Input('emoji') emoji;
  @Input('dataToEmit') dataToEmit;
  @Input('options') options;
  @Input('fitzpatrick') fitzpatrick;

  @Output('selection') selectionEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private emojiPickerOptions: EmojiPickerOptions) { }
}
