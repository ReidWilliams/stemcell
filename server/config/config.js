'use strict';

// Globals
import _ from 'lodash';
import fs from 'fs';
import path from 'path';

// Locals
let env = process.env.NODE_ENV || 'development';
let rootPath = path.normalize(path.join(__dirname, './../'));

// Defaults used in all configs regardless of env
let defaultConfig = function(config) {
  config.root = rootPath
};

function developmentConfig(config) {
  config.port = process.env.PORT || 3000;
  // config.protocol = 'https';
  // config.domain = 'localhost:3000';
  // config.apiServer = 'http://localhost:3000';
};

defaultConfig(process.config)
developmentConfig(process.config)

console.log('config is')
console.log(process.config)
