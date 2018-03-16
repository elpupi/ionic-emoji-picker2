import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CategoryMetadata } from '../../lib/emojis.data';

@Component({
  selector: 'mt-emoji-categories',
  templateUrl: 'emoji-categories.html'
})
export class EmojiCategories {
  @Input('mtEmojisCategories') emojisCategories: Array<CategoryMetadata>;
  @Output('mtCategorySelection') categorySelection = new EventEmitter<any>();

  constructor() { }

  handleCategorySelection(event) {
    this.categorySelection.emit(event);
  }

}
