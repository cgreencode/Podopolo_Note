# A Note REST API App using ExpressJs, MongoDB, NodeJs and Typescript


## Setup and Run Locally 

Commands

```bash
    # clone github repo
    $ cd express-node-api
    $ cp .env.example .env

    # Run 
    # SET DATABASE_URL
    $ npm install
    $ npm run dev

    # Run tests
    $ npm run test
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
