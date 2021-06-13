# React Notes

## Project Intro

React Notes is my implementation of the Moove It bootcamp final project, which consisted in building a post it notes app with React.

## Project Description

The project consists of a responsive post it notes application built using React which allows users to create, edit, search and delete notes. The app has 2 main sections where users can store their notes, a home section where created/edited notes are kept and a trash bin where users can move notes before permanently deleting them. Users can move notes back and forth between home and trash as many times as they want.

The app features a header with an "actions menu" containing buttons to interact with and navigate the application, and a search bar to filter notes according to the contents of their title or body.

To persist notes after a page refresh the app uses the browser's local storage.

### Technical Decisions

- The majority of the app is contained within the src folder. Inside the src folder I created a component folder to store individual components with their corresponding css files.

- To better handle application state, and easily pass data through the component tree I decided to use React Context.

- I avoided using react router (or any routing solution) because I believe it would have added unnecessary complexity. Given the app's structure, if routing was implemented, the app would have had only had 2 routes, a home route "/" and a trash route "/trash" hence I considered it overkill to add routing.

- For app icons I decided to use SVGs instead of font icons or images due to their scalability, performance and flexibility. Aside from the React logo, all SVGs used for the app icons are contained in a single sprite SVG file.

- For CSS class names I used mainly BEM which I believe helps organize classes and styles in an easily understandable way.

- To make the app responsive I decided to use rem and percentages as units instead of pixels, media queries and modern CSS technologies such as Flexbox and CSS Grid.

- To easily modify the app's color scheme when needed I decided to store colors in CSS variables.

### Dependencies

- nanoid: this npm package was installed to create a unique id for each note which would then be used as the key prop at the moment of rendering. The other popular npm package to generate unique id's, uuid, is larger an slower than nanoid therefore the choice of the latter.

- prop-types: this npm package was installed to document the intended types of properties passed to components, check props passed to components against those definitions, and warn in development if they don’t match. This helps avoid errors and was necessary to comply with Airbnb's Eslint requirements.

All of the devDependencies installed were installed to configure Airbnb's style guide with Eslint and Prettier.

### Using the App

To use the app download or clone the repository, run npm i to install all dependencies and then run npm start.

For more information on the available scripts check the section bellow on getting started with Create React App.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
