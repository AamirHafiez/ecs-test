import React, { Component } from 'react'
import Book from './Book'

export class BooksContainer extends Component {
    render() {

        const {
            data
        } = this.props;

        return (
            <div>
                <div className="col-11 mt-5 mx-auto d-flex flex-column flex-xl-row flex-wrap">
                    {
                        data.map((book, index) => {
                            return (
                                <Book
                                    book={book}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default BooksContainer
