## Available Scripts

In the project directory, you can run:

### `yarn`

Install dependencies.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn cover`

Generates a test coverage report.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes and ready to be deployed.

### `yarn deploy`

Builds and deploys app to GitHub Pages.

### `yarn analyze`

To analyze the bundle after a production build.

### `yarn flow`

Check the files for type errors.

## Challenge Q&A

### How did you decide which technologies to use as part of your solution?

The solution is based on what I currently use in production. It's designed to be a progressive web app, utilizing Service Workers and IndexedDB to store assets and data offline. It assumes an active user base and aims to make the performance on retuned visits as fast as possible.

### Are there any improvements you could make to your submission?

I made the application too complex for the allocated time. As a result I'm missing some of the fundamentals.

* Home page styling is unfinished
* Page footer is not responsive
* Test coverage is not above 90%
* App builds to build folder not dist

### What would you do differently if you were allocated more time?

I don't like building throw away code. Or cutting corners on a "Proof of concept" (As they have a habit of sitting around in production for far too long). For this reason I've tried to make this project as production ready as possible. Any extra time would be used to make it more production ready.

* Completed the issues mentioned above.
* Do a little bit of a refactor of the component folder structure to make it more consistent.
* Update favicon.ico
* Error Boundaries
* Code Splitting
* Better documentation
* More browser testing
* Wait for images to load before displaying entry lists
