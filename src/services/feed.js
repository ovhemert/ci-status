'use strict'

const got = require('got')
const xml2js = require('xml2js')

function parseXml (xml) {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser({ attrkey: 'attr', charkey: 'text', normalizeTags: true, trim: true })
    parser.parseString(xml, (err, res) => {
      if (err) { return reject(err) }
      return resolve(res)
    })
  })
}

async function getProjects (url, { service, owner, repo }) {
  const xml = await getXml(url)
  const { projects } = await parseXml(xml)
  const items = projects.project || []
  return items.map(project => {
    return {
      name: project.attr.name,
      activity: project.attr.activity, // Sleeping, Building, CheckingModifications
      lastBuildStatus: project.attr.lastBuildStatus, // Success, Failure, Exception, Unknown
      lastBuildLabel: project.attr.lastBuildLabel || '',
      lastBuildTime: new Date(project.attr.lastBuildTime),
      nextBuildTime: project.attr.nextBuildTime || null,
      webUrl: project.attr.webUrl,
      feedUrl: url,
      service: service,
      owner: owner,
      repo: repo
    }
  })
}

async function getXml (url) {
  const xml = await got.get(url).then(res => res.body)
  return xml
}

module.exports.getProjects = getProjects
