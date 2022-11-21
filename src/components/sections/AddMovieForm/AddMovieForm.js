import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import urls from '../../../helpers/urls.js'
import Button from "../../atoms/Button.js";
import AddMoviesFormField from "../../molecules/AddMoviesFormField/AddMoviesFormField.js";
import './AddMovieForm.css';

function AddMovieForm (){
    const [titleInputValue, setTitleInputValue] = useState('');
    const [descriptionInputValue, setDescriptionInputValue] = useState('');
    const [yearInputValue, setYearInputValue] = useState('');
    const [posterInputValue, setPosterInputValue] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if (id){
            fetch(`${urls.movies}/movies/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTitleInputValue(data.title);
                    setDescriptionInputValue(data.description);
                    setYearInputValue(data.year);
                    setPosterInputValue(data.poster);
                })
        }   
    }, [id])

    const handleEdit = () => {
        const editedMovie = {
            id: id,
            title: titleInputValue,
            description: descriptionInputValue,
            year: yearInputValue,
            poster: posterInputValue         
        }
        fetch(`${urls.movies}/movies`, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(editedMovie)
        })

        setTitleInputValue('');
        setDescriptionInputValue('');
        setYearInputValue('');
        setPosterInputValue('');
    }

    const handleSubmit = () => {
        const newMovie = {
            title: titleInputValue,
            description: descriptionInputValue,
            year: yearInputValue,
            poster: posterInputValue
        }
        fetch(`${urls.movies}/movies`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
        navigate('/');
    }

    const handleTitleInputChange = event => {
        setTitleInputValue(event.target.value);
    }

    const handleDescriptionInputChange = event => {
        setDescriptionInputValue(event.target.value);
    }

    const handleYearInputChange = event => {
        setYearInputValue(event.target.value);
    }

    const handlePosterInputChange = event => {
        setPosterInputValue(event.target.value);
    }

    return(
        <div className = "form-popup">
            <Link to = "/">
                <Button
                    class = 'btn btn-back'
                >
                    Back
                </Button>
            </Link>
            <form  
                className = "form-container"
                onSubmit = {id ? handleEdit : handleSubmit}
            >
                <AddMoviesFormField
                    class = "form-field"
                    labelText = 'Title'
                    inputValue = {titleInputValue}
                    handleOnChange = {handleTitleInputChange}
                >
                </AddMoviesFormField>
                <AddMoviesFormField
                    class = "form-field"
                    labelText = 'Description'
                    inputValue = {descriptionInputValue}
                    handleOnChange = {handleDescriptionInputChange}
                >
                </AddMoviesFormField>
                <AddMoviesFormField
                    class = "form-field"
                    labelText = 'Year'
                    inputValue = {yearInputValue}
                    handleOnChange = {handleYearInputChange}
                >
                </AddMoviesFormField>
                <AddMoviesFormField
                    class = "form-field"
                    labelText = 'Poster'
                    inputValue = {posterInputValue}
                    handleOnChange = {handlePosterInputChange}
                >
                </AddMoviesFormField>

                <Button 
                    class = 'btn btn-add'
                    type = "submit">
                Save
                </Button>               
            </form>
        </div>
    )
}

export default AddMovieForm