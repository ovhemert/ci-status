'use strict'

const axios = require('axios')
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

async function getProjects (url, { auth, service }) {
  const xml = await getXml(url, { auth })
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
      service: service
    }
  })
}

async function getXml (url, { auth }) {
  const options = { headers: {} }
  if (auth && auth.user && auth.pass) {
    const base64data = Buffer.from(`${auth.user}:${auth.pass}`).toString('base64')
    options.headers.Authorization = `Basic ${base64data}`
  }
  if (auth && auth.token) {
    options.headers.Authorization = `Token ${auth.token}`
  }
  const xml = await axios.get(url, options).then(res => res.data)
  return xml
}

module.exports.getProjects = getProjects
