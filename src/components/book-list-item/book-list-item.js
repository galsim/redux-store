import React, { Fragment } from 'react'

export default function BookListItem ({ book, onAddedToCart }) {
    const {title, author, price} = book

    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
            <span>{price}</span>
            <button
                onClick={onAddedToCart}
            >
                Add to cart
            </button>
        </Fragment>
    )
}