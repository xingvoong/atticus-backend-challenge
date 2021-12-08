
# atticus-backend-challenge
a repo for atticus backend challenge

## Author
- [@xingvoong](https://github.com/xingvoong)


## Project github repo link:
https://github.com/xingvoong/atticus-backend-challenge



## Assumptions
Some of the assumptions that I make:
- To play a song: just get the data of that song from the database, with the file_path which would play a song.  I make this as a `GET` request.
- when insert: the ranking param is optional.
- To update a song: update the ranking of a given name, this is a patch request.
- when delete: there is a song to delete.
## API Documentation

### Get songs
* GET `http://localhost:3000/songs/songname`
* retrives a list of songs with the given name
Query Parameters:
| Parameter   | Type        |Description|
| ----------- | ----------- |-----------|
| songname  | string    |Specifies the name for which to retrieve songs.|

Success Status Code: `200 OK`

Return: a list
```
[{"id":2,"name":"nangtho","genre":"R&B","artist":"hoang_dung","length":200,"file_path":"nangtho_file_path","ranking":3}]
```
### Create a song
- POST `http://localhost:3000/songs/create`
- create a song with given params
Body Parameters:

| Parameter   | Type        | Description|
| ----------- | ----------- | -----------|
| name        | text        | name of a song|
| genre        | an ENUM with valid values of “Rock”, “Pop”, “Rap”, and “R&B”        | genre of the song |
| artist       | text        | name of the artist|
| length  | integer     | length of the song in second|
| file_path  | text     | Song mp3 file path|
| ranking (optional)  |   integer   | an unsigned integer with valid values from 0 to 5|

Success Status Code: `200 OK`


### Delete a song
- DELETE `http://localhost:3000/songs/delete/songname`
- delete a song with a given name
| Parameter   | Type        | Description|
| ----------- | ----------- | -----------|
| name        | text        | name of a song|

Success Status Code: `200 OK`

### Update a song
- PATCH `http://localhost:3000/songs/update`
- update the ranking of a song with the given name and ranking
| Parameter   | Type        | Description|
| ----------- | ----------- | -----------|
| name        | text        | name of a song|
| ranking       | integer from 1-5        | ranking of the song|

Success Status Code: `200 OK`


## Run Locally
_Check required tech is installed (see below)._



Clone the project

```bash
  git clone https://github.com/xingvoong/atticus-backend-challenge
```

Go to the project directory

```bash
  cd atticus-backend-challenge
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```

Start webpack

```bash
  npm run start
```
Now the app is ready at http://localhost:3000/

## Room for improvement
Given more time I would:
- fix my local installation for linter.  I could not apply linter to format the style of this submission due to some installation bugs.
- improve my prior assumption with more logics
- catch more corner cases.
## Required tech
Server: Node.js, Express

Database: Postgresql