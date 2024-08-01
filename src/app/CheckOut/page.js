"use client";

import React, { useState, useMemo } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../Redux/Action/actions'; // Update with the actual path

const stripePromise = loadStripe('pk_test_51OU7K2GzmgnXQM1ZzsvV9RUUBFbRKzol5julcMWC8zV8ckijoKAHbr1kBB2cwqbJuKN4kkxdomxe1fhpbNjkLDNm00DHUrBE3P');

const CheckOut = () => {
    const router = useRouter();
    const { cartItems } = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();
  
    const handleClearCart = () => {
        dispatch(clearCart());
    };
  
    const handleCheckout = () => {
        router.push('/CheckOut'); // Adjust path if necessary
    };
  
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        addressLine1: '',
        city: '',
        postalCode: '',
        country: '',
        phone: '',
    });

    const totalPrice = useMemo(() => {
        return cartItems?.reduce((acc, item) => acc + parseFloat(item?.price || 0), 0).toFixed(2);
    }, [cartItems]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);

        try {
            await Yup.object().shape({
                name: Yup.string().required('Name is required'),
                email: Yup.string().email('Invalid email').required('Email is required'),
                addressLine1: Yup.string().required('Address Line 1 is required'),
                city: Yup.string().required('City is required'),
                postalCode: Yup.string().required('Postal Code is required'),
                country: Yup.string().required('Country is required'),
                phone: Yup.string().required('Phone is required'),
            }).validate(formData, { abortEarly: false });

            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
                billing_details: {
                    name: formData.name,
                    email: formData.email,
                    address: {
                        line1: formData.addressLine1,
                        city: formData.city,
                        postal_code: formData.postalCode,
                        country: formData.country,
                    },
                    phone: formData.phone,
                },
            });

            if (error) {
                throw new Error(error.message);
            }

            const response = await axios.post(`https://ottomonukbackup1.vercel.app/checkout`, {
                paymentMethodId: paymentMethod.id,
                amount: totalPrice * 100, // Convert amount to cents
                currency: 'usd', // specify the currency
                billingDetails: formData,
                email: formData.email,
            });

            alert('Payment processed successfully');
            router.push('/PaymentMethod');
        } catch (error) {
            setError(error.message);
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center my-4 p-4">
            <form onSubmit={handleSubmit} className="max-w-2xl w-full p-6 border-t border-t-[#00ACBB] lg:mr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-500 text-sm mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border text-sm py-2 border-[#00ACBB] rounded-md"
                            placeholder='User Name'
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-500 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email '
                            className="w-full p-2 border text-sm py-2 border-[#00ACBB] rounded-md"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="addressLine1" className="block text-gray-500 text-sm mb-2">Address Line 1</label>
                        <input
                            type="text"
                            id="addressLine1"
                            name="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleChange}
                            placeholder='Address Line 1'
                            className="w-full p-2 border text-sm py-2 border-[#00ACBB] rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-gray-500 text-sm mb-2">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full p-2 border text-sm py-2 border-[#00ACBB] rounded-md"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="postalCode" className="block text-gray-500 text-sm mb-2">Postal Code</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder='Postal Code'
                            className="w-full p-2 border text-sm py-2 border-[#00ACBB] rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-gray-500 text-sm mb-2">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder='Country'
                            className="w-full p-2 border text-sm py-2 border-[#00ACBB] rounded-md"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                        <label htmlFor="phone" className="block text-gray-500 text-sm mb-2">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border text-sm py-2 border-[#00ACBB] rounded-md"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                        <label htmlFor="card-element" className="block text-gray-500 text-sm mb-2">Card Details</label>
                        <div className="p-2 py-4 border border-[#00ACBB] rounded-md">
                            <CardElement />
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md" disabled={!stripe || loading}>
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
                {error && <div className="mt-2 text-red-500">{error}</div>}
            </form>
            
            <div className="w-full lg:max-w-md mt-4 lg:mt-0">
                <div className="py-2 max-w-full mx-auto border-l border-t border-t-[#00ACBB] bg-pink-100 border-l-[#00ACBB]">
                    {cartItems?.map((item) => (
                        <div key={item?.id} className="py-2 border-b border-b-[#00ACBB]">
                            <div className="grid px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
                                <img src={item?.imageUrl} alt={item?.name} className="w-full h-24 object-cover rounded-lg" />
                                <h2 className="text-sm text-gray-800">{item?.name}</h2>
                                <p className="text-sm text-gray-600">{item?.price}</p>
                                <p className="text-sm text-gray-500">{item?.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between px-4 items-center mt-1 text-start">
                        <h2 className="text-sm text-gray-800 mt-5">Total Price: ${totalPrice}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CheckoutPage = () => (
    <Elements stripe={stripePromise}>
        <CheckOut />
    </Elements>
);

export default CheckoutPage;
