import { Injectable } from '@angular/core';
import { EmojiEvent } from '../lib/emoji-event';
import { LocationPosition } from '../sheets/sheet_apple_map';

@Injectable()
export class EmojiPickerOptions {
  private options: EmojiPickerSheetOption;

  setEmojiSheet(config: EmojiPickerSheetOption) {
    if (!config || !config.url || !config.locator) {
      return console.error('EmojiPickerService.setEmojiSheet: cannot accept data, missing arguments');
    }

    this.options = config;
  }

  get url() {
    return this.options.url;
  }


  get locator() {
    return this.options.locator;
  }
}

export interface EmojiPickerSheetOption {
  url: string;
  locator: (iconName: string) => LocationPosition;
  sheet: boolean;
}
