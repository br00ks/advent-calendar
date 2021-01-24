# Advent calendar

This project was made as a gift for friends. I tried to make it as generic and configurable as possible so everybody can use it for own digital calendars as gifts.

## Configuration

There is a config-file `CalendarConfig` where the following things should be defined:
- [snowfall]: defines whether snowfall effect should be active at all. Also the color and size of the snowflakes can be settings
- [creator]: set the creator to be displayed in the footer
- [recipient]: set the recipient to be displayed in the title

## How to start
Clone this project, configure stuff in `CalendarConfig` and start the application in one of the following ways:

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
