
import { ExtractFromSourceOption, extractFromDataSource } from './extract/extract-emojis-from-source';
import { EmojiExtractOption } from './extract/emoji';

/* const variationPropsList: VariationDataPropertiesList = [
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
]; */

const extractionAll: EmojiExtractOption = {
    all: true
};

const extractionFew_All: EmojiExtractOption = {
    properties: {
        name: true,
        unified: true,
        skin_variations: {
            all: true
        }
    }
};



const extractionFew_Few: EmojiExtractOption = {
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
};


const optionAll: ExtractFromSourceOption = {
    fileName: 'emojis-all.json',
    extraction: extractionAll
};

const optionFew_All: ExtractFromSourceOption = {
    fileName: 'emojis_few_all.json',
    extraction: extractionFew_All
};


const optionFew_Few: ExtractFromSourceOption = {
    fileName: 'emojisfew_few.json',
    extraction: extractionFew_Few
};


extractFromDataSource(optionAll).then(
    () => console.log(`${optionAll.fileName} done :)`),
    err => console.error(err)
);

extractFromDataSource(optionFew_All).then(
    () => console.log(`${optionFew_All.fileName} done :)`),
    err => console.error(err)
);


extractFromDataSource(optionFew_Few).then(
    () => console.log(`${optionFew_Few.fileName} done :)`),
    err => console.error(err)
);
