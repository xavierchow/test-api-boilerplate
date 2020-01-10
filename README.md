# API Boilerplate

[![Build Status](https://travis-ci.org/Wiredcraft/api-boilerplate.svg?branch=master)](https://travis-ci.org/Wiredcraft/api-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/Wiredcraft/api-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/Wiredcraft/api-boilerplate?branch=master)

Boilerplate for a (Node.js based) API or web service.

## How to use

Copy whatever you need.

## What's included/used

### Docker boxes

See `/dockers/README.md`.


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

