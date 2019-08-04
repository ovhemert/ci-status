'use strict'

const test = require('tap').test
const sinon = require('sinon')

const got = require('got')
const samples = require('./samples')
const circleci = require('../src/services/circleci')

test('gets owner projects', async t => {
  t.plan(1)
  const sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `<Projects>\n${samples.PROJECTS_XML.join('\n')}\n</Projects>`
    return { body }
  })
  const projects = await circleci.getProjects({ owner: 'ovhemert' })
  sgot.restore()
  t.ok(projects.length > 0)
})

test('gets single project', async t => {
  t.plan(1)

  const sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `<Projects>\n${samples.PROJECTS_XML[0]}\n</Projects>`
    return { body }
  })
  const projects = await circleci.getProjects({ owner: 'ovhemert', repo: 'ci-status', branch: 'master' })
  sgot.restore()

  t.ok(projects.length > 0)
})
