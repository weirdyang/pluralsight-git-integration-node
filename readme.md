# How to integrate Github with travis

[![Build Status](https://travis-ci.org/weirdyang/pluralsight-git-integration-node.svg?branch=master)](https://travis-ci.org/weirdyang/pluralsight-git-integration-node)

## Fixes

*****

## No builds showing on travis dashboard and/or commits not triggering build:

ensure .travis.yml is formatted properly.
debug why travis build is not running by going to the requests tab

![Request tab](https://raw.githubusercontent.com/weirdyang/pluralsight-git-integration-node/master/docs/requests.PNG)

![Request erros](https://raw.githubusercontent.com/weirdyang/pluralsight-git-integration-node/master/docs/requests-parse.PNG)

*****

## primordials is not defined
```
referenceError: primordials is not defined
```
Follow the instructions [here](https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node) and [here](https://ourcodeworld.com/articles/read/1188/how-to-solve-gulp-exception-reference-error-primordials-is-not-defined-error).

TL:DR
1. Gulp 3.* doesn't work on Node 12.* or above. You have to downgrade Node, or upgrade Gulp.
2. You have 3 options:

    a. downgrade node using nvm

    b. [using a npm-shrinkwrap.json](https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node-js/60921145#60921145)

    c. after initial `npm install`. first add the following to package.json. [this is the easiest]
    
    ```
    {
    //Your current package.json contents
      "resolutions": {
        "graceful-fs": "^4.2.4"
        }
    }
    ```
    then under scripts, add `"preinstall": "npx npm-force-resolutions"` to package.json.
    
    Run `npm install` again. 
    
    This is preferred, and will ensure your app works on heroku, more info [here](https://stackoverflow.com/a/58394828/9491881). 
    
    **Remember to add the following to the top of your .travis.yml**.
    ```
    before_install:
      npm install -g npx`
    ```

3. For options 2b. You should see this message:
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

## git push origin test-branch

if you get this `error: src refspec test-branch does not match any`,

run `git push --set-upstream origin test-branch`.

## AssertionError [ERR_ASSERTION]: Task function must be specified

Ensure the version for `gulp` in package.json is ^3.9.1

```
   "gulp": "^3.9.1",
```
https://stackoverflow.com/questions/51098749/everytime-i-run-gulp-anything-i-get-a-assertion-error-task-function-must-be
