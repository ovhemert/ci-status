'use strict'

module.exports.APPVEYOR_JSON = [
  { project: { name: 'ci-status' }, build: { finished: '2018-09-20T08:26:43.000+0000', status: 'success', version: '1.0.11' } },
  { project: { name: 'dpc' }, build: { finished: '2018-08-27T18:35:05.000+0000', status: 'cancelling', version: '1.0.12' } },
  { project: { name: 'fastify-cli' }, build: { finished: '2018-07-17T17:18:15.000+0000', status: 'queued' } }
]

module.exports.PROJECTS_XML = [
  `<Project name="ovhemert/ci-status" activity="Sleeping" lastBuildStatus="Success" lastBuildLabel="3" lastBuildTime="2018-09-20T08:26:43.000+0000" webUrl="https://travis-ci.com/ovhemert/ci-status" />`,
  `<Project name="ovhemert/dpc" activity="Sleeping" lastBuildStatus="Success" lastBuildLabel="37" lastBuildTime="2018-08-27T18:35:05.000+0000" webUrl="https://travis-ci.com/ovhemert/dpc" />`,
  `<Project name="ovhemert/fastify-cli" activity="Sleeping" lastBuildStatus="Success" lastBuildTime="2018-07-17T17:18:15.000+0000" webUrl="https://travis-ci.com/ovhemert/fastify-cli" />`
]
