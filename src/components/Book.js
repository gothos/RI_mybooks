import React from 'react'
import {compose} from "recompose";
import {connect} from "react-redux";
import {bookUpdateRequest} from "../models/books/actions";

const BOOKSHELF_TITLES = {currentlyReading: 'Currently Reading', wantToRead: 'Want to Read', read: 'Read', none: "None"}

class _Book extends React.PureComponent {

    render() {
        return (
            <div className="book" key={this.props.book.id}>
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                this.props.book.imageLinks ? `url("${this.props.book.imageLinks.thumbnail}")`: "none",
                        }}
                    />
                    <div className="book-shelf-changer">
                        <select
                            onChange={(e) => {
                                this.props.bookUpdateRequest(this.props.book.id, e.target.value)
                            }}
                            defaultValue={this.props.book.shelf}
                        >
                            <option value="move" disabled>
                                Move to...
                            </option>
                            {Object.keys(BOOKSHELF_TITLES).map((key,index) => (
                                <option key={key} value={key} disabled={key === this.props.book.shelf}>{BOOKSHELF_TITLES[key]}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {
                    this.props.book.authors && this.props.book.authors.length > 0 && (
                        <div className="book-authors">{this.props.book.authors[0]}</div>
                    )
                }
            </div>
        )
    }
}

const Book = compose(
    connect(
        reduxState => ({
        }),
        {bookUpdateRequest}
    ),
)(_Book)


export default Book