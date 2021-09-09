import React from 'react'
import { Link } from 'react-router-dom'
const ShopHeader = () => (
    <header>
        <Link to="/">Restore</Link>
        <br />
        <Link to="/cart">
            CART
        </Link>
    </header>
)

export default ShopHeader