import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: '<div><strong>Angular works:</strong><div><router-outlet></router-outlet></div><a [routerLink]="\'/profile\'">Profile</a></div>'
})
export class AppRootComponent {}