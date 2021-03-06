# Stemcell
A forkable starting point for node-react-redux web apps.

## Features
* Written (mostly) in [ES2015](https://babeljs.io/docs/learn-es2015/) JavaScript with Babel transpiling
* [React](https://facebook.github.io/react/) for client rendering
* [React hot loader](http://gaearon.github.io/react-hot-loader/) to hot reload client
* [Redux](https://github.com/rackt/redux) for storing client app state
* [Redux dev tools](https://github.com/gaearon/redux-devtools) to #FIXME
* [React-redux](https://github.com/rackt/react-redux) to connect react components to the redux store
* Uses the react [container](https://medium.com/@learnreact/container-components-c0e67432e005) pattern to separate stateful and stateless react components
* [Webpack](https://webpack.github.io) to build and deliver client code and assets
* [Nodemon](https://github.com/remy/nodemon) To restart server on source changes
* [ES Lint](http://eslint.org/) for code linting #FIXME

## Folder layout

```
stemcell
├── client                           
│   ├── actions                      # Redux actions and generators, this where MVC control logic goes
│   ├── assets                       # Fonts and images
│   ├── components                   # React components, sets up app views
│   ├── config
│   │   ├── history.js               # Global history object, used for routing
│   │   └── routes.js                # Client routes and container hierarchy
│   ├── constants
│   │   ├── actionTypes.js           # Types used in redux actions and reducers
│   │   ├── endpoints.js             # Server api urls
│   │   └── errorTypes.js            # Error types
│   ├── containers                   # React components that connect views to actions and state
│   ├── reducers                     # Redux reducers that process actions and update state
│   ├── styles                       # Stylesheets
│   │   ├── base                     # Styles shared by one or more components
│   │   ├── components               # Styles for each react component
│   │   └── main.scss                # Imports individual style files
│   ├── utils                        # Functions shared across client
│   ├── index.html                   # Root html for rendering app, returned by server when app loads 
│   └── index.js                     # Top level client js file, pulled in by webpack, sets up client app
│
├── server
│   ├── config                       # Process.env configuration (e.g. server PORT)
│   ├── middleware                   # Custom middleware, e.g. custom authentication strategy
│   └── services                     # App services, each service gets its own route mount point
├── spec                             # Jasmine configuration
├── app.js                           # Sets up express server
├── package.json                     # Sets up npm dependencies and run scripts
├── webpack.config.js                # Webpack configuration
└── webpackMiddleware.config.js      # Webpack middleware configuration
```

## Getting started
### common patterns and tasks FIXME

## Notes
Server is configured to use webpack middleware and hot-reloading, so client code and style are combined and served as a single bundle.js file referenced by index.html. Index.html also directly references the Bootstrap css.

## Future patterns
Action source files only have action creators. Dispatching actions happens in containers. Containers should have minimal
rendering, instead relying on components.

Action creators don't return static objects with type and payload. Instead action creators are thunks, and return a function that expects current state, which returns updated state. Reducers accept an action creator's thunk and apply it to current state to get a new state.

Use Firebase to build prototypes with as little server side code as possible.

Server errors like 401 unauthorized are caght in api.js and then translated to an app specific error type that's returned in a
resolved promise. Calling function which should be in a container catches error and redirects browser history.

Browser redirects should go through the redux app state, using redux-simple-router.




