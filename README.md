# Lab 4: Registration, Login and JWT

**Name:** Manisha  
**Registration Number:** 252U1R6098  
**Section:** AI-ML 2B  
**Course:** Backend Development Fundamentals  


## Live Link
https://bdf-lab-04-1.onrender.com


## Objective
To implement user registration and login functionality using Express.js, SQLite, bcrypt password hashing and JSON Web Tokens (JWT).

## Technologies Used
- Node.js
- Express.js
- SQLite
- bcrypt
- jsonwebtoken
- Postman

## How to Run

1. Install Node.js.
2. Open the project folder in VS Code.
3. Install dependencies:

   `npm install`

4. Start the server:

   `npm start`

5. Open Postman and test the endpoints.

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register a new user with a hashed password |
| POST | /login | Verify user credentials and generate a JWT token |

Registration
POST   -  https://bdf-lab-04-1.onrender.com/register

Login
POST   -  https://bdf-lab-04-1.onrender.com/login

## Authentication Details

- Passwords are hashed using bcrypt.
- Duplicate usernames are rejected.
- Incorrect login credentials return HTTP 400.
- JWT tokens are generated using jwt.sign().
- Only the username is stored in the JWT payload.
- The JWT secret is stored in a constant for this lab.

## Screenshots

Add your screenshots inside the screenshots folder.

1. Successful registration: `![Register Success](screenshots/register-success.png)`
2. Duplicate registration: `![Duplicate Registration](screenshots/register-duplicate.png)`
3. Successful login: `![Login Success](screenshots/login-success.png)`
4. Wrong password: `![Wrong Password](screenshots/login-wrong-password.png)`
5. Unknown username: `![Unknown User](screenshots/login-unknown-user.png)`
6. Decoded JWT: `![JWT Decoded](screenshots/jwt-decoded.png)`
7. Database password hash: `![Database Hash](screenshots/database-hash.png)`

## Problems Faced and Solutions

1. Faced an SQLite database error because the database file was not valid. Solved it by recreating the database.
2. Faced an issue running SQLite commands in PowerShell. Solved it by opening the SQLite executable directly.
3. Verified that passwords are stored as bcrypt hashes.

## Conclusion

Successfully implemented user registration and login functionality using Express.js, SQLite, bcrypt and JWT. Tested valid and invalid credentials using Postman and verified password hashing and JWT generation.
