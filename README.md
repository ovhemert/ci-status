# CI-Status

[![Travis](https://img.shields.io/travis/com/ovhemert/ci-status.svg?branch=master&logo=travis)](https://travis-ci.com/ovhemert/ci-status)
[![AppVeyor](https://img.shields.io/appveyor/ci/ovhemert/ci-status.svg?logo=appveyor)](https://ci.appveyor.com/project/ovhemert/ci-status)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/39e011f864c94544bb2535a531c4dd68)](https://www.codacy.com/app/ovhemert/ci-status?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ovhemert/ci-status&amp;utm_campaign=Badge_Grade)
[![Known Vulnerabilities](https://snyk.io/test/npm/ci-status/badge.svg)](https://snyk.io/test/npm/ci-status)
[![Coverage Status](https://coveralls.io/repos/github/ovhemert/ci-status/badge.svg?branch=master)](https://coveralls.io/github/ovhemert/ci-status?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/ovhemert/ci-status.svg)](https://greenkeeper.io/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

CI-Status displays the build status of projects on a continuous integration server in the console.
It's also possible to include the library into your own project.

![Screenshot](assets/images/screenshot.png)

## Requirements

A project that's building on a supported continuous integration server.
See the supported services list.

## Supported Services

This support list is a work-in-progress.

- [x] Appveyor
- [ ] Buddybuild
- [x] CircleCI
- [ ] CruiseControl
- [ ] GreenhouseCI
- [ ] Hudson
- [x] Jenkins
- [ ] Semaphore
- [ ] TeamCity
- [x] Travis (travis-ci.com)

*Missing something? Suggest or contribute your own!*

## Installation

To use globally from command line:

```bash
$ npm install -g ci-status
```

To include as a library in your project:

```bash
$ npm install ci-status
```

## Usage

Example:

```bash
$ ci-status travis -o ovhemert
```

For a detailed description of all the commands and options available, see the [CLI](./docs/CLI.md) documentation.

## API

Want to use `ci-status` as a library in your project?
See the [API](./docs/API.md) documentation for details.

## Maintainers

### Osmond van Hemert

[![Github](https://img.shields.io/badge/style-github-333333.svg?logo=github&logoColor=white&label=)](https://github.com/ovhemert)
[![NPM](https://img.shields.io/badge/style-npm-333333.svg?logo=npm&logoColor=&label=)](https://www.npmjs.com/~ovhemert)
[![Twitter](https://img.shields.io/badge/style-twitter-333333.svg?logo=twitter&logoColor=&label=)](https://twitter.com/osmondvanhemert)
[![Web](https://img.shields.io/badge/style-website-333333.svg?logoColor=white&label=&logo=diaspora)](https://www.osmondvanhemert.nl)

## Contributing

See the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) file for details.

## Donations

Want to help me out by giving a donation? Check out these options:

[![Patreon](https://img.shields.io/badge/style-patreon-333333.svg?logo=patreon&logoColor=&label=)](https://www.patreon.com/ovhemert)
[![Coinbase](https://img.shields.io/badge/style-bitcoin-333333.svg?logo=bitcoin&logoColor=&label=)](https://commerce.coinbase.com/checkout/fd177bf0-a89a-481b-889e-22bfce857b75)
[![PayPal](https://img.shields.io/badge/style-paypal-333333.svg?logo=paypal&logoColor=&label=)](https://www.paypal.me/osmondvanhemert)
[![Ko-fi](https://img.shields.io/badge/style-coffee-333333.svg?logo=ko-fi&logoColor=&label=)](http://ko-fi.com/ovhemert)

## License

MIT
