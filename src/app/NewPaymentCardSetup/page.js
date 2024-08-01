'use client';
import { loadStripe } from '@stripe/stripe-js';


import CartPage from './../Cart/page'; // Correct casing to match file name



const NewPaymentCardSetup = () => {
  return (
    <div className="max-w-screen-lg mx-auto  pl-4 md:pl-8">
     
        
        
        <div className="p-4">
          <CartPage/>
        </div>
     
    </div>
  );
};

export default NewPaymentCardSetup;
