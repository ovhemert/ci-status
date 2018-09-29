# API

The library exposes an object for each CI service.

To include the library in your project, use:

```js
const cis = require('ci-status')
```

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

API token (preferred) or the password of the user

### url

Type: `String` *(required)*

Example: `http://localhost:8080/`

The full host url to connect to.

### user

Type: `String` *(required)*

Example: `ovhemert`

User account that has permissions to view the projects
