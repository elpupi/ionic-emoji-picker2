import { EmojiData } from '../model/emoji/emoji-data';
import { Data } from '../model/emoji/data';
import { EmojisRequest } from './emojis-request.service';

import * as camelCase from 'camelcase';

import { Element } from 'json-object-parser/element';

import { ArrayOptionProperties } from 'json-object-parser/array/array-option';
import { ObjectOptionProperties } from 'json-object-parser/object/object-option';






export interface ScanOption {
    returnEmojis?: boolean;
}



export class Emojis {
    private emojis: { [category: string]: EmojiData };
    // private categories: Array<string>;
    private emojis2: Partial<EmojiData>[];


    constructor(private emojisRequest: EmojisRequest) {
        emojisRequest.$emojis.subscribe({
            next: json => this.createEmojis(json),
            error: err => console.error(err)
        });
    }

    private createEmojis(json: any) {

        const extractionOption = {
            returnObject: Data,
            mutate: (key: string, emoji: any) => {
                if (key.includes('-')) {
                    const newKey = camelCase(key);
                    emoji[newKey] = emoji[key];

                    delete emoji[key];
                }

                return emoji;
            },

            object: {
                filter: (key: string, value: any) => {
                    if (key === 'category')
                        return false;

                    return true;
                },

                properties: {
                    all: true
                }
            } as ObjectOptionProperties
        } as ArrayOptionProperties;

        const data = Element.create(json, extractionOption).parse();
        console.log(data);
    }

    public scan(text: string, options: ScanOption = {}): { replacedText: string, emojis?: Array<EmojiData> } {
        return undefined;
    }

    public fromUnified() {

    }

    public fromShortName() {

    }

    public fromName() {
    }

}
