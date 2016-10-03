import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Lunch } from '../pages/lunch/lunch';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = Home;

	pages: Array<{title: string, component: any}>;

	constructor(public platform: Platform) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: Home },
			{ title: 'Lunch', component: Lunch }
		];

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
