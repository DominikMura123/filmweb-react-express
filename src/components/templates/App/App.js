import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesList from '../../sections/MoviesList/MoviesList.js'
import AddMovieForm from '../../sections/AddMovieForm/AddMovieForm.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "*" element = {<MoviesList/>} /> 
          <Route path = "/AddMovieForm" element = {<AddMovieForm/>} /> 
          <Route path = "/AddMovieForm/:id" element = {<AddMovieForm/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
