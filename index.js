#!/usr/bin/env node
'use strict'

var connect = require('./lib/connect')

function DeviceXX (options) {
	this._host = options.host;

	delete options.host;
	this._options = options;
}
DeviceXX.prototype.contructor = DeviceXX;
DeviceXX.prototype.connect = function(){
	return connect(this._host, this._options);
}

module.exports = DeviceXX;