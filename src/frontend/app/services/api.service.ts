import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiTestService {
    constructor(private http: Http) {

    }
    greet(name: string): Observable<string> {
        return this.http
            .get(`https://api.ipify.org`)
            .map(result => {
                return <string>result.text();
            });
    }
}
