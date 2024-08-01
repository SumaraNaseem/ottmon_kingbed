"use client";

import React, { useState, useMemo } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

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

  const { cartItems } = useSelector((state) => state.cartReducer);
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
        amount: totalPrice, // Convert amount to cents
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
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.formLabel}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.formControl}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.formControl}
            />
          </div>
        </div>
        <div style={styles.formGroup}>
          <div style={styles.inputGroup}>
            <label htmlFor="addressLine1" style={styles.formLabel}>Address Line 1</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleChange}
              style={styles.formControl}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="city" style={styles.formLabel}>City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={styles.formControl}
            />
          </div>
        </div>
        <div style={styles.formGroup}>
          <div style={styles.inputGroup}>
            <label htmlFor="postalCode" style={styles.formLabel}>Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              style={styles.formControl}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="country" style={styles.formLabel}>Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={styles.formControl}
            />
          </div>
        </div>
        <div style={styles.formGroup}>
          <div style={styles.inputGroup}>
            <label htmlFor="phone" style={styles.formLabel}>Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.formControl}
            />
          </div>
        </div>
        <div style={styles.formGroup}>
          <div style={styles.inputGroup}>
            <label htmlFor="card-element" style={styles.formLabel}>Card Details</label>
            <CardElement />
          </div>
        </div>
        <button type="submit" style={styles.btn} disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
        {error && <div style={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  form: {
    maxWidth: '900px',
    width: '100%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  formGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  inputGroup: {
    flex: 1,
    marginRight: '10px',
  },
  formLabel: {
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
  },
  formControl: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  btn: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  error: {
    marginTop: '10px',
    color: '#dc3545',
    fontSize: '14px',
  },
};

export default PaymentForm;
