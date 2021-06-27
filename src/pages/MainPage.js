import React from "react";
import Bookshelf from "../components/Bookshelf";
import {connect} from 'react-redux'
import {compose} from "recompose";
import {booksListRequest} from "../models/books/actions"
import {Link} from "react-router-dom";
import withMyBooks from "../components/withMyBooks";
import {isEmpty} from "lodash";

const BOOKSHELF_TITLES = {currentlyReading: 'Currently Reading', wantToRead: 'Want to Read', read: 'Read'}

class _MainPage extends React.PureComponent {

    render() {
        const books = this.props.books;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {!isEmpty(books) && Object.keys(BOOKSHELF_TITLES).map((key, index) => (
                            <Bookshelf key={key} title={BOOKSHELF_TITLES[key]} books={Object.values(books).filter((book) => book.shelf === key)} />
                        ))}
                    </div>
                </div>
                <div className="open-search">

                    <Link
                        to={{
                            pathname: "/search"
                        }}
                    >
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

const MainPage = compose(
    connect(
        reduxState => ({
            books: reduxState.books.books,
        }),
        {booksListRequest}
    ),
    withMyBooks(),
)(_MainPage)


export default MainPage

