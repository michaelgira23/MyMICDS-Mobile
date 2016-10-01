import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

@NgModule({
	declarations: [
		MyApp,
		Home,
		Page1,
		Page2
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Home,
		Page1,
		Page2
	],
	providers: []
})
export class AppModule {}
