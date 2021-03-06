import * as environment from '../common/config';

import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { xhrHeaders, handleError } from '../common/http-helpers';
import { Observable } from 'rxjs/Observable';
import '../common/rxjs-operators';

@Injectable()
export class PortalService {
	constructor(private authHttp: AuthHttp) { }

	getSchedule(date: Date) {
		let body = JSON.stringify(date);
		let headers = xhrHeaders();
		let options = new RequestOptions({ headers });

		return this.authHttp.post(environment.backendURL + '/portal/get-schedule', body, options)
			.map(res => {
				let data = res.json();

				// Check if server-side error
				if (data.error) {
					throw new Error(data.error);
				}

				// Convert possible block dates to date objects
				if (data.schedule.classes) {
					for (let i = 0; i < data.schedule.classes.length; i++) {
						if (data.schedule.classes[i].start) {
							data.schedule.classes[i].start = new Date(data.schedule.classes[i].start);
						}
						if (data.schedule.classes[i].end) {
							data.schedule.classes[i].end = new Date(data.schedule.classes[i].end);
						}
					}
				}

				return data.schedule;
			})
			.catch(handleError);
	}

	getClasses() {
		let body = JSON.stringify({});
		let headers = xhrHeaders();
		let options = new RequestOptions({ headers });

		return this.authHttp.post(environment.backendURL + '/portal/get-classes', body, options)
			.map(res => {
				let data = res.json();

				// Check if server-side error
				if (data.error) {
					throw new Error(data.error);
				}

				return {
					hasURL: data.hasURL,
					classes: data.classes
				};
			})
			.catch(handleError);
	}

	testURL(url: string) {
		let body = JSON.stringify({ url });
		let headers = xhrHeaders();
		let options = new RequestOptions({ headers });

		return this.authHttp.post(environment.backendURL + '/portal/test-url', body, options)
			.map(res => {
				let data = res.json();

				// Check if server-side error
				if (data.error) {
					throw new Error(data.error);
				}

				return {
					valid: data.valid,
					url: data.url
				};
			})
			.catch(handleError);
	}

	setURL(url: string) {
		let body = JSON.stringify({ url });
		let headers = xhrHeaders();
		let options = new RequestOptions({ headers });

		return this.authHttp.post(environment.backendURL + '/portal/set-url', body, options)
			.map(res => {
				let data = res.json();

				// Check if server-side error
				if (data.error) {
					throw new Error(data.error);
				}

				return {
					valid: data.valid,
					url: data.url
				};
			})
			.catch(handleError);
	}
}

export interface Date {
	year?: number;
	month?: number;
	day?: number;
}
