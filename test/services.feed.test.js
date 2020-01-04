'use strict'

const test = require('tap').test
const sinon = require('sinon')
const axios = require('axios')

const feed = require('../src/services/feed')

test('throws on malformed xml', async t => {
  t.plan(1)
  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = '<Projects>yo</invalid>mama</Projects>'
    const res = { data }
    return res
  })
  const url = 'https://some.ci-server.com/cc.xml'
  t.rejects(feed.getProjects(url, { owner: 'ovhemert' }))
  saxios.restore()
})

test('handles xml without projects', async t => {
  t.plan(1)
  const saxios = sinon.stub(axios, 'get').callsFake(async url => {
    const data = '<Projects />'
    const res = { data }
    return res
  })
  const url = 'https://some.ci-server.com/cc.xml'
  t.resolves(feed.getProjects(url, { owner: 'ovhemert' }))
  saxios.restore()
})
