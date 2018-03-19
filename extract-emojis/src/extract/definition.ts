/* export class UTF16 {
    private value: string;

    constructor(value) { }

    get UPlus() {
        return `U+${this.value}`;
    }

    get slashU() {
        return `\\u${this.value}`;
    }
}
 */


export type PartialAny<T> = {
    [k in keyof T]?: any
};


export class ExtractOption<T> {
    properties?: PartialAny<T>;
    all?: boolean;
}


export interface PlainObject<T> {
    [key: string]: T;
}
