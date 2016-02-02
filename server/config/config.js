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
  config.port = process.env.PORT || 3000;
};

defaultConfig(process.config)

console.log('root is')
console.log(process.config.root)
