import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const fsp = fs.promises;

const MOVIES_JSON_PATH = 'api/db/data.json'

const getJSONFile = (fileName) => {
  return fsp.readFile(fileName, 'utf8')
    .then(data => JSON.parse(data));
}

const saveToJSONFile = (fileName, objectToSave) => {
  return fsp.writeFile(fileName, JSON.stringify(objectToSave), 'utf8');
}

export const getAll = () => {
    return getJSONFile(MOVIES_JSON_PATH);
}

export const get = (id) => {
  return getJSONFile(MOVIES_JSON_PATH)
    .then(data => {
      return data.movies
        .find(movie => movie.id === id)
    })
}
  
export const save = (objectToSave) => {
  return getJSONFile(MOVIES_JSON_PATH)
  .then(data => {
    objectToSave.id = uuidv4();
    data.movies.push(objectToSave);

    return saveToJSONFile(MOVIES_JSON_PATH, data)
  })
}

export const remove = (id) => {
  return getJSONFile(MOVIES_JSON_PATH)
    .then(data => {
      const filteredElements = data.movies.filter(movie => {
        return movie.id !== id
      })

      const structureToSave = {
        movies: filteredElements
      }

      return saveToJSONFile(MOVIES_JSON_PATH, structureToSave)
    })
}

export const update = objectToUpdate => {
  return getJSONFile(MOVIES_JSON_PATH)
    .then(data => {
      const foundElementIndex = data.movies.findIndex(movie => movie.id === objectToUpdate.id)

      if(objectToUpdate.title) {
        data.movies[foundElementIndex].title = objectToUpdate.title
      }
      if(objectToUpdate.description) {
        data.movies[foundElementIndex].description = objectToUpdate.description
      }
      if(objectToUpdate.year) {
        data.movies[foundElementIndex].year = objectToUpdate.year
      }
      if(objectToUpdate.poster) {
        data.movies[foundElementIndex].poster = objectToUpdate.poster
      }

      return saveToJSONFile(MOVIES_JSON_PATH, data)
    })
}