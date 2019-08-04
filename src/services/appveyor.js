'use strict'

/*
  References:
  - https://kevinoid.github.io/appveyor-swagger/bootprint/
  - https://www.appveyor.com/docs/api/projects-builds/#get-project-last-build
*/

const got = require('got')

const { URL } = require('url')

function transformData (item, { url, service, owner, repo }) {
  // map build.status (cancelled , cancelling , failed , queued , running , success)
  let buildActivity = 'Sleeping'
  if (['cancelling', 'running'].indexOf(item.build.status) >= 0) { buildActivity = 'Building' }
  if (['queued'].indexOf(item.build.status) >= 0) { buildActivity = 'CheckingModifications' }
  let buildStatus = 'Unknown'
  if (['success'].indexOf(item.build.status) >= 0) { buildStatus = 'Success' }
  if (['cancelled', 'cancelling', 'failed'].indexOf(item.build.status) >= 0) { buildStatus = 'Failure' }
  // return standardized info
  return {
    name: item.project.name,
    activity: buildActivity, // Sleeping, Building, CheckingModifications
    lastBuildStatus: buildStatus, // Success, Failure, Exception, Unknown
    lastBuildLabel: item.build.version || '',
    lastBuildTime: new Date(item.build.finished),
    nextBuildTime: null,
    webUrl: `https://ci.appveyor.com/project/${owner}/${repo}`,
    feedUrl: url,
    service: service,
    owner: owner,
    repo: repo
  }
}

async function getProjects ({ owner, repo }) {
  const service = 'appveyor'

  const url = new URL(`/api/projects/${owner}/${repo}`, `https://ci.appveyor.com/`)
  const json = await got.get(url.href).then(res => res.body)
  const data = JSON.parse(json)

  const items = Array.isArray(data) ? data : [data]
  const projects = items.map(item => {
    return transformData(item, { url: url.href, service, owner, repo })
  })
  return projects
}

module.exports.getProjects = getProjects
