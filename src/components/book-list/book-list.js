import React, { Component } from 'react'
import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import {connect} from 'react-redux'
import {fetchBooks} from '../../actions'

import { withBookstoreService} from '../hoc'

import { compose } from '../../utils'

class BookListContainer extends Component {

    componentDidMount () {
        this.props.fetchBooks()
    }

    render () {
        const { books, loading, error } = this.props

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <BookList books={books} />
        )
    }
}

const BookList = ({books}) => {
    return (
        <ul>
            {books
                .map(book => (
                    <li key={book.id}>
                        <BookListItem book={book} />
                    </li>
                    )
                )
            }
        </ul>
    )
}

const mapStateToProps = ({books, loading, error}) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService)
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)

