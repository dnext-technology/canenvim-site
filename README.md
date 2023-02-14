# Can Evim - canevimor.g

CanEvim.org
Can Evim platformu, ihtiyaç sahiplerini, destek sağlamak
isteyen birey, kurum ve kuruluşlarla eşleştirmek amacıyla
kullanıma açılmıştır.


This project was generated with [ReactJs](https://reactjs.org/) version 17.0.2
### Requirements

- [NodeJs](https://nodejs.org/en/download/)
- [ReactJs](https://reactjs.org/)
- [Yarn for Windows](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable), [Yarn for Mac](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) (recommended)

### Running the application locally

First, you should update your local
```shell
$ git pull
```
After update,

```shell
$ yarn install or npm install
$ yarn start or npm run start (ng serve)
```
Use and check  ` npm build ` before push 

## Development server

Run `npm start` or `yarn start` for a dev server. Navigate to `http://localhost:3000`. The app will automatically reload if you change any of the source files.

## Configuration

CanEvim is using the `.env` file to configure, this is the custom Environment Variable file.

```shell
REACT_APP_BASE_URL='https://canevim.org/api'
REACT_APP_BOOKING_API='/mp-booking/v1'
REACT_APP_LOCATION_API='/mp-location/v1'
```

Please configure the `.dev.env` file according to the Development environment

Please configure the `.prod.env` file according to the Production environment



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `build/` directory. 

- You can use `npm run build` command to compile for dev environment
- You can use `npm run build:prod` command to compile for PROD environment

```shell
$ ng build
```
