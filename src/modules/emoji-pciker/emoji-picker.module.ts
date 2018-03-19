import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { EmojiPicker } from './components/emoji-picker/emoji-picker';
import { EmojiPickerContent } from './components/emoji-picker/emoji-picker-content/emoji-picker-content';
import { EmojiPickerList } from './components/emoji-picker/emoji-picker-list/emoji-picker-list';
import { EmojiPickerHeader } from './components/emoji-picker/emoji-picker-header/emoji-picker-header';
import { EmojiPickerFooter } from './components/emoji-picker/emoji-picker-footer/emoji-picker-footer';
import { EmojiPickerButton } from './components/emoji-picker/emoji-picker-button/emoji-picker-button';
import { EmojiPickerIcon } from './components/emoji-picker/emoji-picker-icon/emoji-picker-icon';
import { EmojiPickerSearch } from './components/emoji-picker/emoji-picker-search/emoji-picker-search';
import { EmojiCategories } from './components/emoji-categories/emoji-categories';
import { EmojiCategory } from './components/emoji-category/emoji-category';

import { EmojiPickerOptions } from './services/emoji-picker-options.service';
import { EmojiEmptyCategoryPipe } from './pipes/emoji-empty-category.pipe';

import { EmojiPickerCaretDirective } from './directives/emoji-picker-caret.directive';

const componentsToExport = [
    EmojiPicker,
    EmojiPickerContent,
    EmojiPickerList,
    EmojiPickerHeader,
    EmojiPickerFooter,
    EmojiPickerButton,
    EmojiPickerIcon,
    EmojiPickerIcon,
    EmojiPickerSearch,
    EmojiCategories,
    EmojiCategory,
];

@NgModule({
    declarations: [
        // components
        ...componentsToExport,
        // directive
        EmojiPickerCaretDirective,
        // private pipe for this module
        EmojiEmptyCategoryPipe
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        ...componentsToExport,
        // directive
        EmojiPickerCaretDirective
    ]
})
export class EmojiPickerModule {
    static forRoot(): ModuleWithProviders { // for lazy modules using the service of this module

        return {
            ngModule: EmojiPickerModule,
            providers: [
                EmojiPickerOptions
            ]
        };

    }

}
