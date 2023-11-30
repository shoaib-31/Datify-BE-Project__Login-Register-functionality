# API Documentation

This documentation provides a guide on how to use the secure backend API, including user registration, authentication, and accessing secure endpoints. Please follow the steps outlined below.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Clone the Repository](#clone-the-repository)
   - [Database Setup](#prerequisites)
   - [Environment Variables](#environment-variables)
   - [Installing Dependencies](#installing-dependencies)
   - [Running the Application](#running-the-application)
2. [User Registration](#user-registration)
3. [User Authentication](#user-authentication)
4. [Accessing Secure Endpoint](#accessing-secure-endpoint)
5. [Rate Limiting](#rate-limiting)
6. [Error Handling](#error-handling)

## Getting Started

### Clone the Repository

```
git clone git@github.com:shoaib-31/Datify-BE-Project.git
cd Datify-BE-Project
```

### Database Setup

Make sure you have PostgreSQL installed. Create a new database and user for the application.

```
CREATE DATABASE users;
CREATE USER your_database_username WITH PASSWORD 'your_database_password';
```

Make sure to replace `your_database_username` with your username and `your_database_password` with your password.

### Environment Variables

Create a `.env` file in the root of your project and add the following:

```
PORT=port-for-server
SECRET_KEY=your-secret-key
DATABASE_NAME=your-database-name
DATABASE_USERNAME=your-database-username
DATABASE_PASSWORD=your-database-password
DB_HOST=localhost

```

### Installing Dependencies

Run the following command to install project dependencies:

```
npm install
```

### Running the Application

Execute the following command to start the application:

```
npm start
```

The server will be running on `http://localhost:{PORT}` where {PORT} will the the value of port you provided in `.env` file.

## User Registration

### Endpoint

- URL: `/auth/register`
- Method: `POST`
- Request Body:

```
{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}
```

### Response

- Success Status: `200 OK`
- Success Response:

```
{
  "userId": 1
}
```

## User Authentication

### Endpoint

- URL: `/auth/login`
- Method: `POST`
- Request Body:

```
{
  "username": "your_username",
  "password": "your_password"
}
```

### Response

- Success Status: `200 OK`
- Success Response:

```
{
  "token": "your_generated_token"
}
```

## Secure Endpoint

### Endpoint

- URL: `/secure/secure-endpoint`
- Method: `GET`
- Headers:
  - `Authorization: your_generated_token`

### Response

- Success Status: `200 OK`
- Success Response:

```
{
    "message": "Secure endpoint accessed",
    "user": {
        "id": 1,
        "username": "your_username",
        "email": "your_email",
        "password": "your_hashed_password",
        "createdAt": "creation_time",
        "updatedAt": "last_updated_time"
    }
}
```

## Rate Limiting

The secure endpoint has a rate limit of 5 requests per minute per IP address. If you exceed this limit, you will receive a 429 Too Many Requests response. This functionality has be created by using the library `express-rate-limit`.

## Error Handling

- 400 Bad Request: Invalid request format or missing required fields.
- 401 Unauthorized: Missing or invalid authentication token.
- 403 Forbidden: Token verification failed.
- 404 Not Found: Endpoint not found.
- 429 Too Many Requests: Exceeded rate limit.
- 500 Internal Server Error: Server-side error.
