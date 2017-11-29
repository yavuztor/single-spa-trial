import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import xtag from 'x-tag/dist/x-tag-no-polyfills';
import { AppModule } from './app.module';

//enableProdMode();

var bootsrappedModule = null;
xtag.register('child-app-one', {
	content: '<app-root></app-root>',
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
