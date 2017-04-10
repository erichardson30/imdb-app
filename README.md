# Setup
To run this project, please install [Docker](www.docker.com)

In the root directory, run `docker compose up` to install all dependencies and start both applications.

# Application
This application interfaces with the [IMDB api](https://www.npmjs.com/package/imdb-api) and searches for a movie title, returning back a single match.

# Front End
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

Even though this app only has a single route, [React Router](https://github.com/ReactTraining/react-router) was added to the project so the app can continue to grow without refactor.

[Redux](http://redux.js.org/) is used for state management.

# Back End
The back end is a [NodeJS](https://nodejs.org/en/) app that uses [Express](https://expressjs.com/) to create a backend api for the front end application. The [IMDB api](https://www.npmjs.com/package/imdb-api) package is added in to interface with IMDB data. The application is structured in a way that allows more routes to be added at ease for easy growth. 