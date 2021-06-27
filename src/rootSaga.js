import {all} from 'redux-saga/effects'
import {watchBooksListRequest, watchBookUpdateRequest, watchBookSearchRequest} from "./models/books/sagas";


export default function* rootSaga() {
    yield all([
        watchBooksListRequest(),
        watchBookUpdateRequest(),
        watchBookSearchRequest()
    ])
}
