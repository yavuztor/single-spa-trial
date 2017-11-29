// polyfills, etc..
import 'es6-shim';
import 'es6-promise';
import 'zone.js';

// main dependencies.
import { declareChildApplication, start } from 'single-spa';

declareChildApplication('childapp', loadChildapp, childappActive);
declareChildApplication('childapp2', loadChildapp2, childapp2Active)
start();

function loadChildapp() {
	return SystemJS.import('childapp');
}

function childappActive() {
	return true;
}

function loadChildapp2() {
	return SystemJS.import('childapp2');
}

function childapp2Active() {
	return true;
}