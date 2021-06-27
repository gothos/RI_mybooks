import {
    BOOK_SEARCH_SUCCESS,
    BOOKS_LIST_SUCCESS,
    BOOK_SEARCH_REQUEST,
    BOOK_SEARCH_ERROR
} from './constants'

const initialState = {
    books: [],
    searchedBooks: [],
    query: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_LIST_SUCCESS:
            return {
                ...state,
                books: action.books,
            }
        case BOOK_SEARCH_SUCCESS:
            return {
                ...state,
                searchedBooks: action.searchedBooks.map((searchedBook) => {
                    state.books.forEach((book)=> {
                        if (book.id === searchedBook.id) {
                            searchedBook.shelf = book.shelf
                        }

                    })
                    if (!searchedBook.shelf) searchedBook.shelf = "none"
                    return searchedBook;
                })
            }
        case BOOK_SEARCH_ERROR:
            return {
                ...state,
                searchedBooks: [],
            }

        case BOOK_SEARCH_REQUEST:
            return {
                ...state,
                query: action.query,
            }
        default:
            return state
    }
}

export default reducer