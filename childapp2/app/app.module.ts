import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootComponent } from './app-root/appRoot.component';
import { APP_BASE_HREF } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	{ path: 'profile', component: ProfileComponent},
	{ path: '', component: HelloComponent }
];

@NgModule({
	bootstrap: [AppRootComponent],
	declarations: [
		AppRootComponent,
		HelloComponent,
		ProfileComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: true,
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
	]
})
export class AppModule {}