import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { EmojiPickerList } from '../emoji-picker-list/emoji-picker-list';
import { EMOJIS, EmojisList, Category, CategoryMetadata } from '../../../lib/emojis.data';



@Component({
  selector: 'mt-emoji-picker-content',
  templateUrl: 'emoji-picker-content.html'
})
export class EmojiPickerContent {
  @ViewChild(EmojiPickerList) emojiPickerList: EmojiPickerList;
  @Output('mtEmojiSelection') emojiSelectionEmitter = new EventEmitter<any>();
  @Input('mtInputAutofocus') inputAutofocus: boolean;


  private emojis: EmojisList;
  public filteredEmojis: EmojisList;

  public emojisCategories: Array<CategoryMetadata>;

  constructor() {
    this.emojis = EMOJIS.slice();
    this.filteredEmojis = this.emojis;
    this.emojisCategories = this.emojis.map((category: Category) => ({ icon: category.icon, name: category.name }));
  }


  public searchHandler(value) {
    const filteredEmojis = this.emojisCategories.map((category: CategoryMetadata) => ({ icon: category.icon, name: category.name, emojis: [] }));

    const valueToSearch = value.replace(/\s+/g, '_').toLowerCase();

    for (let i = 0; i < this.emojis.length; ++i) {
      // this.emojis[i]:  category
      this.emojis[i].emojis.forEach(emojiList => {

        if (emojiList[1].indexOf(valueToSearch) !== -1) {
          filteredEmojis[i].emojis.push(emojiList);
        }

      });
    }


    this.filteredEmojis = filteredEmojis;
  }

  public categorySelectionHandler(event) {
    this.emojiPickerList.selectCategory(event);
  }


  public emojiSelectedHandler(event) {
    this.emojiSelectionEmitter.emit(event);
  }
}
