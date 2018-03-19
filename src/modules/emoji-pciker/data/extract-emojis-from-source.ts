import * as emojisJson from 'emoji-datasource/emoji.json';
import { SavePropsDecorator, Class } from '../../../decorator/save-properties.decorator';
import * as fs from 'fs';
import * as util from 'util';
const $writeFile = util.promisify(fs.writeFile);



interface Option {
    type: Class;
}


type PartialAny<T> = {
    [k in keyof T]?: any
};


type OptionObjectType = EmojiData | VariationData;

class ExtractOption2<T extends OptionObjectType> { // implements Option {
    properties?: PartialAny<T>;
    all?: boolean;
    fileName: string;
    // type: Class;
}


class ExtractOption3<T> {
    properties: PartialAny<T>;
    all?: boolean;
}


class ExtractOption0 {
    extraction: ExtractOption3<EmojiData>;
    fileName: string;
}


interface PlainObject<T> {
    [key: string]: T;
}


type SameAs<T> = {
    [K in keyof T]: T[K]
};

type ListOrObject<T> = Array<T> | { [key: string]: T };

/* function forEach<T>(listOrObject: ListOrObject<T>, exec: (arg: T) => void) {
    const collection: Array<T> = listOrObject instanceof Array ? listOrObject.entries() : Object.entries(listOrObject);

    for (const element of collection)
        exec(element);

} */





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


export class VariationData {
    @SavePropsDecorator.saveProp() unified: string;// UTF16;
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

    static extract(option: ExtractOption3<VariationData>, json: SameAs<VariationData>) {
        let properties = option.properties;

        if (option.all || option.properties === undefined)
            properties = getProperties3(VariationData);

        const extracted: Partial<VariationData> = {};

        for (const [key, value] of Object.entries(json)) {

            for (const prop of Object.keys(option.properties)) {
                if (key === prop)
                    extracted[key] = value;
            }

        }

        return extracted;
    }
}



export type VariationDataPropertiesType = keyof VariationData;
export type VariationDataPropertiesList = Array<VariationDataPropertiesType>;
export type VariationDataList = Array<VariationData>;




export class Variation {
    denomination: string;
    data: VariationData;


    // real type of Variation in the json is 'UTF-16 name: VariationData'
    static extract(option: ExtractOption3<VariationData>, json: { [key: string]: VariationData }) {
        const extracted: { [key: string]: Partial<VariationData> } = {};

        for (const [key, value] of Object.entries(json))
            extracted[key] = VariationData.extract(option, value);


        return extracted;
    }

    static toJSON() {
        /*    const json = {};

           for (const prop of Object.getOwnPropertyNames(this)) {
               if (typeof this[prop] !== 'function') {
                   if (prop === 'skin_variations')
                       json[prop] === Variation.toJson();
                   else
                       json[prop] = this[prop];
               }
           }

           return json; */
        return undefined;
    }
}

export type VariationList = PlainObject<VariationData>;
export type VariationPropertiesType = keyof VariationData;
export type VariationPropertiesList = Array<VariationDataPropertiesType>;




export class EmojiData {
    @SavePropsDecorator.saveProp() name?: string;
    @SavePropsDecorator.saveProp() unified: UTF16;
    @SavePropsDecorator.saveProp() non_qualified?: UTF16;
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


    static extract(option: ExtractOption3<EmojiData>, json: SameAs<EmojiData>) {
        let properties = option.properties;

        if (option.all || option.properties === undefined)
            properties = getProperties3(EmojiData);


        const extracted: Partial<EmojiData> = {};

        for (const [key, value] of Object.entries(json)) {

            for (const prop of Object.keys(option.properties)) {
                if (key === prop) {
                    if (key === 'skin_variations')
                        extracted[key] = Variation.extract(option.properties.skin_variations, value as VariationList) as any;
                    else
                        extracted[key] = value;
                }
            }

        }

        return extracted;
    }

    static toJSON(emoji: Partial<EmojiData>) {
        const json = {};

        for (const prop of Object.getOwnPropertyNames(emoji)) {
            if (prop === 'skin_variations')
                json[prop] === Variation.toJSON();
            else
                json[prop] = emoji[prop];

        }

        return json;
    }
}

export type EmojiDataPropertiesType = keyof EmojiData;
export type EmojiDataPropertiesList = Array<EmojiDataPropertiesType>;


export class Emoji {
    static extract(option: ExtractOption3<EmojiData>, json: Array<EmojiData>) {
        const extracted: Partial<EmojiData>[] = [];// { [key: string]: Partial<EmojiData> } = {};

        for (const emoji of json)
            extracted.push(EmojiData.extract(option, emoji));


        return extracted;
    }

    static toJSON(emojis: Partial<EmojiData>[]) {
        const json: Partial<EmojiData>[] = [];

        for (const emoji of emojis)
            return json.push(EmojiData.toJSON(emoji));
    }
}


/* class EmojiDataProperties {
    constructor(readonly properties: Array<EmojiDataPropertiesType>) {
        this.properties = properties;
    }

    includes(name: EmojiDataPropertiesType) {
        return this.properties.indexOf(name) !== -1;
    }
} */


function getProperties(classObject: typeof VariationData): VariationDataPropertiesList;
function getProperties(classObject: typeof EmojiData): EmojiDataPropertiesList;
function getProperties(classObject: typeof VariationData | typeof EmojiData) {
    const properties: Array<string> = [];

    for (const prop of SavePropsDecorator.getProps(classObject as Class)) {
        properties.push(prop.name as EmojiDataPropertiesType);
    }

    return properties; // new EmojiDataProperties(properties);
}


