[![Build Status](https://travis-ci.org/Daymorelah/PostIt.svg?branch=master)](https://travis-ci.org/Daymorelah/PostIt)
[![Coverage Status](https://coveralls.io/repos/github/Daymorelah/PostIt/badge.svg?branch=test)](https://coveralls.io/github/Daymorelah/PostIt?branch=test)
[![Code Climate](https://codeclimate.com/github/Daymorelah/PostIt/badges/gpa.svg)](https://codeclimate.com/github/Daymorelah/PostIt)
[![Issue Count](https://codeclimate.com/github/Daymorelah/PostIt/badges/issue_count.svg)](https://codeclimate.com/github/Daymorelah/PostIt)
[![Test Coverage](https://codeclimate.com/github/Daymorelah/PostIt/badges/coverage.svg)](https://codeclimate.com/github/Daymorelah/PostIt/coverage)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## PostIt Project by Hussain Ademola

### PostIt v1.0

 PostIt is a simple application that allows friends and colleagues create groups for notifications.
This way one person can post notifications to everyone by sending a message once. The
application allows people create accounts, create groups and add registered users to the groups,
and then send messages out to these groups whenever they want.

#### Getting started

- Fork the repo and clone to your local machine.
- Run `npm install` to download dependencies.
- Run `npm run server` to start the API endpoints.
- Use postman to test the API endpionts.
- To run tests do `npm test`.

#### Prerequisites

- You need a database (remote or local) to be able to use the app.

 Note: The API documentation is been currently worked on and wold be relased soon.
 Check the server/routes/index.js for available routes of the API endpoints.

#### Functionalities:

* User can create an account.
* User can Create broadcast groups.
* User can add other registered users to created groups
* User send messages to members to of a group.

 Stack Used:
===========
* Node.js
* Sequelze as the ORM.
* Postgresql for data persistence.
* Mocha as the testing framework and Chai as the assertion library
* Travis CI for continous integration
* Hound CI for style cheking commits in PRs
* Coveralls for test coverage reporting
* Heroku for continous deployments

Its API documentation can be found [here](https://postit24.herokuapp.com/api/v1/documentation)

 Methodology Used:
=================

Agile methodology was used for the project and Trello Board was used for the project management.


Credits:
========

Open Source tutorials


Thank You!!!

#### Developer: Hussain Ademola

