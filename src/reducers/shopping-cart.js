const updateShoppingCart = (state, action) => {
    if (!state) {
        return {
            cartItems: [],
            orderTotal: 220
        }
    }
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)

        case 'BOOK_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1)

        case 'ALL_BOOK_REMOVE_FROM_CART':
            const {shoppingCart: {cartItems}} = state
            const item  = cartItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        default:
            return state.shoppingCart
    }
}

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

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

const createItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item

    return {
        id,
        count: count + quantity,
        title,
        total: total + quantity * book.price
    }
}

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books}, shoppingCart: {cartItems}} = state

    const book = books.find((book) => book.id === bookId )
    const bookInStateIndex = cartItems.findIndex((book) => book.id === bookId)
    const item = cartItems[bookInStateIndex]
    const newItem = createItem(book, item, quantity)

    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, bookInStateIndex)
    }
}

export default updateShoppingCart