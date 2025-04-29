import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from '../../Component/CheckOutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const PaymentPage = () => {
    const stripePromise = loadStripe('pk_test_51QwRhC4Eu9TCAu4A9LbZyKZtPnOLWVNMzXuthZiOwpu8Fy4PbZU2aMtn0JQylVkL0DQ91Ctkfj13Y3LkP6CyVz7P00s7PlriHG');
  

    return (
        <div>

            <h1 className='mb-3 text-2xl'>Payment</h1>

            <Elements stripe={stripePromise}>

                <CheckoutForm></CheckoutForm>

            </Elements>
            
        </div>
    );
};

export default PaymentPage;