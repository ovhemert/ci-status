'use strict'

const test = require('tap').test
const sinon = require('sinon')

const axios = require('axios')
const samples = require('./samples')
const travis = require('../src/services/travis')

test('gets owner projects', async t => {
  t.plan(1)
  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = `<Projects>\n${samples.PROJECTS_XML.join('\n')}\n</Projects>`
    const res = { data }
    return res
  })
  const projects = await travis.getProjects({ owner: 'ovhemert' })
  saxios.restore()
  t.ok(projects.length > 0)
})

test('gets single project', async t => {
  t.plan(1)

  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = `<Projects>\n${samples.PROJECTS_XML[0]}\n</Projects>`
    const res = { data }
    return res
  })
  const projects = await travis.getProjects({ owner: 'ovhemert', repo: 'ci-status', branch: 'master', token: 'blablabla' })
  saxios.restore()

  t.ok(projects.length > 0)
})
