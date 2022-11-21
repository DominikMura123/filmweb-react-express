import { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import urls from '../../../helpers/urls.js'
import MoviesCart from '../../molecules/MoviesCart/MoviesCart.js';
import Menu from '../../molecules/Menu/Menu.js'
import './MoviesList.css';

function MoviesList(){
    const [moviesConstList, setMoviesConstList] = useState([]);
    const [movies, setMovies] = useState([]);
    const location = useLocation()

    useEffect(() => {
        fetchMovies();  
    }, [location.key]);

    const fetchMovies = () => {
        fetch(`${urls.movies}/movies`)
            .then(res => res.json())
            .then(data => {
                setMoviesConstList(data.movies);
                setMovies(data.movies);
            })
            
    }
    
    const handleRemoveMovies = (idToRemove) => {
        const messagesWithRemovedItem = movies.filter(movie => {
            return movie.id !== idToRemove
        })
        setMovies(messagesWithRemovedItem);
      
        fetch(`${urls.movies}/movies/${idToRemove}`, {
            method: 'DELETE'
        })
    }

    const filterMovieList = (moviesCollection, phrase) => {
        const filteredMovies =  moviesCollection.filter(movie => movie.title.toUpperCase().includes(phrase.toUpperCase()));
        setMovies(filteredMovies);
    }
    
    return(
        <div>
            <Menu
                class = "topnav"
                filterMovieList = {filterMovieList}
                fetchMovies = {fetchMovies}
                moviesConstList = {moviesConstList}
            />
            <ul className = "movieList">
                { movies.map(movie => {
                    return(
                        <ul key = { movie.id }>
                            <MoviesCart
                                movie = {movie}
                                handleRemoveMovies = {handleRemoveMovies}
                            />
                        </ul>
                    )
                })}      
            </ul>
        </div>
    )
}

export default MoviesList;