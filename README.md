# react with api mongoDB

## Features

-   ![React](https://img.shields.io/badge/-REACT-black?style=plastic&logo=react)
-   ![js](https://img.shields.io/badge/-JAVASCRIPT-black?style=plastic&logo=javascript)
-   ![MongoDB](https://img.shields.io/badge/MONGODB-black?style=plastic&logo=mongodb)
-   ![NodeJS](https://img.shields.io/badge/NODE.JS-black?style=plastic&logo=node.js)
-   ![Express.js](https://img.shields.io/badge/EXPRESS.JS-black?style=plastic&logo=express)

## Getting starting

### Tools

Check that [`Nodejs`](https://nodejs.org/en/download/) is installed :

```sh
$ node -v
```

Check that [`Yarn`](https://yarnpkg.com/en/docs/install) is installed :

```sh
$ yarn -v
```

### Mongo DB

Run Mongo in Docker container :

```sh
$ docker run --name <container-name> -d -p 127.0.0.1:27017:27017/tcp mongo
```

Access Mongo shell :

```sh
$ docker exec -it <container-name> mongosh
```

### Install all dependencies

Install all dependencies for the API and the client :

```sh
$ yarn install-all
```

### API server

Create `.env` file based on `.env.example` and modify variables if needed.

```env
PORT=your_port
MONGO_URL=your_mongoDb_url
```

Compile :

```sh
$ yarn build
$ yarn build:watch
```

Start development server :

```sh
$ yarn dev
```

Start production server :

```sh
$ yarn start
```

### App Client

Runs the app in the development mode :

```sh
$ yarn start
```

Builds the app for production to the `build` folder :

```zsh
$ yarn build
```
