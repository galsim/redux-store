const initialState = {
    books: [
        {
            id: 9,
            title: 'Маленький принц',
            author: 'Антуа де Сент-Экзюпери'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T.N.'
        }
    ]
}

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default: 
            return state
    }
}

export default reducer