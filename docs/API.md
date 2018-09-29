# API

The library exposes an object for each CI service.

To include the library in your project, use:

```js
const cis = require('ci-status')
```

## Appveyor

Example

``` js
const projects = await cis.appveyor.getProjects({
  owner: 'ovhemert',
  repo: 'ci-status'
})
```

### owner

Type: `String` *(required)*

Example: `ovhemert`

User account the repositories belong to.

### repo

Type: `String` *(required)*

Example: `ci-status`

The name of the repository your interested in.

## Jenkins

Example

``` js
const projects = await cis.jenkins.getProjects({
  url: 'http://localhost:8080/',
  user: 'ovhemert',
  token: '116237544ebea73f9a27ffebadb3961859'
})
```

### project

Type: `String` *(optional)*

Example: `ci-status`

The name of the project your interested in. By default, Jenkins will return all available projects. This option filters the list and returns only the project with the specified name.

### token

Type: `String` *(required)*

Example: `116237544ebea73f9a27ffebadb3961859`

API token (preferred) or the password of the user.

### url

Type: `String` *(required)*

Example: `http://localhost:8080/`

The full host url to connect to.

### user

Type: `String` *(required)*

Example: `ovhemert`

User account that has permissions to view the projects.

## Travis CI

Example

``` js
const projects = await cis.travis.getProjects({
  owner: 'ovhemert',
  repo: 'ci-status'
})
```

### branch

Type: `String` *(optional)*

Example: `production`

Show build status for specific branch.

### owner

Type: `String` *(required)*

Example: `ovhemert`

User account the repositories belong to.

### repo

Type: `String` *(optional)*

Example: `ci-status`

The name of the repository your interested in.

### token

Type: `String` *(optional)*

Example: `116237544ebea73f9a27ffe`

API token of the user. To show private projects, you need to specify this property.
