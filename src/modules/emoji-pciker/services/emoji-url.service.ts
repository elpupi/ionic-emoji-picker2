/* export const generateURL = (strings: TemplateStringsArray, ...keys: number[]) => {
    const nbStrings = strings.length;


    return function (...parameters) {
        if (parameters.length !== keys.length) {
            throw new Error(`parameters.length has to be ${keys.length}`);
        }

        // if $i is at the end
        parameters.push('');

        let res = '';

        for (let i = 0; i < nbStrings; ++i) {
            res += strings[i] + parameters[i];
        }

        return res;
    };
};
 */

import { Injectable } from '@angular/core';

export type UrlGenerator = (...parameters: any[]) => string;

export interface URLParameters {
    protocol?: string;
    base?: string;
    loacation?: string;
    platform: string;
    [whatyouwant: string]: string;
}


@Injectable()
export class EmojisURL {
    private urlGenerator: UrlGenerator;
    private parameters: URLParameters;

    constructor(urlGenerator: UrlGenerator, parameters: URLParameters) {
        this.urlGenerator = urlGenerator;
        this.parameters = parameters;
    }


    public static generateURL(strings: TemplateStringsArray, ...keys: number[]) {
        const nbStrings = strings.length;


        return function () {
            if (this.parameters.length !== keys.length) {
                throw new Error(`parameters.length has to be ${keys.length}`);
            }

            let res = '';

            for (let i = 0; i < nbStrings; ++i) {
                res += strings[i] + this.parameters[keys[i]] || '';
            }

            return res;
        };
    }


    setParameter(parameters: Partial<URLParameters>) {
        Object.assign(this.parameters, parameters);
    }


    get url(): string {
        return this.urlGenerator();
    }
}
