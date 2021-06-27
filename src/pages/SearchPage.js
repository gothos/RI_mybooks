import React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {bookSearchRequest, booksListRequest} from "../models/books/actions";
import {isEmpty} from "lodash";
import Book from "../components/Book";
import withMyBooks from "../components/withMyBooks";

class _SearchPage extends React.PureComponent {

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button
                        className="close-search"
                        onClick={() => this.props.history.push("/")}>
                        Close
                    </button>
                    <div className="search-books-input-wrapper">
                        <input value={this.props.query} onChange={(e)=> this.props.bookSearchRequest(e.target.value.toLowerCase())} type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid" >
                        {isEmpty(this.props.searchedBooks) || this.props.searchedBooks.error ? (
                            <div>
                                No results
                            </div>
                        ) : Object.values(this.props.searchedBooks).map((book) => (
                            <li key={book.id}>
                                <Book key={book.id} book={book}
                                />
                            </li>
                        ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

const SearchPage = compose(
    connect(
        reduxState => ({
            searchedBooks: reduxState.books.searchedBooks,
            query: reduxState.books.query,
        }),
        {bookSearchRequest, booksListRequest}
    ),
    withMyBooks(),
)(_SearchPage)


export default SearchPage;