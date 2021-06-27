import {call, put, takeLatest, select} from 'redux-saga/effects'

import {
    BOOK_SEARCH_REQUEST,
    BOOK_UPDATE_REQUEST,
    BOOKS_LIST_REQUEST
} from './constants'
import {
    bookSearchError, bookSearchRequest,
    bookSearchSuccess,
    booksListError, booksListRequest,
    booksListSuccess, bookUpdateError, bookUpdateSuccess
} from './actions'

import axios from 'axios/index'


let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

const api = "https://reactnd-books-api.udacity.com"

export const getBooksStore = (state) => state.books

export function* doBooksListRequest() {
    try {
        const response = yield call([axios, 'get'], `${api}/books`, {headers})
        if (response.status === 200) {
            yield put(booksListSuccess(response.data.books))
            const store = yield select(getBooksStore)
            if (!!store.query) {
                yield put(bookSearchRequest(store.query))
            }
        }
    } catch (error) {
        yield put(booksListError(error))
    }
}

export function* watchBooksListRequest() {
    yield takeLatest(BOOKS_LIST_REQUEST, doBooksListRequest)
}

export function* doBookUpdateRequest(action) {
    try {
        const response = yield call([axios, 'put'], `${api}/books/${action.bookId}`, {
            shelf: action.shelf,
        }, {headers})
        if (response.status === 200) {
            yield put(bookUpdateSuccess())
            yield put(booksListRequest())
            const store = yield select(getBooksStore)
            if (!!store.query) {
                yield put(bookSearchRequest(store.query))
            }
        }
    } catch (error) {
        yield put(bookUpdateError(error))
    }
}

export function* watchBookUpdateRequest() {
    yield takeLatest(BOOK_UPDATE_REQUEST, doBookUpdateRequest)
}


export function* doBookSearchRequest(action) {
    try {
        const response = yield call([axios, 'post'], `${api}/search`, {
            query: action.query,
        }, {headers})
        if (response.status === 200) {
            yield put(bookSearchSuccess(response.data.books))
        }
    } catch (error) {
        yield put(bookSearchError(error))
    }
}

export function* watchBookSearchRequest() {
    yield takeLatest(BOOK_SEARCH_REQUEST, doBookSearchRequest)
}