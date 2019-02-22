######  For React Proje;########

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
you have to download 
npm install react-modal

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

######  For Java Proje;########

### Post- if user is new, it will create new account, else it will post messages 

POST http://localhost:8080/social-api/message
Accept: */*
Cache-Control: no-cache
Content-Type: application/json

request body:
{"userName": "Bilgin","content": "Hello! I'm Bilgin"}

### Wall for Alaz, Alaz can see only his messages /message/{userName}

GET http://localhost:8080/social-api/message/Alaz
Accept: */*
Cache-Control: no-cache

example response:
[
    {
        "userName": "Alaz",
        "dateTime": "2019-02-22T01:22:10.126",
        "content": "korkma sonmez bu şafaklarda ey nazlı hilal"
    },
    {
        "userName": "Alaz",
        "dateTime": "2019-02-22T01:21:55.99",
        "content": "test message"
    }
 ]

### Alaz follows Mustafa /user/{userName}/{following}

GET http://localhost:8080/social-api/user/Alaz/Mustafa
Accept: */*
Cache-Control: no-cache

no-response;
  
### Time line for Mustafa, mustafa can see all entiries that is from his following /timeline/{userName}
GET http://localhost:8080/social-api/timeline/Mustafa
Accept: */*
Cache-Control: no-cache

example response:
[
    {
        "userName": "Alaz",
        "dateTime": "2019-02-22T01:22:10.126",
        "content": "insanın yere bakanından suyun durgun akanından kork"
    },
    {
        "userName": "Bilge",
        "dateTime": "2019-02-22T01:21:55.99",
        "content": "Code yazdın dıye mutlu sanıyorlar "
    }
 ]

<> 2019-02-19T092404.200.json


