# MyTech-Blog

## Description
Thid is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

![License](https://img.shields.io/badge/license-MIT-Blue.svg)
## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#license)
  * [test](#test)

## Installation
This application uses node.js, express, mysql2,sequelize, and dotenv modules. To install necessary dependecies, run the following commands:


Clone the Repository
npm install mysql2
npm install dotenv
Create .env file with proper credentials
npm install bcrypt
npm install express-handlebars
npm install connect-session-sequelize
Access mySQL Terminal and run source db/schema.sql to create the database. Exit mySQL terminal after successful creation.
Run node seeds/index.js to create the tables and seed with placeholder data.
Run node server.js to create the server and be able to access in local host port.

## Usage
This project is used to search and post. Developers can publish their blog posts and comment on other developers’ posts as well.

![image](https://user-images.githubusercontent.com/88918693/144714170-50249c62-e267-4a2f-b623-35570c7bb099.png)

## License
This project is licensed under the MIT

Link: https://opensource.org/licenses/MIT

# Test
This product can be tested through the demo link.
https://secret-river-89820.herokuapp.com/
