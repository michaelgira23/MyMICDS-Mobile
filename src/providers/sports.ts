import * as environment from '../common/config';

import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { xhrHeaders, handleError } from '../common/http-helpers';
import { Observable } from 'rxjs/Observable';
import '../common/rxjs-operators';

@Injectable()
export class SportsService {

	constructor(private http: Http, private authHttp: AuthHttp) { }

	getScores() {
		let body = JSON.stringify({});
		let headers = xhrHeaders();
		let options = new RequestOptions({ headers });

		return this.authHttp.post(environment.backendURL + '/user/get-info', body, options)
			.map( res => {
				let data = res.json();

				// Check if server-side error
				if (data.error) {
					throw new Error(data.error);
				}

				return data.user;
			})
			.catch(handleError);
	}
}
