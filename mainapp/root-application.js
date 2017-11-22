import { declareChildApplication, start } from 'single-spa';

declareChildApplication('childapp', loadChildapp, childappActive);
declareChildApplication('childapp2', loadChildapp2, childapp2Active)
start();

function loadChildapp() {
	return SystemJS.import('childapp');
}

function childappActive() {
	return location.hash.indexOf('childapp') >= 0;
}

function loadChildapp2() {
	return SystemJS.import('childapp2');
}

function childapp2Active() {
	return location.hash.indexOf('childapp') >= 0;
}