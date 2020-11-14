import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart);

    const total = cart.reduce((sum, product) => sum + product.price, 0);
    console.log(total);



    return (
        <div className="cart-container">
            <h3>Order Summery</h3>
            <p>Item number:{cart.length}</p>
            <p>Price:{total}</p>
        </div>
    );
};

export default Cart;