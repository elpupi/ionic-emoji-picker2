
import { Returnable } from 'json-object-parser/returnable';

export class Data implements Returnable {
    private categories = {};
    private all = [];

    constructor() { }

    push(index: number, emoji: any, level: number, done: boolean) {
        const catergory: string = emoji.category;
        this.categories[catergory] = emoji;

        this.all.push(emoji);

        delete emoji.category;
    }

    value() {
        return { list: this.all, byCategory: this.categories };
    }


    get byCategory() {
        return this.categories;
    }

    get list() {
        return this.all;
    }
}
