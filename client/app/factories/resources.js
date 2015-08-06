/* global angular */
var factories = factories || angular.module('SampleCode.factories', []);

factories.factory('SearchService', function($resource){
	return $resource('/api/search', {}, {
		update: {method: 'PUT'}
	});
});

factories.factory('SubmitService', function($resource){
	return $resource('/api/submit', {}, {
		update: {method: 'PUT'}
	});
});

factories.factory('FrameworkService', function($resource){
	return $resource('/api/framework', {}, {
		update: {method: 'PUT'}
	});
});