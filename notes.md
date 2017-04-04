# bookm Notes

* Use [FilePathToURL](http://jsfiddle.net/StephenLujan/r6DYy/)

## Conventions Used

### Use exact versions for dependencies 

The following two commands make changes to the [.npmrc](file:///C:/Users/chadc/.npmrc) file

* Save installed packages to a package.json file as dependencies.
    
        npm config set save=true

* Save dependencies with an exact version
    
        npm config set save-exact=true

### Lowercase file names

### Using gulp as build tool

There seems to be a move away from grunt and gulp and a move towards using npm scripts for several reasons. I had planned to do the same, but will hold off, as there are some good arguments against such a change.

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

## Required Node Version

| Package   | Required Node Version |
| :-------: | :-------------------: |
|   Koa2    |         7.60          |


## Credits

### Proxy Server
I could have used [node-http-proxy](https://github.com/nodejitsu/node-http-proxy), however, I wanted to understand what was going on and have more control. Writing a proxy server didn't seem to be too complicated conceptually. I used the following as  a base:

[A HTTP Proxy Server in 20 Lines of node.js Code](http://www.catonmat.net/http-proxy-in-nodejs/)


## Links

* [Heroku's Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices#use-a-smart-npmrc)

