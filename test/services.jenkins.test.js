'use strict'

const test = require('tap').test
const sinon = require('sinon')

const got = require('got')
const samples = require('./samples')
const jenkins = require('../src/services/jenkins')

test('gets all projects', async t => {
  t.plan(1)
  let sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `<Projects>\n${samples.PROJECTS_XML.join('\n')}\n</Projects>`
    return { body }
  })
  const projects = await jenkins.getProjects({ url: 'http://localhost:8080/', user: 'ovhemert', token: 'blablabla' })
  sgot.restore()
  t.ok(projects.length > 0)
})

test('gets single project', async t => {
  t.plan(1)

  let sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `<Projects>\n${samples.PROJECTS_XML.join('\n')}\n</Projects>`
    return { body }
  })
  const projects = await jenkins.getProjects({ url: 'http://localhost:8080/', user: 'ovhemert', token: 'blablabla', project: 'ci-status' })
  sgot.restore()

  t.ok(projects.length > 0)
})
