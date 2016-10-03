import * as environment from '../common/config';

import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { xhrHeaders, handleError } from '../common/http-helpers';
import { Observable } from 'rxjs/Observable';
import '../common/rxjs-operators';

@Injectable()
export class LunchService {
	constructor(private http: Http) { }

	getLunch(date?: Date) {
		let body = JSON.stringify(date);
		let headers = xhrHeaders();
		let options = new RequestOptions({ headers });

		return this.http.post(environment.backendURL + '/lunch/get', body, options)
			.map(res => {
				let data = res.json();

				// Check if server-side error
				if (data.error) {
					throw new Error(data.error);
				}

				return data.lunch;
			})
			.catch(handleError);
	}
}

export interface Date {
	year?: number;
	month?: number;
	day?: number;
}
