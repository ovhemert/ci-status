'use strict'

const test = require('tap').test
const sinon = require('sinon')

const axios = require('axios')
const samples = require('./samples')
const jenkins = require('../src/services/jenkins')

test('gets all projects', async t => {
  t.plan(1)
  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = `<Projects>\n${samples.PROJECTS_XML.join('\n')}\n</Projects>`
    const res = { data }
    return res
  })
  const projects = await jenkins.getProjects({ url: 'http://localhost:8080/', user: 'ovhemert', token: 'blablabla' })
  saxios.restore()
  t.ok(projects.length > 0)
})

test('gets single project', async t => {
  t.plan(1)

  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = `<Projects>\n${samples.PROJECTS_XML.join('\n')}\n</Projects>`
    const res = { data }
    return res
  })
  const projects = await jenkins.getProjects({ url: 'http://localhost:8080/', user: 'ovhemert', token: 'blablabla', project: 'ci-status' })
  saxios.restore()

  t.ok(projects.length > 0)
})
