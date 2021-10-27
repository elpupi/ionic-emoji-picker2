import { VariationData } from './variation-data';

export class EmojiData {
    name?: string;
    unified: string; // UTF16;
    image: string;
    sheetX: number;
    sheetY: number;
    shortNames: Array<string>;
    texts?: Array<string>;
    hasImg: boolean;
    skinVariations: Array<VariationData>;
}
