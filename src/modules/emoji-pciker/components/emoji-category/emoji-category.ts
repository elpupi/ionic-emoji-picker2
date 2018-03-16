import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'mt-emoji-category',
  templateUrl: 'emoji-category.html'
})
export class EmojiCategory {

  @Input('mtCategory') category;

  constructor(private _element: ElementRef) { }

  public scrollIntoView() {
    this._element.nativeElement.scrollIntoView();
  }

}
