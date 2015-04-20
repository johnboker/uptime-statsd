/**
 * Statsd plugin
 *
 * Logs ping stats to statsd
 *
 */
 
var Ping = require('../../models/ping');
var CheckEvent = require('../../models/checkEvent');
var SDC = require('statsd-client');

exports.initMonitor = function(options) {
	registerStatsdLogger(options);
};

var registerStatsdLogger = function(options, sdc) {
	
	var config = options.config.statsd; 
	
	var sdc = new SDC({
		host : config.host,
		port : config.port,
		prefix : config.prefix
	});

	Ping.on('afterInsert', function(ping) {
		ping.findCheck(function(err, check) {
			var name = check.name + '';
			name = name.toLowerCase().replace(/\W+/g, "_");
			sdc.gauge('uptime.' + name + '.responsetime', ping.time);
			console.log('uptime.' + name + '.responsetime: ' + ping.time);
		});
	});
	
};
