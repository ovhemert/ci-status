'use strict'

module.exports.APPVEYOR_JSON = [
  { project: { name: 'ci-status' }, build: { finished: '2018-09-20T08:26:43.000+0000', status: 'success', version: '1.0.11' } },
  { project: { name: 'dpc' }, build: { finished: '2018-08-27T18:35:05.000+0000', status: 'cancelling', version: '1.0.12' } },
  { project: { name: 'fastify-cli' }, build: { finished: '2018-07-17T17:18:15.000+0000', status: 'queued' } }
]

module.exports.PROJECTS_XML = [
  `<Project name="ovhemert/ci-status" activity="Sleeping" lastBuildStatus="Success" lastBuildLabel="3" lastBuildTime="2018-09-20T08:26:43.000+0000" webUrl="https://travis-ci.com/ovhemert/ci-status" />`,
  `<Project name="ovhemert/dpc" activity="Sleeping" lastBuildStatus="Success" lastBuildLabel="37" lastBuildTime="2018-08-27T18:35:05.000+0000" webUrl="https://travis-ci.com/ovhemert/dpc" />`,
  `<Project name="ovhemert/fastify-cli" activity="Sleeping" lastBuildStatus="Success" lastBuildTime="2018-07-17T17:18:15.000+0000" webUrl="https://travis-ci.com/ovhemert/fastify-cli" />`,
  `<Project name="ci-status" activity="Sleeping" lastBuildStatus="Success" lastBuildLabel="3" lastBuildTime="2018-09-20T08:26:43.000+0000" webUrl="http://localhost:8080/job/ci-status" />`
]

module.exports.CODE_PIPELINE_JSON = [
  {
    'pipelineName': 'testproject-Pipeline',
    'pipelineVersion': 1,
    'stageStates': [
      {
        'stageName': 'Source',
        'inboundTransitionState': {
          'enabled': true
        },
        'actionStates': [
          {
            'actionName': 'ApplicationSource',
            'currentRevision': {
              'revisionId': '64d7fa205c844ab07a516a10a515f1422023bbc3'
            },
            'latestExecution': {
              'status': 'Succeeded',
              'summary': 'Commit message here',
              'lastStatusChange': '2019-04-19T21:20:28.479Z',
              'externalExecutionId': '64d7fa205c844ab07a516a10a515f1422023bbc3'
            },
            'entityUrl': 'https://us-east-1.console.aws.amazon.com/codecommit/home#/repository/TestProject/browse/master/--/',
            'revisionUrl': 'https://us-east-1.console.aws.amazon.com/codecommit/home#/repository/TestProject/commit/64d7fa205c844ab07a516a10a515f1422023bbc3'
          }
        ],
        'latestExecution': {
          'pipelineExecutionId': 'c3c92f5e-a3d1-463a-ae29-6fff5ddfbb1d',
          'status': 'Succeeded'
        }
      },
      {
        'stageName': 'Build',
        'inboundTransitionState': {
          'enabled': true
        },
        'actionStates': [
          {
            'actionName': 'PackageExport',
            'latestExecution': {
              'status': 'Succeeded',
              'lastStatusChange': '2019-04-19T21:21:01.799Z',
              'externalExecutionId': 'testproject:864b9bed-9010-4f4d-aeda-add34fede8d0',
              'externalExecutionUrl': 'https://us-east-1.console.aws.amazon.com/codebuild/home?#/builds/testproject:864b9bed-9010-4f4d-aeda-add34fede8d0/view/new'
            },
            'entityUrl': 'https://us-east-1.console.aws.amazon.com/codebuild/home?#/projects/testproject/view'
          }
        ],
        'latestExecution': {
          'pipelineExecutionId': 'c3c92f5e-a3d1-463a-ae29-6fff5ddfbb1d',
          'status': 'Succeeded'
        }
      },
      {
        'stageName': 'Deploy',
        'inboundTransitionState': {
          'enabled': true
        },
        'actionStates': [
          {
            'actionName': 'GenerateChangeSet',
            'latestExecution': {
              'status': 'Succeeded',
              'summary': 'Change set pipeline-changeset was created.',
              'lastStatusChange': '2019-04-19T21:21:59.041Z',
              'externalExecutionId': 'changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:123456789123:changeSet/pipeline-changeset/e52fa488-ac60-4589-a0ba-aabce65a1359',
              'externalExecutionUrl': 'https://us-east-1.console.aws.amazon.com/cloudformation/home?#/changeset/detail?changeSetId=arn:aws:cloudformation:us-east-1:123456789123:changeSet/pipeline-changeset/e52fa488-ac60-4589-a0ba-aabce65a1359'
            },
            'entityUrl': 'https://us-east-1.console.aws.amazon.com/cloudformation/home?/'
          },
          {
            'actionName': 'ExecuteChangeSet',
            'latestExecution': {
              'status': 'Succeeded',
              'summary': 'Stack awscodestar-testproject-lambda was updated.',
              'lastStatusChange': '2019-04-19T21:28:55.542Z',
              'externalExecutionId': 'stack/detail?stackId=arn:aws:cloudformation:us-east-1:123456789123:stack/awscodestar-testproject-lambda/5b6437b0-5d42-11e9-8eef-12d954a12b14',
              'externalExecutionUrl': 'https://us-east-1.console.aws.amazon.com/cloudformation/home?#/stack/detail?stackId=arn:aws:cloudformation:us-east-1:123456789123:stack/awscodestar-testproject-lambda/5b6437b0-5d42-11e9-8eef-12d954a12b14'
            },
            'entityUrl': 'https://us-east-1.console.aws.amazon.com/cloudformation/home?/'
          },
          {
            'actionName': 'DeploySkillPackage',
            'latestExecution': {
              'status': 'Succeeded',
              'lastStatusChange': '2019-04-19T21:32:24.097Z'
            },
            'entityUrl': 'https://developer.amazon.com/alexa/console/ask/'
          }
        ],
        'latestExecution': {
          'pipelineExecutionId': 'c3c92f5e-a3d1-463a-ae29-6fff5ddfbb1d',
          'status': 'Succeeded'
        }
      }
    ],
    'created': '2019-04-12T16:44:03.908Z',
    'updated': '2019-04-12T16:44:03.908Z'
  }
]
