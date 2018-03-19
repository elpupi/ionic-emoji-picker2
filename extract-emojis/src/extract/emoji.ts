

import { ExtractOption, PartialAny } from './definition';
import { Variation, VariationList, VariationData } from './variation';
import { getProperties } from './get-properties';
import { SavePropsDecorator } from '../decorator/save-properties.decorator';



export interface EmojiExtractOptionProperties extends PartialAny<EmojiData> {
    skin_variations?: ExtractOption<VariationData>;
}

export interface EmojiExtractOption extends ExtractOption<EmojiData> {
    properties?: EmojiExtractOptionProperties;
}





export class EmojiData {
    @SavePropsDecorator.saveProp() name?: string;
    @SavePropsDecorator.saveProp() unified: string; // UTF16;
    @SavePropsDecorator.saveProp() non_qualified?: string; // UTF16;
    @SavePropsDecorator.saveProp() docomo?: string;
    @SavePropsDecorator.saveProp() au?: string;
    @SavePropsDecorator.saveProp() softbank?: string;
    @SavePropsDecorator.saveProp() google?: string;
    @SavePropsDecorator.saveProp() image: string;
    @SavePropsDecorator.saveProp() sheet_x: number;
    @SavePropsDecorator.saveProp() sheet_y: number;
    @SavePropsDecorator.saveProp() short_name: string;
    @SavePropsDecorator.saveProp() short_names: Array<string>;
    @SavePropsDecorator.saveProp() text?: string;
    @SavePropsDecorator.saveProp() texts?: Array<string>;
    @SavePropsDecorator.saveProp() category: string;
    @SavePropsDecorator.saveProp() sort_order: number;
    @SavePropsDecorator.saveProp() added_in: string;
    @SavePropsDecorator.saveProp() has_img_apple: boolean;
    @SavePropsDecorator.saveProp() has_img_google: boolean;
    @SavePropsDecorator.saveProp() has_img_twitter: boolean;
    @SavePropsDecorator.saveProp() has_img_emojione: boolean;
    @SavePropsDecorator.saveProp() has_img_facebook: boolean;
    @SavePropsDecorator.saveProp() has_img_messenger: boolean;
    @SavePropsDecorator.saveProp() obsoletes: string;
    @SavePropsDecorator.saveProp() obsoleted_by: string;
    @SavePropsDecorator.saveProp() skin_variations: VariationList;


    static extract(option: EmojiExtractOption, json: EmojiData) {
        let properties = option.properties;

        if (option.all || option.properties === undefined) {
            properties = getProperties(EmojiData);

            properties.skin_variations = { all: true } as ExtractOption<VariationData>;
        }


        const extracted: Partial<EmojiData> = {};

        for (const [key, value] of Object.entries(json)) {

            for (const prop of Object.keys(properties)) {
                if (key === prop) {
                    if (key === 'skin_variations')
                        extracted[key] = Variation.extract(properties.skin_variations, value as VariationList) as any;
                    else
                        extracted[key] = value;
                }
            }

        }

        return extracted;
    }
}


export type EmojiDataPropertiesType = keyof EmojiData;
export type EmojiDataPropertiesList = Array<EmojiDataPropertiesType>;



export class Emoji {
    static extract(option: EmojiExtractOption, json: Array<EmojiData>) {
        const extracted: Partial<EmojiData>[] = [];

        for (const emoji of json)
            extracted.push(EmojiData.extract(option, emoji));


        return extracted;
    }
}
