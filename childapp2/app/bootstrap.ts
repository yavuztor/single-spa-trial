import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app.module';
import xtag from 'x-tag/dist/x-tag-no-polyfills';

var bootsrappedModule = null;
xtag.register('child-app', {
	content: '<app-root2></app-root2>',
	lifecycle: {
		inserted: function() {
			bootsrappedModule = platformBrowserDynamic().bootstrapModule(AppModule);
		},
		removed: function() {
			bootsrappedModule.injector.get(Router).dispose();
			bootsrappedModule.destroy();
			bootsrappedModule = null;
		}
	}
});

