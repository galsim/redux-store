import React, { Fragment } from 'react'

export default function BookListItem ({ book }) {
    const {title, author} = book

    return (
        <Fragment>
            <span>{title}</span>
            <span>{author}</span>
        </Fragment>
    )
}