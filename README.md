
# DevCamper API

Backend API for the Devcamper application to manage bootcamps, courses, reviews, users and authentication

## Indices

* [Authentication](#authentication)

  * [Forgot Password](#1-forgot-password)
  * [Get login user via token](#2-get-login-user-via-token)
  * [Login User](#3-login-user)
  * [Logout User](#4-logout-user)
  * [Register User](#5-register-user)
  * [Reset Password](#6-reset-password)
  * [Update password](#7-update-password)
  * [Update user details](#8-update-user-details)

* [Bootcamps](#bootcamps)

  * [Create new bootcamp](#1-create-new-bootcamp)
  * [Delete bootcamp](#2-delete-bootcamp)
  * [Get all bootcamps](#3-get-all-bootcamps)
  * [Get bootcamps by distance](#4-get-bootcamps-by-distance)
  * [Get single bootcamp](#5-get-single-bootcamp)
  * [Update bootcamp](#6-update-bootcamp)
  * [Upload Photo](#7-upload-photo)

* [Courses](#courses)

  * [Create single course](#1-create-single-course)
  * [Delete Course](#2-delete-course)
  * [Get all courses](#3-get-all-courses)
  * [Get courses for bootcamp](#4-get-courses-for-bootcamp)
  * [Get single course](#5-get-single-course)
  * [Update Course](#6-update-course)

* [Reviews](#reviews)

  * [Add review fro bootcamp](#1-add-review-fro-bootcamp)
  * [Delete Review](#2-delete-review)
  * [Get a single review](#3-get-a-single-review)
  * [Get all reviews](#4-get-all-reviews)
  * [Get reviews from bootcamp](#5-get-reviews-from-bootcamp)
  * [Update review](#6-update-review)

* [Users](#users)

  * [Create user](#1-create-user)
  * [Delete user](#2-delete-user)
  * [Get all users](#3-get-all-users)
  * [Get single user](#4-get-single-user)
  * [Update user](#5-update-user)


--------


## Authentication
Routes for user authentication including register, login, reset password, etc



### 1. Forgot Password


Generate password token and send email


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/forgotpassword
```



***Body:***

```js        
{
    "email": "darrylmangibin@gmail.com"
}
```



### 2. Get login user via token


Get current user by request user


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/me
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email": "darryl@gmail.com",
    "password": "123456"
}
```



### 3. Login User


Login User


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email": "sara@gmail.com",
    "password": "123456"
}
```



### 4. Logout User


Clear token cookie


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/auth/logout
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email": "sara@gmail.com",
    "password": "123456"
}
```



### 5. Register User


Add User to the database with encrypted password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "name": "test user",
    "email": "test@gmail.com",
    "password": "123456"
}
```



### 6. Reset Password


Reset user password using token


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://localhost:5000/api/v1/auth/resetpassword/dbdcb7804742c1ee63d58f9a730bfcb076660d9c
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "password": "123457"
}
```



### 7. Update password


Update logged in user password, send in the body currentPassword and newPassword


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatepassword
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "currentPassword": "1234567",
    "newPassword": "123456"
}
```



### 8. Update user details


Update login user name and email


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/auth/updatedetails
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "email": "darrylmangibin@gmail.com",
    "name": "Darryl Mangibin"
}
```



## Bootcamps
Bootcamps CRUD functionality



### 1. Create new bootcamp


Add new bootcamp to database. Must be authenticated nad must be publisher or admin


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "name": "ModernTech Bootcamp 2",
		"description": "ModernTech has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
		"website": "https://moderntech.com",
		"phone": "(222) 222-2222",
		"email": "enroll@moderntech.com",
		"address": "220 Pawtucket St, Lowell, MA 01854",
		"careers": ["Web Development", "UI/UX", "Mobile Development"],
		"housing": false,
		"jobAssistance": true,
		"jobGuarantee": false,
		"acceptGi": true
}
```



### 2. Delete bootcamp


Delete bootcamp from the database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5fd30363acbe751612f05ae2
```



***Body:***

```js        
{
    "name": "Darryl Mangibin",
    "email": "darryl@gmail.com",
    "password": "123456"
}
```



### 3. Get all bootcamps


Fetch all bootcamps from database. Includes pagination, filtering, etc.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/bootcamps
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "name": "Darryl Mangibin",
    "email": "darryl@gmail.com",
    "password": "123456"
}
```



### 4. Get bootcamps by distance


Get bootcamps within a radius of a specific zipcode


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/bootcamps/radius/02118/200
```



***Body:***

```js        
{
    "name": "Darryl Mangibin",
    "email": "darryl@gmail.com",
    "password": "123456"
}
```



### 5. Get single bootcamp


Get single bootcamp by ID


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788
```



***Body:***

```js        
{
    "name": "Darryl Mangibin",
    "email": "darryl@gmail.com",
    "password": "123456"
}
```



### 6. Update bootcamp


Update single bootcamp in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "housing": true
}
```



### 7. Upload Photo


Route to upload a bootcamp photo


***Endpoint:***

```bash
Method: PUT
Type: FORMDATA
URL: {{URL}}/api/v1/bootcamps/5d713a66ec8f2b88b8f830b8/photo
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| file |  |  |



## Courses
Create Read Update and Delete courses



### 1. Create single course


Create a course in database


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/courses
```



***Body:***

```js        
{
    "scholarshipAvailable": false,
    "title": "Advanced Front End Web Development 3",
    "description": "This course will provide you with all of the essentials to become a successful frontend web developer. You will learn to master HTML, CSS and front end JavaScript, along with tools like Git, VSCode and front end frameworks like Vue",
    "weeks": "8",
    "tuition": 9500,
    "minimumSkill": "beginner"
}
```



### 2. Delete Course


Delete course in the database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/courses/5d725cb9c4ded7bcb480eaa1
```



***Body:***

```js        
{
    "title": "Full Stack Web Development"
}
```



### 3. Get all courses


Get all courses in adatabase


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| select | title |  |



### 4. Get courses for bootcamp


Get the specific courses for a bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/courses
```



### 5. Get single course


Get a single course by its Id


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/courses/5d725a4a7b292f5f8ceff789
```



### 6. Update Course


Update course in database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/courses/5d725c84c4ded7bcb480eaa0
```



***Body:***

```js        
{
    "title": "Full Stack Web Development"
}
```



## Reviews
Manage course reviews



### 1. Add review fro bootcamp


Insert review for a specific bootcamp


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json | JSON type |



***Body:***

```js        
{
    "title": "Nice bootcamp",
    "text": "I learned a lot",
    "rating": 8
}
```



### 2. Delete Review


Delete review from the database


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be027
```



***Body:***

```js        
{
    "title": "TEST"
}
```



### 3. Get a single review


Fetch a review from the database and populate bootcamp with name and description


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be027
```



### 4. Get all reviews


Get all reviews from the database and populate with bootcamp name and description


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/reviews
```



### 5. Get reviews from bootcamp


Fetch the reviews for a specific bootcamp


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/bootcamps/5d725a1b7b292f5f8ceff788/reviews
```



### 6. Update review


Update review from the database


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/reviews/5d7a514b5d2c12c7449be027
```



***Body:***

```js        
{
    "title": "TEST"
}
```



## Users
CRUD functionality for users only available to admins



### 1. Create user


Create a user to the database (admin)


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/api/v1/users/
```



***Body:***

```js        
{
    "name": "Test user",
    "email": "test@gmail.com",
    "password": "123456"
}
```



### 2. Delete user


Delete a user from the database (admin)


***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: {{URL}}/api/v1/users/5fd734e39b21641fe8d50f5f
```



***Body:***

```js        
{
    "name": "Tests user",
    "email": "tesst@gmail.com"
}
```



### 3. Get all users


Get all users (admin)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users
```



### 4. Get single user


Get single user (admin)


***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/api/v1/users/5c8a1d5b0190b214360dc035
```



### 5. Update user


Update user to the database (admin)


***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: {{URL}}/api/v1/users/5fd734e39b21641fe8d50f5f
```



***Body:***

```js        
{
    "name": "Tests user",
    "email": "tesst@gmail.com"
}
```



---
[Back to top](#devcamper-api)
> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2020-12-15 11:07:11 by [docgen](https://github.com/thedevsaddam/docgen)
