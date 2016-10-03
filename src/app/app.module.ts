import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Progress } from '../pages/home/progress/progress';
import { Schedule } from '../pages/home/schedule/schedule';
import { Weather } from '../pages/home/weather/weather';
import { Lunch } from '../pages/lunch/lunch';

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
		BlurDirective,
		DarkBlurDirective,
		WhiteBlurDirective,

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
		BackgroundService,
		BulletinService,
		CanvasService,
		ClassesService,
		LunchService,
		PlannerService,
		SocketioService,
		SportsService,
		StatsService,
		UserService,
		WeatherService
	]
})
export class AppModule {}
