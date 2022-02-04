import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51KPNpvSIoS6a7ZKDVkho2aWs4RyeHkvBteRvZ164Jyas6BU3nTt5OSCOGaVT7HVbXTM42Nyxu7OV3LPwbeNCayjH00Cdp7n5mh';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successfule');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name = 'MyClothingStore'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;