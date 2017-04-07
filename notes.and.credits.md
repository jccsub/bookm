# bookm Notes and Credits

<!-- TOC -->

- [bookm Notes and Credits](#bookm-notes-and-credits)
    - [Conventions Used](#conventions-used)
        - [Use exact versions for dependencies](#use-exact-versions-for-dependencies)
        - [Lowercase file names](#lowercase-file-names)
        - [Using Winston logger](#using-winston-logger)
        - [Coding Conventions](#coding-conventions)
        - [Using gulp as build tool](#using-gulp-as-build-tool)
        - [Using Express instead of Koa(2)](#using-express-instead-of-koa2)
        - [Using Typescript](#using-typescript)
        - [Using Mocha for test support](#using-mocha-for-test-support)
        - [Event handlers in TypeScript](#event-handlers-in-typescript)
            - [TypeScript EventHandler Property](#typescript-eventhandler-property)
            - [Node.js EventEmitter with Custom Events](#nodejs-eventemitter-with-custom-events)
    - [Required Node Version](#required-node-version)
    - [Debugging ES6 in VS Code](#debugging-es6-in-vs-code)
    - [Proxy Server](#proxy-server)
    - [Additional Helpful Links](#additional-helpful-links)

<!-- /TOC -->

## Conventions Used


### Use exact versions for dependencies 

The following two commands make changes to the [.npmrc](file:///C:/Users/chadc/.npmrc) file

* Save installed packages to a package.json file as dependencies.
    
        npm config set save=true

* Save dependencies with an exact version
    
        npm config set save-exact=true

### Lowercase file names

### Using Winston logger

I chose Winston based on the community support and ease of use. Had considered, morgan and bunyan, as well.

### Coding Conventions

See: Microsoft's TypeScript [Coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)

### Using gulp as build tool

There seems to be a move away from grunt and gulp and a move towards using npm scripts for several reasons. I had planned to do the same, but will hold off, as there are some good arguments against such a change and I'm more familiar with the gulp way of things. Not adverse to going back to change later though.

### Using Express instead of Koa(2)

Will probably go back and replace express later. But for now, just to keep things moving...

### Using Typescript

* [Developing a restful api with node and typescript](http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WOOdm28rLmg)

### Using Mocha for test support

A typical test configuration in package.json will look like this:

```javascript
"scripts": {
  "start": "node dist/index.js",
  "test": "mocha --reporter spec --compilers ts:ts-node/register 'test/**/*.test.ts'"
},
```

The path pattern will not work in windows. The above in windows should be something like:

```javascript
  "scripts": {
    "test": "mocha --recursive --reporter spec --compilers ts:ts-node/register \".\\test\\*.ts\"",
    "start": "node dist/index.js"
  },
```

The above "test" pattern is working.

### Event handlers in TypeScript

#### TypeScript EventHandler Property

* Not sure if I'm ok with this form of event handling yet, but thought I would reference it
* Link: [TypeScript Event Property](http://stackoverflow.com/a/33577618)

#### Node.js EventEmitter with Custom Events

* I like this better, however, I might opt for the previous since it seems to be more in line with the goals of typescript
* Link: [Node.js EventEmitter](http://www.tutorialsteacher.com/nodejs/nodejs-eventemitter)

## Required Node Version

* Currently using 7.90

| Package | Required Node Version |                                    Notes                                    |
| :-----: | :-------------------: | :-------------------------------------------------------------------------- |
|  Koa2   |         7.60          | Have decided to start with express instead of Koa for now. May switch later |

## Debugging ES6 in VS Code

Struggled with this for a long while. Finally, what worked for me and simplest to implement was found here:  [Use Typescript and VS Code to develop your NodeJS application](https://bertrandg.github.io/node-development-with-typescript-and-vscode/)


## Proxy Server
I considered starting with a blank slate like [this](http://www.catonmat.net/http-proxy-in-nodejs/), however, I would have consumed much of my time just trouble-shooting proxy code, which that isn't my aim here.


## Additional Helpful Links

* [A proxy server in 20 lines](http://www.catonmat.net/http-proxy-in-nodejs/)
  * I had to modify the code slightly in order to get it to work, that's because http.createClient 
was deprecated. The work-around used is from [this answer in StackOverflow](http://stackoverflow.com/a/22482780)

* [Heroku's Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices#use-a-smart-npmrc)

* [FilePathToURL](http://jsfiddle.net/StephenLujan/r6DYy/)
