import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http';

import { Platform } from '../model/emoji/platform';
import { EmojisURL } from './emoji-url.service';

import { ReplaySubject } from 'rxjs/ReplaySubject';


@Injectable()
export class EmojisRequest {
    $emojis: ReplaySubject<any>;

    constructor(private http: HTTP, private emojisURL: EmojisURL) {
        const $emojis = new ReplaySubject(1);
        this.request();
    }

    private request() {
        const $httpRequest = this.http.get(this.emojisURL.url, {}, {});
        this.handleHTTP($httpRequest);
    }


    private handleHTTP($request: Promise<HTTPResponse>) {
        $request.then(data => {

            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);

            if (data.status === 200)
                this.$emojis.next(data.data);
        })
            .catch(error => {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);

            });
    }

    public set system(platform: Platform) {
        // this._system = `assets/emojis-${system}.json`;
        this.emojisURL.setParameter({ platform });
        this.request();
    }
}
