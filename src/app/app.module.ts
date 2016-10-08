import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AuthHttp, AuthConfig, JwtHelper, AUTH_PROVIDERS } from 'angular2-jwt';
let jwtHelper = new JwtHelper();

import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Progress } from '../pages/home/progress/progress';
import { Schedule } from '../pages/home/schedule/schedule';
import { Weather } from '../pages/home/weather/weather';
import { Lunch } from '../pages/lunch/lunch';

import { BackgroundDirective } from '../directives/background';
import { BlurDirective, DarkBlurDirective, WhiteBlurDirective } from '../directives/blur';

import { AlertService } from '../providers/alert';
import { AliasService } from '../providers/alias';
import { AuthService } from '../providers/auth';
import { BackgroundService } from '../providers/background';
import { BulletinService } from '../providers/bulletin';
import { CanvasService } from '../providers/canvas';
import { ClassesService } from '../providers/classes';
import { LunchService } from '../providers/lunch';
import { PlannerService } from '../providers/planner';
import { PortalService } from '../providers/portal';
import { SocketioService } from '../providers/socketio';
import { SportsService } from '../providers/sports';
import { StatsService } from '../providers/stats';
import { UserService } from '../providers/user';
import { WeatherService } from '../providers/weather';

import { CompassDirectionPipe } from '../pipes/compass-direction';
import { DayRotationPipe } from '../pipes/day-rotation';
import { RoundPipe } from '../pipes/round';
import { SafeHtmlPipe, SafeScriptPipe, SafeStylePipe, SafeUrlPipe, SafeResourceUrlPipe } from '../pipes/safe';
import { SchoolPercentagePipe } from '../pipes/school-percentage';
import { ValuesPipe } from '../pipes/values';
import { WeatherIconPipe } from '../pipes/weather-icon';

@NgModule({
	declarations: [
		// Components
		MyApp,
		Home,
		Progress,
		Schedule,
		Weather,
		Lunch,

		// Directives
		// BackgroundDirective,
		// BlurDirective,
		// DarkBlurDirective,
		// WhiteBlurDirective,

		// Pipes
		CompassDirectionPipe,
		DayRotationPipe,
		RoundPipe,
		SafeHtmlPipe,
		SafeScriptPipe,
		SafeStylePipe,
		SafeUrlPipe,
		SafeResourceUrlPipe,
		SchoolPercentagePipe,
		ValuesPipe,
		WeatherIconPipe
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Home,
		Lunch
	],
	providers: [
		AlertService,
		AliasService,
		AuthService,
		BackgroundService,
		BulletinService,
		CanvasService,
		ClassesService,
		LunchService,
		PlannerService,
		PortalService,
		SocketioService,
		SportsService,
		StatsService,
		UserService,
		WeatherService,

		// JWT
		AUTH_PROVIDERS,
		{
			provide: AuthHttp,
			useFactory: (http) => {
				return new AuthHttp(new AuthConfig({
					tokenGetter: () => {
						// Look in session storage for id_token, but fallback to local storage
						let session = sessionStorage.getItem('id_token');
						let local = localStorage.getItem('id_token');

						let token = session || local;

						if (typeof token !== 'string') { return ''; }

						// Remove any quotations from the sides
						token = token.split('"').join('');

						// Check validity of jwt token
						if (token.split('.').length !== 3) {
							localStorage.removeItem('id_token');
							sessionStorage.removeItem('id_token');
							return '';
						}

						// Check if token is expired. If it is, delete and send user to login page
						if (jwtHelper.isTokenExpired(token)) {
							sessionStorage.removeItem('id_token');
							localStorage.removeItem('id_token');

							this.router.navigate(['/login']);
							return '';
						}

						return token;
					},
					noJwtError: true
				}), http);
			},
			deps: [Http]
		}
	]
})
export class AppModule {}
