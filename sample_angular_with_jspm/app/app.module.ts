import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootComponent } from './app-root/appRoot.component';
import { HelloComponent } from './hello/hello.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: HelloComponent },
	{ path: 'profile', component: ProfileComponent}
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
		RouterModule.forRoot(routes)
	],
	providers: []
})
export class AppModule {}