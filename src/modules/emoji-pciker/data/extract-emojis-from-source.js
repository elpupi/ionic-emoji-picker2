var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "emoji-datasource/emoji.json", "../../../decorator/save-properties.decorator", "fs", "util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const emojisJson = require("emoji-datasource/emoji.json");
    const save_properties_decorator_1 = require("../../../decorator/save-properties.decorator");
    const fs = require("fs");
    const util = require("util");
    const $writeFile = util.promisify(fs.writeFile);
    class ExtractOption2 {
    }
    class ExtractOption3 {
    }
    class ExtractOption0 {
    }
    /* function forEach<T>(listOrObject: ListOrObject<T>, exec: (arg: T) => void) {
        const collection: Array<T> = listOrObject instanceof Array ? listOrObject.entries() : Object.entries(listOrObject);
    
        for (const element of collection)
            exec(element);
    
    } */
    class UTF16 {
        constructor(value) { }
        get UPlus() {
            return `U+${this.value}`;
        }
        get slashU() {
            return `\\u${this.value}`;
        }
    }
    exports.UTF16 = UTF16;
    class VariationData {
        static extract(option, json) {
            let properties = option.properties;
            if (option.all || option.properties === undefined)
                properties = getProperties3(VariationData);
            const extracted = {};
            for (const [key, value] of Object.entries(json)) {
                for (const prop of Object.keys(option.properties)) {
                    if (key === prop)
                        extracted[key] = value;
                }
            }
            return extracted;
        }
    }
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], VariationData.prototype, "unified", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], VariationData.prototype, "image", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Number)
    ], VariationData.prototype, "sheet_x", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Number)
    ], VariationData.prototype, "sheet_y", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], VariationData.prototype, "added_in", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], VariationData.prototype, "has_img_apple", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], VariationData.prototype, "has_img_google", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], VariationData.prototype, "has_img_twitter", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], VariationData.prototype, "has_img_emojione", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], VariationData.prototype, "has_img_facebook", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], VariationData.prototype, "has_img_messenger", void 0);
    exports.VariationData = VariationData;
    class Variation {
        // real type of Variation in the json is 'UTF-16 name: VariationData'
        static extract(option, json) {
            const extracted = {};
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
    exports.Variation = Variation;
    class EmojiData {
        static extract(option, json) {
            let properties = option.properties;
            if (option.all || option.properties === undefined)
                properties = getProperties3(EmojiData);
            const extracted = {};
            for (const [key, value] of Object.entries(json)) {
                for (const prop of Object.keys(option.properties)) {
                    if (key === prop) {
                        if (key === 'skin_variations')
                            extracted[key] = Variation.extract(option.properties.skin_variations, value);
                        else
                            extracted[key] = value;
                    }
                }
            }
            return extracted;
        }
        static toJSON(emoji) {
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
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "name", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", UTF16)
    ], EmojiData.prototype, "unified", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", UTF16)
    ], EmojiData.prototype, "non_qualified", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "docomo", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "au", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "softbank", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "google", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "image", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Number)
    ], EmojiData.prototype, "sheet_x", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Number)
    ], EmojiData.prototype, "sheet_y", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "short_name", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Array)
    ], EmojiData.prototype, "short_names", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "text", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Array)
    ], EmojiData.prototype, "texts", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "category", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Number)
    ], EmojiData.prototype, "sort_order", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "added_in", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], EmojiData.prototype, "has_img_apple", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], EmojiData.prototype, "has_img_google", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], EmojiData.prototype, "has_img_twitter", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], EmojiData.prototype, "has_img_emojione", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], EmojiData.prototype, "has_img_facebook", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Boolean)
    ], EmojiData.prototype, "has_img_messenger", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "obsoletes", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", String)
    ], EmojiData.prototype, "obsoleted_by", void 0);
    __decorate([
        save_properties_decorator_1.SavePropsDecorator.saveProp(),
        __metadata("design:type", Object)
    ], EmojiData.prototype, "skin_variations", void 0);
    exports.EmojiData = EmojiData;
    class Emoji {
        static extract(option, json) {
            const extracted = []; // { [key: string]: Partial<EmojiData> } = {};
            for (const emoji of json)
                extracted.push(EmojiData.extract(option, emoji));
            return extracted;
        }
        static toJSON(emojis) {
            const json = [];
            for (const emoji of emojis)
                return json.push(EmojiData.toJSON(emoji));
        }
    }
    exports.Emoji = Emoji;
    function getProperties(classObject) {
        const properties = [];
        for (const prop of save_properties_decorator_1.SavePropsDecorator.getProps(classObject)) {
            properties.push(prop.name);
        }
        return properties; // new EmojiDataProperties(properties);
    }
    function getProperties2(classObject) {
        const properties = [];
        for (const prop of save_properties_decorator_1.SavePropsDecorator.getProps(classObject)) {
            properties.push(prop.name);
        }
        return properties; // new EmojiDataProperties(properties);
    }
    function getProperties3(classObject) {
        const properties = {};
        for (const prop of save_properties_decorator_1.SavePropsDecorator.getProps(classObject)) {
            properties[prop.name] = undefined;
        }
        return properties;
    }
    function extractFromDataSource2(option) {
        const content = Emoji.extract(option.extraction, emojisJson);
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
    function $writeToFile(fileName, content) {
        return $writeFile(fileName, content).then(() => {
            console.log(fileName);
            Promise.resolve('done');
        }, err => {
            console.error(err.red);
            return Promise.reject(err);
        });
    }
    const variationProperties = {};
    for (const prop of getProperties(VariationData)) {
        variationProperties[prop] = prop;
    }
    const variationPropsList = [
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
    const emojiProperties = {};
    for (const prop of getProperties(EmojiData)) {
        emojiProperties[prop] = prop;
    }
    const emojiPropsList = [
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
    const option = {
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
    extractFromDataSource2(option).then(() => {
        console.log('done :)');
    }, err => {
        console.error(err);
    });
});
//# sourceMappingURL=extract-emojis-from-source.js.map