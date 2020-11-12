## EJS-Blog

Blog app made from scratch using EJS template engine and express along with MongoDB as database. It performs most of the CRUD operations. It is the simplest form of blogging app that you can make using node/express/mongodb.

## Details:
1. Create new post, delete existing post, query/search post based on keywords.
2. This app has fully responsive, designed with mobile first approach.
3. Tech Stack:
      - NodeJS
      - Express ( Server )
      - EJS (Templating engine)
      - Bootstrap
      - MongoDB (Mongoose - object modeling tool)
      - mongoose-regex-search (For searching posts)
4. Deployed on Heroku.

## Demo
#### Live - https://ejsblog.herokuapp.com/

![demo gif](blog_demo.gif)


## Run project on local host
#### Note: nodejs and npm need to be installed before proceeding.
- git clone or download repository.  (Note: git need to be installed if using git commands)
- open cmd/terminal inside root directory of this project.
- type npm install (to install dependecies)
- add `.env` file inside the root directory and make sure to add `MONGO_DB_URI="your MongoDB URI string here"`
- type npm app.js
