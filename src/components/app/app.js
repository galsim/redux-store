import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages'
import ShopHeader from '../shop-header'
import ShoppingCartTable from '../shopping-cart-table'

const App = () => {
    return (
        <div>
        <ShopHeader />
        <Switch>
            <Route 
                path="/"
                component={HomePage}
                exact
            />

            <Route 
                path="/cart"
                component={CartPage}
            />
        </Switch>
        <ShoppingCartTable />
        </div>
    )
}

export default App