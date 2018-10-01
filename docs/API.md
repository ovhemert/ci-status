# API

The library exposes an object for each CI service.

To include the library in your project, use:

```js
const cis = require('ci-status')
```

## Generic

### Project

The `getProjects` function of each service always returns an array of projects. The project object follows the attribute names in the [Multiple Project Summary Reporting Standard](https://github.com/erikdoe/ccmenu/wiki/Multiple-Project-Summary-Reporting-Standard) .

Example:

```js
{
  name: 'ci-status',
  activity: 'Sleeping',
  lastBuildStatus: 'Success',
  lastBuildLabel: '3',
  lastBuildTime: '2018-09-20T08:26:43.000Z',
  nextBuildTime: null,
  webUrl: 'https://travis-ci.com/ovhemert/ci-status'
}
````

#### name

Type: `String` *(required)*

The name of the project.


#### activity

Type: `String` *(required)*

Enum: `Sleeping`, `Building`, `CheckingModifications`

The current state of the project.

#### lastBuildStatus

Type: `String` *(required)*

Enum: `Success`, `Failure`, `Exception`, `Unknown`

A brief description of the last build.

#### lastBuildLabel

Type: `String` *(optional)*

A referential name for the last build.

#### lastBuildTime

Type: `String (date/time)` *(required)*

When the last build occurred.

#### nextBuildTime

Type: `String (date/time)` *(optional)*

When the next build is scheduled to occur (or when the next check to see whether a build should be performed is scheduled to occur).

#### webUrl

Type: `String (url)` *(required)*

URL for where more detail can be found about the project.

## AppVeyor

The `appveyor` object exposes functions related to the [AppVeyor](https://www.appveyor.com/) service.

### getProjects

Example:

``` js
const projects = await cis.appveyor.getProjects({
  owner: 'ovhemert',
  repo: 'ci-status'
})
```

Returns an array of projects. See [`Project`](#project).

#### owner

Type: `String` *(required)*

Example: `ovhemert`

User account the repositories belong to.

#### repo

Type: `String` *(required)*

Example: `ci-status`

The name of the repository your interested in.

## Jenkins

The `jenkins` object exposes functions related to the [Jenkins](https://jenkins.io/) service.

### getProjects

Example:

``` js
const projects = await cis.jenkins.getProjects({
  url: 'http://localhost:8080/',
  user: 'ovhemert',
  token: '116237544ebea73f9a27ffebadb3961859'
})
```

Returns an array of projects. See [`Project`](#project).

#### project

Type: `String` *(optional)*

Example: `ci-status`

The name of the project your interested in. By default, Jenkins will return all available projects. This option filters the list and returns only the project with the specified name.

#### token

Type: `String` *(required)*

Example: `116237544ebea73f9a27ffebadb3961859`

API token (preferred) or the password of the user.

#### url

Type: `String` *(required)*

Example: `http://localhost:8080/`

The full host url to connect to.

#### user

Type: `String` *(required)*

Example: `ovhemert`

User account that has permissions to view the projects.

## Travis CI

The `travis` object exposes functions related to the [Travis CI](https://travis-ci.com/) service.

### getProjects

Example:

``` js
const projects = await cis.travis.getProjects({
  owner: 'ovhemert',
  repo: 'ci-status'
})
```

Returns an array of projects. See [`Project`](#project).

#### branch

Type: `String` *(optional)*

Example: `production`

Show build status for specific branch.

#### owner

Type: `String` *(required)*

Example: `ovhemert`

User account the repositories belong to.

#### repo

Type: `String` *(optional)*

Example: `ci-status`

The name of the repository your interested in.

#### token

Type: `String` *(optional)*

Example: `116237544ebea73f9a27ffe`

API token of the user. To show private projects, you need to specify this property.
