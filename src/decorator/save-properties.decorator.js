(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SaveProps {
        constructor() {
            this.savedProps = [];
        }
        push(property) {
            // for sure property is unique. Compiler doesn't allow to define twice the same property in a class
            this.savedProps.push(property);
        }
        getAll() {
            return this.savedProps;
        }
    }
    class SavePropsCollection {
        constructor() {
            this.collection = {};
            // throw new Error('SavePropsCollection is a singleton. Use methode SavePropsCollection.instance');
        }
        static instance() {
            if (SavePropsCollection._instance === undefined)
                SavePropsCollection._instance = new SavePropsCollection();
            return SavePropsCollection._instance;
        }
        push(className, property) {
            if (this.collection[className] === undefined)
                this.collection[className] = new SaveProps();
            this.collection[className].push(property);
        }
        get(className) {
            if (this.collection[className] === undefined)
                return [];
            return this.collection[className].getAll();
        }
    }
    class SavePropsDecorator {
        static saveProp({ optional } = { optional: false }) {
            return function decorator(target, propertyKey) {
                SavePropsCollection.instance().push(target.constructor.name, { name: propertyKey, optional });
            };
        }
        static getProps(classObject) {
            return SavePropsCollection.instance().get(typeof classObject === 'string' ? classObject : classObject.name);
        }
    }
    exports.SavePropsDecorator = SavePropsDecorator;
});
//# sourceMappingURL=save-properties.decorator.js.map