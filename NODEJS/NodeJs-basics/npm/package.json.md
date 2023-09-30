There are lots of things going on here:
//initiate npm // npm init
// go through package.json file

<!-- "cookie-parser": "^1.4.6", -->

const cookie = require(""cookie-parser")

- **name** sets the application/package name //twitter-api
- **version** indicates the current version // 1.2.0 ~2.0.0
- **description** is a brief description of the app/package // an api for twitter search
- **main** set the entry point for the application // server.js index.js
- **private** if set to true prevents the app/package to be accidentally published on npm
- **scripts** defines a set of node scripts you can run
- **dependencies** sets a list of npm packages installed as dependencies
- **devDependencies** sets a list of npm packages installed as development dependencies
- **engines** sets which versions of Node this package/app works on
- **browserslist** is used to tell which browsers (and their versions) you want to support
- All those properties are used by either npm or other tools that we can use.
