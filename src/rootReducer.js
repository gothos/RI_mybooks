import {combineReducers} from 'redux'
import booksReducer from './models/books/reducer'


export const rootReducer = combineReducers({
    books: booksReducer,
})