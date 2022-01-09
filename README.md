# react with api mongoDB

## Features

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

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
