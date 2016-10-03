import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Lunch } from '../pages/lunch/lunch';

@NgModule({
	declarations: [
		MyApp,
		Home,
		Lunch
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
	providers: []
})
export class AppModule {}
