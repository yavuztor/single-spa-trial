import { Component } from '@angular/core';

@Component({
	selector: 'app-root2',
	template: `<div><strong>In childapp2:</strong>
				<div><router-outlet></router-outlet></div>
				<a [routerLink]="'/profile'">Profile</a>
			   </div>`
})
export class AppRootComponent {}