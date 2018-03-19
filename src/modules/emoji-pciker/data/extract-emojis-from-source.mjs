var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import emojisJson from 'emoji-datasource/emoji.json';
import { SavePropsDecorator } from '../../../decorator/save-properties.decorator';
import fs from 'fs';
import util from 'util';
const $writeFile = util.promisify(fs.writeFile);
function f() {
    return function decorator(target, propertyKey) {
        console.log('target: ', target, ' propKey: ', propertyKey);
    };
}
export class UTF16 {
    constructor(value) { }
    get UPlus() {
        return `U+${this.value}`;
    }
    get slashU() {
        return `\\u${this.value}`;
    }
}
export class EmojiData {
}
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "name", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", UTF16)
], EmojiData.prototype, "unified", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", UTF16)
], EmojiData.prototype, "non_qualified", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "docomo", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "au", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "softbank", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "google", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "image", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Number)
], EmojiData.prototype, "sheet_x", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Number)
], EmojiData.prototype, "sheet_y", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "short_name", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Array)
], EmojiData.prototype, "short_names", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "text", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Array)
], EmojiData.prototype, "texts", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "category", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Number)
], EmojiData.prototype, "sort_order", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "added_in", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Boolean)
], EmojiData.prototype, "has_img_apple", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Boolean)
], EmojiData.prototype, "has_img_google", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Boolean)
], EmojiData.prototype, "has_img_twitter", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Boolean)
], EmojiData.prototype, "has_img_emojione", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Boolean)
], EmojiData.prototype, "has_img_facebook", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Boolean)
], EmojiData.prototype, "has_img_messenger", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "obsoletes", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", String)
], EmojiData.prototype, "obsoleted_by", void 0);
__decorate([
    SavePropsDecorator.saveProp(),
    __metadata("design:type", Array)
], EmojiData.prototype, "skin_variations", void 0);
/* class EmojiDataProperties {
    constructor(readonly properties: Array<EmojiDataPropertiesType>) {
        this.properties = properties;
    }

    includes(name: EmojiDataPropertiesType) {
        return this.properties.indexOf(name) !== -1;
    }
} */
function emojiDataProperties() {
    const properties = [];
    for (const prop of SavePropsDecorator.getProps(EmojiData)) {
        properties.push(prop.name);
    }
    return properties; // new EmojiDataProperties(properties);
}
export function extractFromDataSource(option = { all: true, fileName: undefined }) {
    let properties = option.properties;
    if (option.all || option.properties === undefined)
        properties = emojiDataProperties();
    const emojis = [];
    for (const emoji of emojisJson) {
        const newEmojiData = {};
        emojis.push(newEmojiData);
        for (const prop in properties) {
            if (emoji[prop] !== undefined) {
                newEmojiData[prop] = emoji[prop];
            }
        }
    }
    return $writeToFile(option.fileName, JSON.stringify(emojis));
}
function $writeToFile(fileName, content) {
    return $writeFile(fileName, content).then(() => Promise.resolve('done'), err => {
        console.error(err.red);
        return Promise.reject(err);
    });
}
const properties = [
    'name', 'unified', 'non_qualified', 'docomo', 'au', 'softbank', 'google', 'image',
    'sheet_x', 'sheet_y', 'short_name', 'short_names', 'text', 'texts', 'category',
    'sort_order', 'added_in', 'has_img_apple', 'has_img_google', 'has_img_twitter',
    'has_img_emojione', 'has_img_facebook', 'has_img_messenger', 'obsoletes', 'obsoleted_by', 'skin_variations'
];
const option = {
    fileName: 'caca.json',
    properties: [
        properties[0], properties[2], properties[4]
    ]
};
extractFromDataSource(option).then(() => console.log('done :'), err => console.error(err));
//# sourceMappingURL=extract-emojis-from-source.js.map