#!/usr/bin/env node

const chalk = require('chalk')
const columnify = require('columnify')
const program = require('commander')

const pkg = require('../package.json')
const services = require('./services')

// transform status message to color message
function getStatusOutput (value) {
  const stat = value.toLowerCase()
  if (stat === 'success') { return chalk.green(value) }
  if (stat === 'unknown') { return chalk.yellow(value) }
  return chalk.red(value)
}

// output the projects to the console
function outputConsole (projects) {
  if (projects.length <= 0) { throw Error('No result.') }
  const outputData = projects.map(item => {
    return {
      service: item.service,
      project: item.name,
      status: getStatusOutput(item.lastBuildStatus),
      time: item.lastBuildTime.toLocaleString()
    }
  })
  const output = columnify(outputData)
  // dump
  console.log(output)
}

// main cli logic
async function main () {
  program
    .version(pkg.version)

  program
    .command('appveyor')
    .option('-o, --owner <owner>', 'Project owner')
    .option('-r, --repo <repo>', 'Project repository')
    .action(async ({ owner, repo }) => {
      try {
        if (!owner) { throw Error('You need to specify an owner.') }
        if (!repo) { throw Error('You need to specify an repo.') }
        const projects = await services.appveyor.getProjects({ owner, repo })
        outputConsole(projects)
      } catch (error) {
        const msg = `${chalk.red(error.message)}\n\n${chalk.yellow('For more help type: ci-status appveyor --help')}`
        console.log(msg)
      }
    })

  program
    .command('circleci')
    .option('-o, --owner <owner>', 'Project owner')
    .option('-r, --repo <repo>', 'Project repository')
    .action(async ({ owner, repo }) => {
      try {
        if (!owner) { throw Error('You need to specify an owner.') }
        const projects = await services.circleci.getProjects({ owner, repo })
        outputConsole(projects)
      } catch (error) {
        const msg = `${chalk.red(error.message)}\n\n${chalk.yellow('For more help type: ci-status circleci --help')}`
        console.log(msg)
      }
    })

  program
    .command('jenkins')
    .option('-p, --project <project>', 'Project name')
    .option('-t, --token <token>', 'API token (preferred) / password of the user for authentication')
    .option('-u, --user <user>', 'User account name to connect with')
    .option('-r, --url <url>', 'The host url to connect to (ex. http://localhost:8080/)')
    .action(async ({ url, project, token, user }) => {
      try {
        if (!url || !token || !user) { throw Error('You need to specify --url, --token and --user') }
        const projects = await services.jenkins.getProjects({ url, project, token, user })
        outputConsole(projects)
      } catch (error) {
        const msg = `${chalk.red(error.message)}\n\n${chalk.yellow('For more help type: ci-status jenkins --help')}`
        console.log(msg)
      }
    })

  program
    .command('travis')
    .option('-b, --branch <branch>', 'Specific branch')
    .option('-o, --owner <owner>', 'Project owner')
    .option('-r, --repo <repo>', 'Project repository')
    .action(async ({ owner, repo, branch }) => {
      try {
        if (!owner) { throw Error('You need to specify an owner.') }
        const projects = await services.travis.getProjects({ owner, repo, branch })
        outputConsole(projects)
      } catch (error) {
        const msg = `${chalk.red(error.message)}\n\n${chalk.yellow('For more help type: ci-status travis --help')}`
        console.log(msg)
      }
    })

  program.parse(process.argv)

  if (!process.argv.slice(2).length) {
    program.outputHelp(txt => txt)
  }
}

main()
