import { Component, ViewChildren, Input, Output, QueryList, EventEmitter } from '@angular/core';
import { EmojiCategory } from '../../emoji-category/emoji-category';

@Component({
  selector: 'mt-emoji-picker-list',
  templateUrl: 'emoji-picker-list.html'
})
export class EmojiPickerList {
  @ViewChildren(EmojiCategory) emojiCategory: QueryList<EmojiCategory>;
  @Input('mtEmojis') emojis;
  @Output('mtEmojiSelection') emojiSelectionEmitter = new EventEmitter<any>();

  constructor() { }

  public selectCategory(event) {
    this.emojiCategory.forEach((categoryCmp: EmojiCategory) => {

      if (categoryCmp['category'].name === event.name) {
        categoryCmp.scrollIntoView();
      }

    });
  }

}
