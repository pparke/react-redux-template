# react-redux-template
Basic single page template with redux and webpack

## Includes
- webpack
- webpack-dashboard
- redux
- react
- Feed and FeedItem components and associated actions and reducers for redux

## Running
```npm start``` will run webpack-dev-server in inline mode with the base directory set to ```src/client```.
Visit ```localhost:3000``` to view the app

## Building
```npm build``` will build the app in the ```src/client/public``` dir

## Directory Structure
```
.
└── src
│   └── client
│       ├── app
│       │   ├── components
│       │   │   ├── App.jsx
│       │   │   ├── FeedItem.jsx
│       │   │   └── Feed.jsx
│       │   ├── containers
│       │   │   ├── AddItem.jsx
│       │   │   └── FeedContainer.js
│       │   ├── index.jsx
│       │   └── redux
│       │       ├── actions.js
│       │       └── reducers.js
│       ├── index.html
│       └── public
├── .babelrc
├── .gitignore
├── package.json
└── webpack.config.js
```
