import {
    BOOKS_LIST_REQUEST,
    BOOKS_LIST_ERROR,
    BOOKS_LIST_SUCCESS,
    BOOK_UPDATE_REQUEST,
    BOOK_UPDATE_ERROR, BOOK_UPDATE_SUCCESS, BOOK_SEARCH_SUCCESS, BOOK_SEARCH_REQUEST, BOOK_SEARCH_ERROR
} from "./constants";

export const booksListRequest = () => ({
    type: BOOKS_LIST_REQUEST,
})

export const booksListError = () => ({
    type: BOOKS_LIST_ERROR,
})

export const booksListSuccess = data => ({
    type: BOOKS_LIST_SUCCESS,
    books: data,
})

export const bookUpdateRequest = (bookId, shelf) => ({
    type: BOOK_UPDATE_REQUEST,
    bookId,
    shelf,
})

export const bookUpdateError = () => ({
    type: BOOK_UPDATE_ERROR,
})

export const bookUpdateSuccess = () => ({
    type: BOOK_UPDATE_SUCCESS,
})

export const bookSearchRequest = query => ({
    type: BOOK_SEARCH_REQUEST,
    query
})

export const bookSearchError = () => ({
    type: BOOK_SEARCH_ERROR,
})

export const bookSearchSuccess = (data) => ({
    type: BOOK_SEARCH_SUCCESS,
    searchedBooks:data,
})