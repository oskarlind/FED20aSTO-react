import React from 'react'
import IngredientList from './IngredientList'

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div id="my-cart">
            <h2>My Cart</h2>
            {this.props.products.map(IngredientList)}
        </div>
        )
    }
}

export default Cart;