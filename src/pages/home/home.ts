import { Component } from '@angular/core';
import { EmojiPickerOptions } from '../../modules/emoji-pciker/services/emoji-picker-options.service';
import { EmojiPickerAppleSheetLocator } from '../../modules/emoji-pciker/sheets/sheet_apple_map';
import { CaretEvent } from '../../modules/emoji-pciker/lib/caret-event';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public content = 'Type letters...';
  public selectEvent = '';
  public caretEvent = '';

  private lastCaretEvent: CaretEvent;

  constructor(private emojiPickerOptions: EmojiPickerOptions) {
    this.emojiPickerOptions.setEmojiSheet({
      url: 'assets/sheets/sheet_apple_32.png',
      locator: EmojiPickerAppleSheetLocator,
      sheet: true
    });
  }

  emojiSelectedHandler(event) {
    console.log('emoji selected -> ', event);
    this.content = this.content.slice(0, this.lastCaretEvent.caretOffset) + event.char + this.content.slice(this.lastCaretEvent.caretOffset);
    this.selectEvent = JSON.stringify(event);
  }


  pickerClosedHandler(event) {
    console.log('picker closed -> ', event);
  }

  handleCurrentCaret(event: CaretEvent) {
    this.lastCaretEvent = event;
    this.caretEvent = `{ caretOffset : ${event.caretOffset}, caretRange: Range{...}, textContent: ${event.textContent} }`;
  }
}
