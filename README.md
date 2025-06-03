# github-pages-demo
Repository to learn and explore website using Github Pages

## Tools Required
* NodeJs latest: `node --version`
* Npm latest: `npm --version`
* Npx latest: `npx --version`

## Commands

### Install node modules

Install dependencies from package.json without updating package-lock.json

    npm ci

or Install dependencies from package.json by creating/updating package-lock.json

    npm install

### Start application in development mode

    npm run dev

### Generate production build

    npm run build

### Start production build

    npm run serve

### Generate production build and start using single command

    npm run build_serve

### Run unit tests

Watch mode

    npm run test

CI mode

    npm run test:ci

### Run e2e tests

Watch mode

    npm run e2e

CI mode

    npm run e2e:ci

### Run all tests and generate build artifact

    npm run all

### Change port for dev and testing

    export PORT=4000

    npm run all

    npm run dev

    npm run build_serve

### Change context path for dev and testing

    export NEXT_PUBLIC_BASE_PATH='/context-path'

    npm run all

    npm run dev

    npm run build_serve
