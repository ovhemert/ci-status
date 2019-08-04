'use strict'

const { URL } = require('url')

const feed = require('./feed')

async function getProjects ({ owner, repo }) {
  const service = 'circleci'
  const url = new URL(`/gh/${owner}`, `https://circleci.com/`)
  url.pathname += (repo) ? `/${repo}.cc.xml` : `.xml`
  const projects = await feed.getProjects(url.href, { service, owner, repo })
  return projects
}

module.exports.getProjects = getProjects
