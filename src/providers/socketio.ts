import * as environment from '../common/config';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';

// const io = require('socket.io-client');
// Temporary
// declare let io: any;

@Injectable()
export class SocketioService {

	private socket;

	constructor() {
		this.socket = io.connect(environment.backendURL);
	}

	// Listens to a specific event and convert the data stream into an observable
	listen(event: string) {
		return Observable.create(observer => {
			this.socket.on(event, (arg1, arg2, arg3) => {
				observer.next(arg1, arg2, arg3);
			});
		});
	}

	// Emit a socket.io event
	emit(event: string, data: any) {
		if (this.socket) {
			this.socket.emit(event, data);
		}
	}
}
