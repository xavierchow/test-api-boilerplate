# API Boilerplate


Boilerplate for a (Node.js based) API or web service.



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

