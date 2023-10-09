# Node.js RESTful API Project
<p align="center"><a href="https://nodejs.org/en" target="_blank"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="400" alt="NodeJS Logo"></a></p>


---

## Table of Contents

- [Prerequisites](#prerequisites)

- [Endpoints](#endpoints)
  - [User Authentication and Registration](#user-authentication-and-registration)
  - [Posts](#posts)

- [License](#license)

---


### Prerequisites

Make sure you have the following software/tools installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the project:

  ```bash
  git clone https://github.com/[github_username]/[project_name].git
  ```

2. Navigate to the project directory:

```bash
  cd nodejs-restapi-auth
  ```
3. Install the required packages:

```bash
  npm install
  ```
4. Running the project:

```bash
  npm start
  ```

# EndPoint

## User Authentication and Registration

Endpoint: `https://localhost:3000/api/v1/login`

 Method:  POST

## Parameters:

`username` (Username)
`email` (Email Address)
`password` (Password)

Endpoint: `https://localhost:3000/api/v1/register`

 Method:  POST

## Parameters:

`username` (Username)
`email` (Email Address)
`password` (Password)

## Posts

- `GET /api/v1/posts`: Used to retrieve all posts.

- `GET /api/v1/post/{id}`: Used to retrieve a specific post.

- `POST /api/v1/posts`: Used to add a new post.

- `PUT /api/v1/post/{id}`: Used to update an existing post.

- `DELETE /api/v1/post/{id}`: Used to delete a specific post.

## Methods:

GET (Get All Posts)
POST (Create a New Post)

## Methods:

GET (Get a Specific Post)
PUT (Update a Specific Post)
DELETE (Delete a Specific Post)

## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
