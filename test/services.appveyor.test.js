'use strict'

const test = require('tap').test
const sinon = require('sinon')

const got = require('got')
const samples = require('./samples')
const appveyor = require('../src/services/appveyor')

test('gets owner projects', async t => {
  t.plan(1)
  let sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `${JSON.stringify(samples.APPVEYOR_JSON)}`
    return { body }
  })
  const projects = await appveyor.getProjects({ owner: 'ovhemert' })
  sgot.restore()
  t.ok(projects.length > 0)
})

test('gets single project', async t => {
  t.plan(1)
  let sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `${JSON.stringify(samples.APPVEYOR_JSON[0])}`
    return { body }
  })
  const projects = await appveyor.getProjects({ owner: 'ovhemert', repo: 'ci-status', branch: 'master' })
  sgot.restore()
  t.ok(projects.length > 0)
})
