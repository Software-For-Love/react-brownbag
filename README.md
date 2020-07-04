# react-brownbag

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

_Please note that you should have the following installed to use this template:_

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Available Scripts

In the project directory, you can run:

### `docker-compose up -d --build`

This command builds the container image and starts it in development mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

If this doesn't work for Mac users, please refer to [mac-setup.md](mac-setup.md)

### `docker-compose stop`

This command stops the execution of the project.<br/>
_Please note:_ the container images and volumes will all still be installed on your computer after you run this. If you have not yet deleted them manually, you can simply run `docker-compose up` to run the containers again.

### `docker-compose down`

This command deletes the existing container images and volumes. Once this has been executed you must re-build the project in order to run it again.
