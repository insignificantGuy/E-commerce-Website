import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>
                <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className='total'>
            <span>TOTAL: ${totalPrice}</span>
        </div>
        <div className='test-warning'>
            *Please use the following test creadit card for payments*
            <br/>
             Card Number: 4242 4242 4242 4242
             <br/> 
             Expiry Date: 01/20
             <br/> 
             CVV: 123
             <br/> 
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);