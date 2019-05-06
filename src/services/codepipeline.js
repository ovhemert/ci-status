'use strict'

/*
  References:
  - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CodePipeline.html#getPipelineState-property
*/

const AWS = require('aws-sdk')

function getCurrentState (data) {
  let state = { activity: 'Sleeping', lastBuildStatus: 'Unknown' }

  // check each stage in order, get stage name and status from first one
  //  whose status is not 'Succeeded' or from the last stage in the pipeline
  data.stageStates.every((stage, index, array) => {
    if (stage.latestExecution.status !== 'Succeeded' || index === array.length - 1) {
      // this is the stage we want state from
      state.activity = stage.latestExecution.status
      state.lastBuildStatus = stage.stageName + ' - ' + stage.latestExecution.status
      return false // break the every() loop
    }
    return true
  })
  return state
}
function transformData (data, { name, region }) {
  let { activity, lastBuildStatus } = getCurrentState(data)

  return {
    name: name,
    activity: activity,
    lastBuildStatus: lastBuildStatus,
    lastBuildLabel: data.stageStates[0].actionStates[0].latestExecution.summary, // todo alt text
    lastBuildTime: new Date(data.stageStates[0].actionStates[0].latestExecution.lastStatusChange), // todo alt text
    nextBuildTime: null,
    webUrl: `https://console.aws.amazon.com/codesuite/codepipeline/pipelines/${name}/view`,
    service: 'codepipeline',
    repo: name
  }
}

async function getProjects ({ name, region }) {
  const cpClient = new AWS.CodePipeline({ region: region })
  const data = await cpClient.getPipelineState({ name: name }).promise()

  const projects = [transformData(data, { name: name, region: region })] // only supports a single project
  return projects
}

module.exports.getProjects = getProjects
