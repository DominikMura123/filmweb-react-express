import { getAll, 
         save, 
         remove, 
         get, 
         update} from '../models/movies.js' 

export const getMovies = () => {
    return getAll()
}

export const saveMovie = (movie) => {
    return save(movie)
}

export const removeMovie = (idToRemove) => {
    
    return remove(idToRemove)
}

export const getMovie = id => {
    return get(id)
      .then(foundMovie => {
        return foundMovie ? foundMovie : {}
      })
}

export const updateMovie = (movieToUpdate) => {
    return get(movieToUpdate.id)
      .then((movie) => {
        return movie ? update(movieToUpdate) : save(movieToUpdate)
      })
}