import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-emoji-picker-header',
  templateUrl: 'emoji-picker-header.html'
})
export class EmojiPickerHeader {

  @Input('mtEmojisCategories') emojisCategories;
  @Input('mtInputAutofocus') inputAutofocus;

  @Output('mtCategorySelection') categorySelection = new EventEmitter<any>();
  @Output('mtSearch') searchEmitter = new EventEmitter<string>();


  constructor() { }

  public searchHandler(event) {
    this.searchEmitter.emit(event);
  }

  public categorySelectedHandler(event) {
    this.categorySelection.emit(event);
  }

}
