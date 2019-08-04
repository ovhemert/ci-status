'use strict'

const { URL } = require('url')

const feed = require('./feed')

async function getProjects ({ url, project, token, user }) {
  const service = 'jenkins'
  const uri = new URL(`/cc.xml`, `${url}`)
  const auth = { user, pass: token }
  const projects = await feed.getProjects(uri.href, { service, auth })
  if (project) {
    return projects.filter(p => p.name === project)
  } else {
    return projects
  }
}

module.exports.getProjects = getProjects
