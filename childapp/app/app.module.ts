import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRootComponent } from './app-root/appRoot.component';

@NgModule({
	bootstrap: [AppRootComponent],
	declarations: [AppRootComponent],
	imports: [BrowserModule],
	providers: []
})
export class AppModule {}