'use strict'

const test = require('tap').test
const awsMock = require('aws-sdk-mock')

const samples = require('./samples')
const codepipeline = require('../src/services/codepipeline')

function hasProperties (testObject, propArray) {
  let propsResult = true
  propArray.every((prop) => {
    propsResult = Object.prototype.hasOwnProperty.call(testObject, prop)
    return propsResult
  })
  return propsResult
}

test('gets single project', async t => {
  t.plan(2)
  awsMock.mock('CodePipeline', 'getPipelineState', Promise.resolve(samples.CODE_PIPELINE_JSON[0]))

  const projects = await codepipeline.getProjects({ name: 'testproject-Pipeline', region: 'us-east-1' })
  awsMock.restore()

  // check that we received a project
  t.ok(projects.length > 0)

  // check that project output conforms to project object specification
  let result = true
  const requiredProperties = ['name', 'activity', 'lastBuildStatus', 'lastBuildLabel', 'lastBuildTime', 'nextBuildTime', 'webUrl']
  projects.every((project) => {
    result = hasProperties(project, requiredProperties)
    return result
  })
  t.ok(result, 'retrieved project does not have all required fields')
})
