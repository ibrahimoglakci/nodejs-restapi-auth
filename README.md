# Node.js RESTful API Project

![Node.js Logo](https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg)

---

## Table of Contents

- [About](#about)
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

### EndPoint

## User Authentication and Registration

Endpoint: `https://localhost:3000/api/v1/login`

# Method: # POST

## Parameters:

`username` (Username)
`email` (Email Address)
`password` (Password)

Endpoint: `https://localhost:3000/api/v1/register`

# Method: # POST

## Parameters:

`username` (Username)
`email` (Email Address)
`password` (Password)

## Posts

Endpoint: `https://localhost:3000/api/v1/posts`
Endpoint: `https://localhost:3000/api/v1/post/{id}`

## Methods:

# GET (Get All Posts)
# POST (Create a New Post)
# Endpoint: https://localhost:3000/api/v1/post/:id

# Methods:

# GET (Get a Specific Post)
# PUT (Update a Specific Post)
# DELETE (Delete a Specific Post)

