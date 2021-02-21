# How to integrate Github with travis

[![Build Status](https://travis-ci.org/weirdyang/pluralsight-git-integration-node.svg?branch=master)](https://travis-ci.org/weirdyang/pluralsight-git-integration-node)

## Fixes

*****

## No builds showing on travis dashboard and/or commits not triggering build:

ensure .travis.yml is formatted properly.
debug why travis build is not running by going to the requests tab

![Request tab](./docs/requests.png)

![Request erros](./docs/requests-parse.png)

*****

## primordials is not defined
```
referenceError: primordials is not defined
```
Follow the instructions [here](https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node) and [here](https://ourcodeworld.com/articles/read/1188/how-to-solve-gulp-exception-reference-error-primordials-is-not-defined-error).

TL:DR
1. Gulp 3.* doesn't work on Node 12.* or above. You have to downgrade Node, or upgrade Gulp.
2. You have 2 options:

    a. downgrade node using nvm

    b. using a npm-shrinkwrap.json
3. For options 2a. You should see this messag:
    ```
    npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but npm-shrinkwrap.json was generated for lockfileVersion@0. I'll try to do my best with it!
    ```
    if you see this message:
    ```
    npm WARN ancient lockfile
    npm WARN ancient lockfile The npm-shrinkwrap.json file was created with an  old version of npm,
    npm WARN ancient lockfile so supplemental metadata must be fetched from the registry.
    npm WARN ancient lockfile
    npm WARN ancient lockfile This is a one-time fix-up, please be patient...
    npm WARN ancient lockfile
    ```
    it might be a corrupted npm profile folder.
