# Node JS login portal application
This application is a full fledged login portal connected with mongodb and the email verification and then login. If not a member then you need to register to the portal

## Requirements
You need to have mongodb installed in your system

## Dependencies
To install all the dependencies:
```
npm install
```

## To seed the db
run node seed.js

## To run the application
```
nodemon app.js
      or
  npm start
      then
  sign in as one of the users from seed.js or register a new user
    const usersData = [
    {
      name: "user1",
      password: "user1",
      email: "user1123@aol.com",
      profileImage: "noimage.jpg",
      uname: "user1",
      contact: 6465059007,
      role: "user",
    },
    {
        name: "user2",
        password: "user2",
        email: "user2@aol.com",
        profileImage: "noimage.jpg",
        uname: "user2",
        contact: 6465059007,
        role: "user",
      },
    {
      name: "admin one",
      password: "admin1",
      email: "admin@aol.com",
      profileImage: "noimage.jpg",
      uname: "admin1",
      contact: 6465059007,
      role: "admin",
    },
    {
        name: "user3",
        password: "user3",
        email: "user3@aol.com",
        profileImage: "noimage.jpg",
        uname: "user3",
        contact: 6465059007,
        role: "user",
      },
      {
        name: "admin two",
        password: "admin2",
        email: "admin@aol.com",
        profileImage: "noimage.jpg",
        uname: "admin2",
        contact: 6465059007,
        role: "admin",
      }
  ];
```

## Made by:
### Deepankur Lohiya
