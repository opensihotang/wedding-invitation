# Rent Room API Documentation

## Endpoints :

List of available endpoints : 
- `POST/register`
- `POST/login`
- `POST/google-login`

- `POST/couple`
- `POST/gallery`
- `POST/info`
- `POST/story`
- `GET/couple`
- `GET/couple/:id`

- `POST/guest`
- `GET/guest`
- `POST/generate-midtrans-token`

## 1. POST/register
request :
- body :

```json
{
    "username" : "string",
    "email" : "string",
    "password" : "string"
}
```

_Response ( 201 - Created )_

```json
{
    "id": "string",
    "username": "string",
    "email": "string"
    }
```

_Response ( 400 - Bad Request )_

```json
{
    "message" : "Username is Required"
}
OR
{
    "message" : "Email is Required"
}
OR
{
    "message" : "Insert Correct Email"
}
OR 
{
    "message" : "Password is Required"
}
OR
{
    "message" : "Password minimal 5 characters"
}
```

## 2. POST/login
Description : login for registered user

Request :
```json
{
    "email" : "string",
    "password" : "string"
}

```
_Response ( 200 - OK )_
```json
{
    "acces_token" : "string"
}
```
_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```



## 3. POST/couple
request :
- body :

```json
{
    "namaPria" : "string", 
    "namaWanita" : "string",
    "imageProfilPria" : "string",
    "imageProfilWanita" : "string",
    "infoPria" : "string",
    "infoWanita" : "string"
}
```

_Response (201 - Created)_

```json
{
    "namaPria" : "string", 
    "namaWanita" : "string",
    "imageProfilPria" : "string",
    "imageProfilWanita" : "string",
    "infoPria" : "string",
    "infoWanita" : "string"
    }
```

## 4. POST/gallery
request :
- body :

```json
{
    "CoupleId" : "integer", 
    "imageUrl" : "string"
}
```

_Response (201 - Created)_

```json
{
    "CoupleId" : "integer", 
    "imageUrl" : "string"
    }
```

## 5. POST/info
request :
- body :

```json
{
    "CoupleId" : "string", 
    "alamat" : "string",
    "jadwalAkad" : "string",
    "jadwalResepsi" : "string"
}
```

_Response (201 - Created)_

```json
{
    "CoupleId" : "string", 
    "alamat" : "string",
    "jadwalAkad" : "string",
    "jadwalResepsi" : "string"
    }
```

## 6. POST/story
request :
- body :

```json
{
    "CoupleId" : "string", 
    "title" : "string",
    "description" : "text"
}
```

_Response (201 - Created)_

```json
{
    "CoupleId" : "string", 
    "title" : "string",
    "description" : "text"
    }
```

## 7. GET/couple
Description : Get all couple

_Response( 200 - OK)_

```json
[
    {
    "namaPria" : "string", 
    "namaWanita" : "string",
    "imageProfilPria" : "string",
    "imageProfilWanita" : "string",
    "infoPria" : "string",
    "infoWanita" : "string"
    }
]
```

## 8. GET/couple/:id
Description : Get spesific couple

_Response( 200 - OK)_

```json
[
    {
    "namaPria" : "string", 
    "namaWanita" : "string",
    "imageProfilPria" : "string",
    "imageProfilWanita" : "string",
    "infoPria" : "string",
    "infoWanita" : "string"
    }
]
```


## 9. POST/guest
request :
- body :

```json
{
    "name" : "string", 
    "totalGuest" : "integer",
    "status" : "boolean"
}
```

_Response (201 - Created)_

```json
{
    "name" : "string", 
    "totalGuest" : "integer",
    "status" : "boolean"
}
```

## 10. GET/guest
Description : Get guest list

_Response( 200 - OK)_

```json
[
    {
    "name" : "string", 
    "totalGuest" : "integer",
    "status" : "boolean"
    }
]
```

## 11.POST/generate-midtrans-token
_Response(201 - CREATED)
 
```json
[
    {
    "midtransToken" : "string"
    }
]
```
_Response (400 - MidtransError)_

```json
{
  "message": "transaction_details.gross_amount is not a number"
}
```




## Global Error

Response (500 - Internal Server Error)

```js
{
    "message" : "Internal Server Error"
}
```




