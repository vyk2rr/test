'use strict';

/**
 * @ngdoc filter
 * @name textileAppApp.filter:timeDiff
 * @function
 * @description
 * # timeDiff
 * Filter in the textileAppApp.
 */
angular.module('textileAppApp')
  .filter('timeDiff', function () {
    return function (startTime, endTime) {
		var date;

		if (!startTime)
		{
			return;
		}

		if (endTime) {
			date = +new Date(endTime);
		}
		else
		{
			date = Date.now();
		}

	    var diff = Math.abs(startTime - endTime) / 1000,	
			longAgo = '',
			seconds,
			minutes,
			hours;

		// seconds 
		if (diff < 60) {
			seconds = (diff | 0);
			longAgo = seconds + (seconds > 1 ? ' seconds ago' : 'second ago');
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

		return 'timeDiff+/-';
		
		return {
			diff: Number,
			positive: true
		}
    };
  });