export type EmojiDataList = Array<EmojiData>;

export interface ExtractOption {
    emoji?: {
        properties: EmojiDataPropertiesList;
        all?: boolean;
    };
    variation?: {
        properties: VariationDataPropertiesList;
        all?: boolean;
    };
    fileName: string;
}


function getProperties2(classObject: typeof VariationData): VariationDataPropertiesList;
function getProperties2(classObject: typeof EmojiData): EmojiDataPropertiesList;
function getProperties2(classObject: Class) {
    const properties: Array<string> = [];

    for (const prop of SavePropsDecorator.getProps(classObject)) {
        properties.push(prop.name as EmojiDataPropertiesType);
    }

    return properties; // new EmojiDataProperties(properties);
}


function getProperties3(classObject: typeof VariationData): PartialAny<VariationData>;
function getProperties3(classObject: typeof EmojiData): PartialAny<EmojiData>;
function getProperties3(classObject: Class) {
    const properties = {};

    for (const prop of SavePropsDecorator.getProps(classObject)) {
        properties[prop.name] = undefined;
    }

    return properties;
}

function extractFromDataSource2(option: ExtractOption0) {
    const content = Emoji.extract(option.extraction, emojisJson as any);

    /* const extract = function <OptionType extends OptionObjectType>(option: ExtractOption2<OptionType>, json: ListOrObject<any>): PartialAny<OptionType>[] {
        let properties: Array<keyof OptionType> = [];

        if (option.all || option.properties === undefined)
            properties = getProperties2(option.type);


        const extracted: PartialAny<OptionType>[] = [];

        forEach < T >
        for (const entry of json as any as PartialAny<OptionType>[]) {
            const newExtracted = {} as PartialAny<OptionType>;
            extracted.push(newExtracted);

            for (const prop of properties) {

                if (entry[prop] !== undefined) {
                    if (prop instanceof ExtractOption2) {
                        const subExtracted = extract(prop, entry);
                        newExtracted[prop] = subExtracted;
                    } else
                        newExtracted[prop] = entry[prop];
                }
            }

        }

        return extracted;
    };
*/
    return $writeToFile(option.fileName, JSON.stringify(content));
}

/* export function extractFromDataSource(option: ExtractOption = { fileName: undefined }) {
    let emojiProperties: EmojiDataPropertiesList = [];
    let variationProperties: VariationDataPropertiesList = [];

    if (option.emoji.all || option.emoji.properties === undefined)
        emojiProperties = getProperties(EmojiData);

    if (option.variation.all || option.variation.properties === undefined)
        variationProperties = getProperties(VariationData);




    const emojis: EmojiDataList = [];

    for (const emoji of emojisJson as any as EmojiDataList) {
        const newEmojiData = {} as EmojiData;
        emojis.push(newEmojiData);

        for (const prop of emojiProperties) {

            if (emoji[prop] !== undefined) {
                if (prop === 'skin_variations') {
                    for (const prop of variationProperties);
                } else
                    newEmojiData[prop] = emoji[prop];
            }
        }

    }

    return $writeToFile(option.fileName, JSON.stringify(emojis));
} */


function $writeToFile(fileName: string, content: string) {
    return $writeFile(fileName, content).then(
        () => {
            console.log(fileName);
            Promise.resolve('done');
        },
        err => {
            console.error(err.red);
            return Promise.reject(err);
        }
    );
}




const variationProperties: { [key: string]: EmojiDataPropertiesType } = {};

for (const prop of getProperties(VariationData)) {
    variationProperties[prop] = prop;
}


const variationPropsList: VariationDataPropertiesList = [
    'unified',
    'image',
    'sheet_x',
    'sheet_y',
    'added_in',
    'has_img_apple',
    'has_img_google',
    'has_img_twitter',
    'has_img_emojione',
    'has_img_facebook',
    'has_img_messenger'
];


const emojiProperties: { [key: string]: EmojiDataPropertiesType } = {};

for (const prop of getProperties(EmojiData)) {
    emojiProperties[prop] = prop;
}

const emojiPropsList: EmojiDataPropertiesList = [
    'name',
    'unified',
    'non_qualified',
    'docomo',
    'au',
    'softbank',
    'google',
    'image',
    'sheet_x',
    'sheet_y',
    'short_name',
    'short_names',
    'text',
    'texts',
    'category',
    'sort_order',
    'added_in',
    'has_img_apple',
    'has_img_google',
    'has_img_twitter',
    'has_img_emojione',
    'has_img_facebook',
    'has_img_messenger',
    'obsoletes',
    'obsoleted_by',
    'skin_variations'
];

/* const option: ExtractOption = {
    fileName: 'caca.json',
    properties: [
        emojiProperties['name'],
        emojiProperties['unified'],
        emojiProperties['non_qualified'],
        emojiProperties['category'],
        emojiProperties['skin_variations']
    ]
};

extractFromDataSource(option).then(
    () => console.log('done :)'),
    err => console.error(err)
);
 */

const option: ExtractOption0 = {
    fileName: 'pipi.json',
    extraction: {
        properties: {
            name: true,
            unified: true,
            skin_variations: {
                properties: {
                    unified: true,
                    image: true,
                    sheet_x: true
                }
            }
        }
    }
};


extractFromDataSource2(option).then(
    () => {
        console.log('done :)');
    },
    err => {
        console.error(err);
    }
);
