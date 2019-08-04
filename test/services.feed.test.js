'use strict'

const test = require('tap').test
const sinon = require('sinon')
const got = require('got')

const feed = require('../src/services/feed')

test('throws on malformed xml', async t => {
  t.plan(1)
  const sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `<Projects>yo</invalid>mama</Projects>`
    return { body }
  })
  const url = `https://some.ci-server.com/cc.xml`
  t.rejects(feed.getProjects(url, { owner: 'ovhemert' }))
  sgot.restore()
})

test('handles xml without projects', async t => {
  t.plan(1)
  const sgot = sinon.stub(got, 'get').callsFake(async url => {
    const body = `<Projects />`
    return { body }
  })
  const url = `https://some.ci-server.com/cc.xml`
  t.resolves(feed.getProjects(url, { owner: 'ovhemert' }))
  sgot.restore()
})
