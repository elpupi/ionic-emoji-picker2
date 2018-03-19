/* function getProperties3(classObject: typeof VariationData): PartialAny<VariationData>;
function getProperties3(classObject: typeof EmojiData): PartialAny<EmojiData>;
function getProperties3(classObject: Class) {
    const properties = {};

    for (const prop of SavePropsDecorator.getProps(classObject)) {
        properties[prop.name] = undefined;
    }

    return properties;
}
 */

import { Class, SavePropsDecorator } from '../decorator/save-properties.decorator';
import { PartialAny } from './definition';


export function getProperties<T>(classObject: Class): T {
    const properties: T = {} as T;

    for (const prop of SavePropsDecorator.getProps(classObject)) {
        properties[prop.name] = undefined;
    }

    return properties;
}
