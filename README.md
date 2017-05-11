# Weather App
## Includes:
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [material-ui](http://material-ui.com)
- [Docker](https://docker.com)

## Deployment Dependencies
- [NodeJS](https://nodejs.org)
- For Linux: Install docker-cli and docker-compose

## Deployment instructions

### Step 1: Build the UI Project:
```sh
$ cd $PROJECT_HOME
$ sudo npm install create-react-app yarn -g
$ npm install
$ npm run build
```

### Step 2: Create the image and run the container
```sh
$ docker-compose up --build -d
```

Open the URL in your browser to access the application: `http://localhost`


## T0 Run test cases
### Step 1: Install the Mocha Library globally:
```sh
$ sudo npm install mocha -g
```

### Step 1: Install the Mocha Library globally:
```sh
$ cd $PROJECT_HOME
$ sudo npm install mocha -g
```
### Step 2: Change the server url
```sh
$ cd $PROJECT_HOME/src/
$ Edit the File Config.js and enter the serverUrl 'http://localhost:8080' and save it
$ cd $PROJECT_HOME
$ npm run test
```

