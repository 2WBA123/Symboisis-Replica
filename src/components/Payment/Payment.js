import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { PUB_KEY } from './Keys';
import CheckOutForm from './CheckOutForm';
import { useLocation } from 'react-router';

const stripePromise = loadStripe(PUB_KEY);
export default function Payment() {
    const {state} = useLocation();
    const product =state.data;
    const Tamount = state.tprice;
    console.log(state);
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm product={product} TAmount={Tamount} />
            </Elements>
        </div>
    )
}
