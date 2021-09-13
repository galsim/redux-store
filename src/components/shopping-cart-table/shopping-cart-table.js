import React from 'react'
import {connect} from 'react-redux'
import {bookRemoveFromCart,
    allBookRemoveFromCart,
    bookAddedToCart} from '../../actions'
const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
            <div className="shopping-cart-table">
                <h2>Your order</h2>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, id) => {
                                return (
                                    <ShoppingCartTableRow 
                                        key={id}
                                        id={item.id}
                                        title={item.title}
                                        count={item.count}
                                        total={item.total}
                                        onIncrease={onIncrease}
                                        onDecrease={onDecrease}
                                        onDelete={onDelete}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
                <div>Total {total}$</div>
            </div>
    )
}

const ShoppingCartTableRow = ({id, title, count, total, onDecrease, onIncrease, onDelete}) => {
    return (
        <tr>
            <td>{id + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
                <button
                    onClick={() => onDecrease(id)}
                >
                    Decrease
                </button>

                <button
                    onClick={() => onIncrease(id)}
                >
                    Increase
                </button>

                <button
                    onClick={() => onDelete(id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBookRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)