import { ExtractOption, PlainObject } from './definition';
import { SavePropsDecorator } from '../decorator/save-properties.decorator';
import { getProperties } from './get-properties';



export class VariationData {
    @SavePropsDecorator.saveProp() unified: string; // UTF16;
    @SavePropsDecorator.saveProp() image: string;
    @SavePropsDecorator.saveProp() sheet_x: number;
    @SavePropsDecorator.saveProp() sheet_y: number;
    @SavePropsDecorator.saveProp() added_in: string;
    @SavePropsDecorator.saveProp() has_img_apple: boolean;
    @SavePropsDecorator.saveProp() has_img_google: boolean;
    @SavePropsDecorator.saveProp() has_img_twitter: boolean;
    @SavePropsDecorator.saveProp() has_img_emojione: boolean;
    @SavePropsDecorator.saveProp() has_img_facebook: boolean;
    @SavePropsDecorator.saveProp() has_img_messenger: boolean;

    static extract(option: ExtractOption<VariationData>, json: VariationData) {
        let properties = option.properties;

        if (option.all || option.properties === undefined)
            properties = getProperties(VariationData);


        const extracted: Partial<VariationData> = {};

        for (const [key, value] of Object.entries(json)) {

            for (const prop of Object.keys(properties)) {
                if (key === prop)
                    extracted[key] = value;
            }

        }

        return extracted;
    }
}



export type VariationDataPropertiesType = keyof VariationData;
export type VariationDataPropertiesList = Array<VariationDataPropertiesType>;



export class Variation {
    denomination: string;
    data: VariationData;


    // real type of Variation in the json is 'UTF-16 name: VariationData'
    static extract(option: ExtractOption<VariationData>, json: { [key: string]: VariationData }) {
        const extracted: { [key: string]: Partial<VariationData> } = {};

        for (const [key, value] of Object.entries(json))
            extracted[key] = VariationData.extract(option, value);


        return extracted;
    }
}

export type VariationList = PlainObject<VariationData>;
