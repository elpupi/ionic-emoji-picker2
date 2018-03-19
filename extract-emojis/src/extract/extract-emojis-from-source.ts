import * as emojisJson from 'emoji-datasource/emoji.json';
import { Emoji, EmojiExtractOption } from './emoji';


import * as fs from 'fs';
import * as util from 'util';
import { VariationDataPropertiesList, VariationData } from './variation';
const $writeFile = util.promisify(fs.writeFile);



export class ExtractFromSourceOption {
    extraction: EmojiExtractOption;
    fileName: string;
}


export function extractFromDataSource(option: ExtractFromSourceOption) {
    const content = Emoji.extract(option.extraction, emojisJson as any);

    return $writeToFile(option.fileName, JSON.stringify(content));
}




// Helper function to write to a file

function $writeToFile(fileName: string, content: string) {
    return $writeFile(fileName, content).then(
        () => Promise.resolve('done'),
        err => {
            console.error(err.red);
            return Promise.reject(err);
        }
    );
}
