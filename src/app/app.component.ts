import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Lunch } from '../pages/lunch/lunch';

import { BackgroundService } from '../providers/background';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = Home;

	pages: Array<{title: string, component: any}>;

	backgrounds: any = {
		normal: '',
		blur: ''
	};

	constructor(public platform: Platform, private backgroundService: BackgroundService) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: Home },
			{ title: 'Lunch', component: Lunch }
		];

		// Get custom user background
		this.backgroundService.get().subscribe(
			data => {
				console.log('get backgrounds', data);
				this.backgrounds = data.variants;
			},
			error => {
				// this.alertService.addAlert('danger', 'Get Background Error!', error);
			}
		);

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();

			// rgb(41,171,226)
			// rgba(0, 0, 0, 0.6)
			// rgb(16, 68, 90)
			// #10445A
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
