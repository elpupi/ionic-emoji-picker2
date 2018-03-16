import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs/Subject';
// import "rxjs/add/operator/throttleTime";
// import "rxjs/add/operator/takeUntil";
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'mt-emoji-picker-search',
  templateUrl: 'emoji-picker-search.html'
})
export class EmojiPickerSearch {
  @Input('mtInputAutofocus') inputAutofocus: boolean;
  @Output('mtSearch') searchEmitter: EventEmitter<string> = new EventEmitter();
  @ViewChild('input') input: ElementRef;

  private searchValue: Subject<string> = new Subject();
  private destroyed = new Subject<boolean>();


  constructor(private renderer: Renderer2) {
    this.searchValue
      .pipe(takeUntil(this.destroyed))
      .subscribe(value => this.searchEmitter.emit(value));
  }

  ngAfterViewInit() {
    if (this.inputAutofocus) {
      const input = this.renderer.selectRootElement(this.input);
      input.nativeElement.focus();
    }
  }

  handleInputChange(event) {
    this.searchValue.next(event);
  }

  ngOnDestroy() {
    this.destroyed.next(true);
  }
}
