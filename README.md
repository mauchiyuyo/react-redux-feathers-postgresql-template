
# React Redux Feathrsjs PostgreSQL Universal Hot Example

[![Build Status](https://travis-ci.org/bertho-zero/react-redux-universal-hot-example.svg?branch=master&style=flat-square)](https://travis-ci.org/bertho-zero/react-redux-universal-hot-example)
[![Dependency Status](https://david-dm.org/bertho-zero/react-redux-universal-hot-example.svg?style=flat-square)](https://david-dm.org/bertho-zero/react-redux-universal-hot-example)
[![devDependency Status](https://david-dm.org/bertho-zero/react-redux-universal-hot-example/dev-status.svg?style=flat-square)](https://david-dm.org/bertho-zero/react-redux-universal-hot-example?type=dev)

---

## About

This is a starter boilerplate app I've put together using the following technologies:

* Both client and server make calls to load data from separate API server
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/reactjs/react-router)
* [Express](http://expressjs.com)
* [Feathers](http://feathersjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Passport](http://passportjs.org), [feathers-authentication](https://github.com/feathersjs/feathers-authentication) and [redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper) for authentication
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](https://webpack.js.org/) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Dev Tools](https://github.com/reactjs/redux-devtools) for next generation DX (developer experience). Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs).
* [React Router Redux](https://github.com/reactjs/react-router-redux) Redux/React Router bindings.
* [ESLint](http://eslint.org) to maintain a consistent code style
* [redux-form](http://redux-form.com/) to manage form state in Redux
* [lru-memoize](https://github.com/erikras/lru-memoize) to speed up form validation
* [multireducer](https://github.com/erikras/multireducer) to combine single reducers into one key-based reducer
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
* [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) and [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack) to customize Bootstrap and FontAwesome
* [react-helmet](https://github.com/nfl/react-helmet) to manage title and meta tag information on both server and client
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server
* [Jest](https://facebook.github.io/jest/) and [mocha](https://mochajs.org/) to allow writing unit tests for the project.


## Database Installation

If you're on a Mac, first ensure [PostgreSQL](https://www.postgresql.org/), [Postgis](http://postgis.net/) and [Redis](https://redis.io/) are installed and run the following:
```bash
brew install postgis postgresql redis
brew services start postgresql
brew services start redis
```

## Installation

```bash
npm install
```

## Running Dev Server

```bash
npm run dev
```

## Building and Running Production Server

```bash
npm run build
npm run start
```


Created and maintened by:

– Jonathan Kirknes, [@JonathanKirknes](https://github.com/JonathanKirknes)
