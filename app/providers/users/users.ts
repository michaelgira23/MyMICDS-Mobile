import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Users {
  gradeRange: any;

  constructor(private http: Http) {
    this.gradeRange = null;
  }

  getGradeRange() {
    if(this.gradeRange) {
      // already loaded data
      return Promise.resolve(this.gradeRange);
    }

    let that = this;

    // don't have the data yet
    return new Promise(function(resolve, reject) {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      let body = JSON.stringify({});
      let headers = new Headers({});
      let options = new RequestOptions({ headers: headers });

      that.http.post('http://localhost:1420/user/grade-range', body, options)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          that.gradeRange = data.gradYears;
          resolve(that.gradeRange);
        });
    });
  }
}
