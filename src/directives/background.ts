import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { BackgroundService } from '../providers/background';

@Directive({
	selector: '[mymicds-background]' // tslint:disable-line
})
export class BackgroundDirective implements OnInit, OnDestroy {

	subscription: any;

	constructor(
		private el: ElementRef,
		private backgroundService: BackgroundService
	) { }

	ngOnInit() {
		this.el.nativeElement.style.background = 'url("'
			+ this.backgroundService.variants.normal + '")';
		this.el.nativeElement.style.backgroundSize = 'cover';
		this.el.nativeElement.style.backgroundAttachment = 'fixed';
		this.subscription = this.backgroundService.backgroundChange$.subscribe(
		 	(variants: any) => {
				this.el.nativeElement.style.background = 'url("' + variants.normal + '")';
				this.el.nativeElement.style.backgroundSize = 'cover';
				this.el.nativeElement.style.backgroundAttachment = 'fixed';
			}
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
