const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ]
    }
}

const createItem = (book, item = {}) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item

    return {
        id,
        count: count + 1,
        title,
        total: total + book.price
    }
}

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'FETCH_BOOKS_FEILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case 'BOOK_ADDED_TO_CART':

            const bookId = action.payload
            const book = state.books.find((book) => book.id === bookId )
        
            const bookInStateIndex = state.cartItems.findIndex((book) => book.id === bookId)
            const item = state.cartItems[bookInStateIndex]

            return {
                ...state, 
                cartItems: updateCartItems(state.cartItems, createItem(book, item), bookInStateIndex)
            }

        default: 
            return state
    }
}

export default reducer