'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { clearCart } from '../Redux/Action/actions'; // Update with the actual path
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const router = useRouter();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    router.push('/CheckOut'); // Adjust path if necessary
  };

  // Calculate total price
  const totalPrice = useMemo(() => {
    return cartItems?.reduce((acc, item) => acc + parseFloat(item?.price || 0), 0).toFixed(2);
  }, [cartItems]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-semibold text-gray-800">Your Cart</h1>
        <button 
          type="button" 
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>
      <div className="hidden md:grid grid-cols-4 gap-4 p-2 border-b border-b-[#00ACBB]">
        <h2 className="text-sm font-semibold text-gray-800">Image</h2>
        <h2 className="text-sm font-semibold sm:text-center  text-gray-800">Description</h2>
        <p className="text-sm font-semibold text-gray-600"> Name</p>
        <p className="text-sm font-semibold text-gray-500">Price</p>
      </div>
      {cartItems?.map((item) => (
        <div key={item?.id} className="p-2 border-b border-b-[#00ACBB]">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-4 py-5 items-center">
            <img src={item?.imageUrl} alt={item?.name} className="w-full md:w-24 h-24 object-cover rounded-lg" />
            <h2 className="text-sm text-gray-800">{item?.description}</h2>
            <p className="text-sm text-gray-600"> {item?.name}</p>
            <p className="text-sm text-gray-500">${item?.price}</p>
          </div>
        </div>
      ))}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 text-start">
        <h2 className="text-xl font-semibold text-gray-800">Total Price: ${totalPrice}</h2>
        <button 
          onClick={handleCheckout} 
          className="mt-3 md:mt-0 bg-[#00ACBB] text-white font-medium rounded-full py-3 px-6 text-sm hover:bg-[#0096a6]"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartPage;
