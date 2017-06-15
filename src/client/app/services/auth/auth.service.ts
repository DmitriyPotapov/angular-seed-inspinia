import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';

const AppAuthConfig = {
    BASE_URL: 'http://localhost:5000',
    APP_ID: 'client',
    APP_SECRET: 'secret',
    OPENID_CONF_URL: 'http://localhost:5000/.well-known/openid-configuration',
    TOKEN_ENDPOINT: 'http://localhost:5000/connect/token',
    DEFAULT_GRANT: 'password',
};

@Injectable()

export class AuthService {
    private credentials = {
        client_id: '',
        client_secret: '',
        grant_type: '',
        password: '',
        username: '',
        response_type: 'token'
    };

    constructor(private http: Http) {
        this.credentials.client_id = AppAuthConfig.APP_ID;
        this.credentials.client_secret = AppAuthConfig.APP_SECRET;
        this.credentials.grant_type = AppAuthConfig.DEFAULT_GRANT;
    }

    login(username: string, password: string): Observable<any> {

        this.credentials.username = username;
        this.credentials.password = password;
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${this.credentials.client_id}:${this.credentials.client_secret}`
        });
        let options = new RequestOptions({ headers: headers });
        let requestPayload: string = `client_id=${encodeURI(this.credentials.client_id)}&client_secret=${encodeURI(this.credentials.client_secret)}&username=${encodeURI(this.credentials.username)}&password=${encodeURI(this.credentials.password)}&grant_type=${encodeURI(this.credentials.grant_type)}&response_type=${encodeURI(this.credentials.response_type)}`;
        console.debug(requestPayload);
        return this.http.post(AppAuthConfig.TOKEN_ENDPOINT, requestPayload, options)
            .map(this.onLoginRequestSuccess)
            .catch(this.handleLoginError);
    }

    loggedIn() {
        return tokenNotExpired('token');
    }

    private onLoginRequestSuccess(res: Response) {
        localStorage.setItem('token', JSON.stringify(res.json()));
        return true;
    }

    private handleLoginError(error: Response | any) {

        //for example error: "{"error":"invalid_grant","error_description":"invalid_username_or_password"}"
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(error);
        return Observable.throw(error);
    }

}
