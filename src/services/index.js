'use strict'

/*
  References:
  - https://github.com/build-canaries/nevergreen/wiki/find-cctray
*/

module.exports.appveyor = require('./appveyor')
module.exports.circleci = require('./circleci')
module.exports.jenkins = require('./jenkins')
module.exports.travis = require('./travis')
