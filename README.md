# React Todo Example

A framework for building a React Todo app.

**Not for production use!!!**

This framework is designed to quickly get you started writing a React Todo application.
I've already set up Webpack for you which will run a development server and mocha is configured to run your tests.

## Installing
`npm i` - install dependencies

## Scripts
- `start` - runs the dev server and opens the generated root index file
- `test` - runs the tests in the `test` directory

Testing is done using Mocha and Enzyme with Chai as the assertion library.
Chai's expect syntax is globally registered, as is React so you shouldn't have to import these into each test file.
