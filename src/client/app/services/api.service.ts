import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { HttpLoaderFactory } from '../../../../dist/tmp/app/app.module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiTestService {

    constructor(private http: Http,
        public authHttp: AuthHttp) {

    }


    greet(name: string): Observable<string> {
        return this.authHttp.get(`/api/hello`)
            .map( data => { JSON.stringify(data.json()); } )
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
