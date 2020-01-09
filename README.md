# API Boilerplate

[![Build Status](https://travis-ci.org/Wiredcraft/api-boilerplate.svg?branch=master)](https://travis-ci.org/Wiredcraft/api-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/Wiredcraft/api-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/Wiredcraft/api-boilerplate?branch=master)

Boilerplate for a (Node.js based) API or web service.

## How to use

Copy whatever you need.

## What's included/used

### Docker boxes

See `/dockers/README.md`.

### Modules

```bash
# Core
yarn add bluebird debug
# Config
yarn add env-var-defaults
# Core Loopback
yarn add loopback loopback-extended-lib
# Core Middlewares
yarn add helmet serve-favicon strong-error-handler strong-remoting
# Loggers
yarn add bunyan bunyan-debug-stream bunyan-logger express-bunyan-logger syslog-bunyan-logger
# DB / Datasource
yarn add loopback-connector loopback-datasource-juggler
# Mixins
yarn add loopback-ds-timestamp-mixin
# Tools
yarn add http-errors uuid
# Lint
yarn add --dev eslint eslint-config-wcl-backend
# Dev
yarn add --dev coveralls istanbul mocha nodemon should supertest
```

## Commit

Use [commitlint](https://github.com/conventional-changelog/commitlint) with [@commitlint/config-conventional](https://github.com/marionebl/commitlint/blob/master/@commitlint/config-conventional/index.js)
for commit lint.

## How to create changelog

```
npm install -g conventional-changelog-cli
```

Workflow with `npm version`:

1. Make changes
2. Commit those changes
3. Pull all the tags
4. Run the `npm version [path|minor|major]` command
5. Push


## Use the Prettier formatter with IDE

- install the [plugins](https://prettier.io/docs/en/editors.html) for the editor you use.
- enable `formatting on save` (eg: VScode).

and the file will be formated nicely with a unified style when ever you save the file.
