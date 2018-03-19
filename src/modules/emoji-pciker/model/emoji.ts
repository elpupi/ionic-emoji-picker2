

export class UTF16 {
    private value: string;

    constructor(value) { }

    get UPlus() {
        return `U+${this.value}`;
    }

    get slashU() {
        return `\\u${this.value}`;
    }
}

export interface EmojiVariationData {
    unified: UTF16;
    image: string;
    sheet_x: number;
    sheet_y: number;
    added_in: string;
    has_img_apple: boolean;
    has_img_google: boolean;
    has_img_twitter: boolean;
    has_img_emojione: boolean;
    has_img_facebook: boolean;
    has_img_messenger: boolean;
}


export type EmojiVariationDataList = Array<EmojiVariationData>;


export interface EmojiVariation {
    denomination: string;
    data: EmojiVariationDataList;
}

export type EmojiVariationList = Array<EmojiVariation>;


export interface EmojiData {
    name: string;
    unified: UTF16;
    non_qualified?: UTF16;
    docomo?: string;
    au?: string;
    softbank?: string;
    google?: string;
    image: string;
    sheet_x: number;
    sheet_y: number;
    short_name: string;
    short_names: Array<string>;
    text?: string;
    texts?: Array<string>;
    category: string;
    sort_order: number;
    added_in: string;
    has_img_apple: boolean;
    has_img_google: boolean;
    has_img_twitter: boolean;
    has_img_emojione: boolean;
    has_img_facebook: boolean;
    has_img_messenger: boolean;
    obsoletes: string;
    obsoleted_by: string;
    skin_variations: EmojiVariationList;
}


export interface ScanOption {
    returnEmojis?: boolean;
}



export class Emojis {
    private emojis: Array<EmojiData>;

    constructor() { }

    scan(text: string, options: ScanOption = {}): { replacedText: string, emojis?: Array<EmojiData> } {
        return undefined;
    }

    fromUnified() {

    }

    ffromShortName() {

    }

    fromName() {
    }

}
