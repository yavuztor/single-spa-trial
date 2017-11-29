// import 'es6-shim';
// import 'es6-promise';
// import 'zone.js';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular2 from 'single-spa-angular2';
import { AppModule } from './app.module';

//enableProdMode();

//platformBrowserDynamic().bootstrapModule(AppModule);

const ng2Lifecycles = singleSpaAngular2({
	domElementGetter,
	mainModule: AppModule,
	angularPlatform: platformBrowserDynamic(),
	template: `<app-root>Loading...</app-root>`,
});

export const bootstrap = [
	ng2Lifecycles.bootstrap,
];

export const mount = [
	ng2Lifecycles.mount
];

export const unmount = [
	ng2Lifecycles.unmount
];

function domElementGetter() {
	return document.getElementById('childapp');
}

