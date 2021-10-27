import { Component, ViewChild } from '@angular/core';
import { CaretEvent, EmojiEvent, EmojiPickerOptions } from '../src2';
import { EmojiPickerAppleSheetLocator } from '../src2/sheets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public eventMock;
  public eventPosMock;

  public direction = 'bottom';// Math.random() > 0.5 ? (Math.random() > 0.5 ? 'top' : 'bottom') : (Math.random() > 0.5 ? 'right' : 'left');
  public toggled = false;
  public content = 'Type letters, enter emojis, go nuts...';

  private _lastCaretEvent: CaretEvent;

  constructor(private emojiPickerOptions: EmojiPickerOptions) {
    this.emojiPickerOptions.setEmojiSheet({
      url: 'assets/sheet_apple_32.png',
      locator: EmojiPickerAppleSheetLocator
    });
  }

  handleSelection(event: EmojiEvent) {
    this.content = this.content.slice(0, this._lastCaretEvent.caretOffset) + event.char + this.content.slice(this._lastCaretEvent.caretOffset);
    this.eventMock = JSON.stringify(event);
  }

  handleCurrentCaret(event: CaretEvent) {
    this._lastCaretEvent = event;
    this.eventPosMock = `{ caretOffset : ${event.caretOffset}, caretRange: Range{...}, textContent: ${event.textContent} }`;
  }
}
