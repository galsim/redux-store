const bookRequested = () => ({
    type: 'FETCH_BOOKS_REQUEST'
})

const booksLoaded = (newBooks) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
})

const bookError = (error) => ({
    type: 'FETCH_BOOKS_FEILURE',
    payload: error
})

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(bookRequested())
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(bookError(error)))
}

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export {
    fetchBooks,
    bookAddedToCart
}