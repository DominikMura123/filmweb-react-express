import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button.js'
import Label from '../../atoms/Label.js';
import Input from '../../atoms/Input.js';
import './Menu.css';

function Menu (props) {
    const [searchInputValue, setSearchInputValue] = useState('')
    
    const handleSearchInputChange = (event) =>{
        setSearchInputValue(event.target.value)
        if (event.target.value.length >= 3){
            props.filterMovieList(props.moviesConstList, event.target.value);
        }
        else if(event.target.value.length === 0){
            props.fetchMovies();
        }
    }

    return(
        <div className = {props.class}>
            <Link to = "/AddMovieForm">
                <Button
                    class = "btn-add_movie">
                    AddMovieForm
                </Button>
            </Link>
            <Label>
                Search   
                <Input 
                    class = "input-filter"
                    value = {searchInputValue}
                    handleOnChange = {handleSearchInputChange}
                >
                </Input>
            </Label>
        </div>
    )
}

export default Menu