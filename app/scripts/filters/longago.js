'use strict';

/**
 * @ngdoc filter
 * @name textileAppApp.filter:longAgo
 * @function
 * @description
 * # longAgo
 * Filter in the textileAppApp.
 */
angular.module('textileAppApp')
  .filter('longAgo', function () {
    return function (input) {

		if (!input)
		{
			return;
		}

	    var diff = Math.abs(input - Date.now()) / 1000,	
			longAgo = '',
			seconds,
			minutes,
			hours;

		// seconds 
		if (diff < 60) {
			seconds = (diff | 0);
			longAgo = seconds + (seconds > 1 ? ' seconds ago' : ' second ago');
		// less than an hour
		} else if (diff < 3600) {
			minutes = (diff / 60 | 0);
			longAgo =  minutes + (minutes > 1 ? ' minutes ago' : ' minute ago');
		// more than an hour
		} else if (diff < 3600 * 24) {
			hours = (diff / 3600 | 0);
			minutes = (diff % 3600 / 60 | 0);

			if (minutes === 0)
			{
				longAgo = hours + (hours > 1 ? ' hours ago' : ' hour ago');
			}
			else
			{
				longAgo = hours + (hours > 1 ? ' hours ' : ' hour ') + 'and ' + hours + (minutes > 1 ? ' minutes ago' : ' minute ago');
			}
		} else {
			longAgo = 'Longer than a day';
		}

		return longAgo;

    };
  });
