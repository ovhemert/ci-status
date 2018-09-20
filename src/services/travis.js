'use strict'

const feed = require('./feed')
const querystring = require('querystring')

async function getProjects ({ owner, repo, branch }) {
  const service = 'travis'
  let url = new URL(`/repositories/${owner}`, `https://api.travis-ci.com/`)
  url.pathname += (repo) ? `/${repo}/cc.xml` : `.xml`
  if (branch) {
    url.search = querystring.stringify({ branch })
  }
  const projects = await feed.getProjects(url.href, { service, owner, repo })
  return projects
}

module.exports.getProjects = getProjects
