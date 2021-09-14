import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import {connect} from 'react-redux'
import {fetchBooks, bookAddedToCart} from '../../actions'

import { withBookstoreService} from '../hoc'

import { compose } from '../../utils'

class BookListContainer extends Component {

    componentDidMount () {
        this.props.fetchBooks()
    }

    render () {
        const { books, loading, error, onAddedToCart } = this.props

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <BookList books={books} onAddedToCart={onAddedToCart} />
        )
    }
}

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul>
            {books
                .map(book => (
                    <li key={book.id}>
                        <BookListItem 
                        book={book} 
                        onAddedToCart={() => onAddedToCart(book.id)} />
                    </li>
                    )
                )
            }
        </ul>
    )
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)

