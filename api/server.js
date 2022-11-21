import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';

import { getMovies, 
         saveMovie, 
         removeMovie,
         getMovie,
         updateMovie } from './controllers/movies.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Szukajcie a znajdziecie');
})

app.get('/movies', (req, res) => {
    getMovies()
    .then(data =>{
        res.status(200).send(data);
    }) 
})

app.get('/movies/:movieId', (req, res) => {
    getMovie(req.params.movieId)
      .then(message => {
        res.status(200).send(message);
      })
  })

app.post('/movies', (req, res) => {
    saveMovie(req.body)
        .then(() => {
        res.status(201).send('Created, OK!');
    })  
})

app.delete('/movies/:movieId', (req, res) => {
    removeMovie(req.params.movieId)
      .then(() => {
        console.log(req.params.movieId)
        res.status(200).send('OK!');
      })
})

app.put('/movies', (req, res) => {
  if(!req.body.id) {
    return res.status(400).send('You need to provide ID');
  }
  console.log(req.body)
  updateMovie(req.body)
    .then(() => {
      res.status(200).send('OK!');
    })
})  

app.listen(3001, () => {
    console.log('server is running on port 3001')
})