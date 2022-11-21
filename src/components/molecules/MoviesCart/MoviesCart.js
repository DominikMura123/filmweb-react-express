import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button.js";
import Label from "../../atoms/Label.js";
import './MoviesCart.css';

function MoviesCart (props) {

    const navigate = useNavigate();

    const handleEditMovie = (idMovie) =>{
        navigate(`/AddMovieForm/${idMovie}`);
    }

    return(
        <div className = "movies-cart">
            <img src = {props.movie.poster} alt = "poster"/>
            <Label class="label">
                Title: {props.movie.title}
            </Label>
            <Label 
                class = "label">
                Description: {props.movie.description}
            </Label>
            <Label class = "label">
                Year: {props.movie.year}
            </Label>

            <div className = 'btn-panel'>
                <Button 
                    class = "btn btn-cancel"
                    handleClick = {()=>{props.handleRemoveMovies(props.movie.id)}}
                >
                Delete
                </Button>
                <Button 
                    class = "btn btn-edit"
                    handleClick = {()=>{handleEditMovie(props.movie.id)}}
                >
                Edit
                </Button>
            </div>
        </div>
    )
}

export default MoviesCart;