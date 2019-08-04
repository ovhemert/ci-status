'use strict'

const { URL } = require('url')

const feed = require('./feed')
const querystring = require('querystring')

async function getProjects ({ branch, owner, repo, token }) {
  const service = 'travis'
  const url = new URL(`/repos/${owner}`, `https://api.travis-ci.com/`)
  url.pathname += (repo) ? `/${repo}/cc.xml` : `.xml`
  const qs = {}
  if (branch) { qs.branch = branch }
  const auth = (token) ? { token } : null
  url.search = querystring.stringify(qs)
  const projects = await feed.getProjects(url.href, { auth, service, owner, repo })
  return projects
}

module.exports.getProjects = getProjects
