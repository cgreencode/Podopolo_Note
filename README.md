# A Note REST API App using ExpressJs, MongoDB, NodeJs and Typescript

## Prerequisites
MongoDB should be up & running.
Node.js v4 or higher should be installed.

## Setup and Run Locally 

Commands

```bash
    # clone github repo
    $ cd Podopolo_Note
    $ cp .env.example .env

    # Run 
    # SET DATABASE_URL
    $ npm install
    $ npm run dev

    # Run tests
    $ npm run test
```
* I assumed you would run it locally. If you want to test it with MongoDB Online, you should update the base url.

```
DATABASE_URL="mongodb://localhost:27017/notesdb"
```

 
## Directory Structure

```
.
├── dist/                                # Build files
├── public/                              # Contains static files
├── src/                                 # All
│   ├── configs/                         # Contains all the configurations
│   ├── models/                          # Contains all the database schema and models
│   ├── services/                        # Contains all the services
│   ├── controllers/                     # Contains all the controllers
│   ├── middlewares/                     # Contains all the middlewares
│   ├── validators/                      # Contains all the request validators
│   ├── serializers/                     # Contains all the serializers
│   └── routes/                          # Contains all the routes
├── tests/                               # Contains all the test files
├── tsconfig.json                        # Typescript Config
├── index.ts                             # Index file
├── package.json
├── package-lock.json
└── README.md
```

## API Reference

Postman Docs: https://documenter.getpostman.com/view/26150327/2s93JnUSRP

#### Get Home URL

```
  GET /api/
```

#### Register User

```
  POST /api/auth/signup
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `name`     | `string` | **Required**. Your Name     |
| `email`    | `string` | **Required**. Your Email    |
| `password` | `string` | **Required**. Your Password |

#### Login User

```
  POST /api/auth/login
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. Your Email    |
| `password` | `string` | **Required**. Your Password |

#### Notes API

```
  GET     /api/notes/
  GET     /api/notes/:id
  POST    /api/notes/
  PUT     /api/notes/:id
  DELETE  /api/notes/:id
  GET     /api/search?q=:query
  POST    /api/notes/:id/share
```
## 
