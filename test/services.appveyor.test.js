'use strict'

const test = require('tap').test
const sinon = require('sinon')

const axios = require('axios')
const samples = require('./samples')
const appveyor = require('../src/services/appveyor')

test('gets owner projects', async t => {
  t.plan(1)
  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = `${JSON.stringify(samples.APPVEYOR_JSON)}`
    const res = { data }
    return res
  })
  const projects = await appveyor.getProjects({ owner: 'ovhemert' })
  saxios.restore()
  t.ok(projects.length > 0)
})

test('gets single project', async t => {
  t.plan(1)
  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = `${JSON.stringify(samples.APPVEYOR_JSON[0])}`
    const res = { data }
    return res
  })
  const projects = await appveyor.getProjects({ owner: 'ovhemert', repo: 'ci-status', branch: 'master' })
  saxios.restore()
  t.ok(projects.length > 0)
})
