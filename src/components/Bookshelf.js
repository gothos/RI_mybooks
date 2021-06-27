import React from "react";

import {isEmpty} from 'lodash'

import Book from "./Book";

class Bookshelf extends React.PureComponent {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {!isEmpty(this.props.books) && Object.values(this.props.books).map((book) => (
                                <li key={book.id}>
                                    <Book
                                        key={book.id}
                                        book={book}
                                    />
                                </li>
                            )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf