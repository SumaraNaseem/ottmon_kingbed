import { useState, useMemo } from 'react';
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../src/app/Redux/Action/actions'; // Update with the actual path

const RightSidebar = ({ isOpen, onClose }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const images = [
        "https://via.placeholder.com/600x400?text=Image+1",
        "https://via.placeholder.com/600x400?text=Image+2",
        "https://via.placeholder.com/600x400?text=Image+3"
    ];

    const [activeTab, setActiveTab] = useState('profile');

    const handleTabClick = (tab) => setActiveTab(tab);

    const { cartItems } = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

    const handleClearCart = () => dispatch(clearCart());

    const totalPrice = useMemo(() => {
        return cartItems?.reduce((acc, item) => acc + parseFloat(item?.price || 0), 0).toFixed(2);
    }, [cartItems]);
    const cartLength = useSelector((state) => state.cartReducer.cartLength);
console.log(cartLength,'cartLength____')
const cartItemss = useSelector((state) => state.cartReducer.cartItems);
console.log(cartItemss,'cartLength____1')

    const router = useRouter();
    const handleCheckout = () => {
        router.push('/CheckOut'); // Adjust path if necessary
    };

    const handleViewCart = () => {
        router.push('/NewPaymentCardSetup'); // Adjust path if necessary
    };

    // const handleCheckout = () => {
    //     router.push('/NewPaymentCardSetup'); // Adjust path if necessary
    // };

    return (
        <div className={`fixed top-0 right-0 h-full w-[360px] bg-white text-black overflow-y-auto transition-transform ease-in-out duration-300 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="grid grid-cols-1 px-[20px] md:grid-cols-2 gap-2">
                <div className="text-medium font-medium mt-3 py-[5px] text-black border-0 align-baseline font-inherit text-base">
                    SHOPPING CART
                </div>
                <div className="flex justify-end">
                    <button className="text-black text-bolder" onClick={onClose}>
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
            </div>
            <hr />
            <button 
                        // class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                 style={{  backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #74da94 50%, #16751f 100%)',color:'white',borderRadius:"8px" }  }     
                        >
  <span class="p-1">Total</span>
  <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{cartLength}</span>
</button>
            {cartItems?.map(item => (
                <div key={item?.id} className="flex items-center border-b border-gray-300 py-4 px-2">
                    <div className="w-1/3 pr-4">
                        <Image
                            src={item?.imageUrl}
                            alt={item?.name}
                            height={150}
                            width={150}
                            objectFit="contain"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-2/3">
                    
                        <h2 className="text-lg font-semibold">{item?.name}</h2>
                        <p className="text-gray-500">Price: ${item?.price}</p>
                        
                        <span >{item?.description}</span><span className='border w-8 text-center pt-[2px] h-8 rounded-full bg-black text-white' style={{float:"right",marginLeft:"2rem", }}>{item?.quantity}</span>

 
             
                    </div>
                </div>
            ))}

            {/* <div className='overflow-auto scrollbar-hidden max-w-[100%] max-h-[auto]'>
                <div className="grid grid-cols-12 gap-1">
                    <div className="flex justify-center items-center col-span-12">
                        <div className="flex justify-center items-center">
                            <Slider {...settings}>
                                {images.map((img, index) => (
                                    <div className='px-2' key={index}>
                                        <div className="grid grid-cols-12 py-3 gap-4">
                                            <div className="col-span-3">
                                                <img src={img} alt={`Image ${index + 1}`} className="w-[50px] h-[50px]" />
                                            </div>
                                            <div className="col-span-6 cursor-pointer text-start overflow-hidden text-ellipsis whitespace-nowrap font-medium text-gray-800 text-[14px] text-black">
                                                <p className='text-gray-500'>Bed Base Only Without Headboard</p>
                                                <p className='text-[#00ACBB]'>£4,155.00</p>
                                            </div>
                                            <div className="col-span-3 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18m-7 4h7m-7-8h7m-7 4h7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="grid grid-cols-12 py-4 mx-4 gap-1">
                <input
                    type="text"
                    placeholder="Discount code"
                    className="col-span-9 p-2 border border-gray-300"
                />
                <button
                    type="submit"
                    className="col-span-3 bg-black text-white px-4 py-2 hover:bg-gray-800"
                >
                    Apply
                </button>
            </div>

            <div className="flex flex-col mx-4 items-center space-y-1 py-2">
                <div className="flex w-full bg-white border border-[#00ACBB] rounded-full">
                    <div className="sm:hidden">
                        <select
                            id="tabs"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={activeTab}
                            onChange={(e) => handleTabClick(e.target.value)}
                        >
                            <option value="profile">Profile</option>
                            <option value="dashboard">Dashboard</option>
                        </select>
                    </div>
                    <button
                        onClick={() => handleTabClick('profile')}
                        className={`inline-block w-full p-2 text-[#00ACBB] ${activeTab === 'profile' ? 'text-white bg-[#00ACBB]' : 'bg-white hover:text-white hover:bg-[#00ACBB]'} rounded-tl-full text-[15px] rounded-bl-full`}
                    >
                        Pay Deposit
                    </button>
                    <button
                        onClick={() => handleTabClick('dashboard')}
                        className={`inline-block w-full p-2 text-[#00ACBB] ${activeTab === 'dashboard' ? 'text-white bg-[#00ACBB]' : 'bg-white hover:text-white hover:bg-[#00ACBB]'} rounded-tr-full text-[15px] rounded-br-full`}
                    >
                        Pay Full Amount
                    </button>
                </div>
            </div>

            <div className="p-4 text-black">
                {activeTab === 'profile' &&
                    <div>
                        <div className="flex px-4 justify-between w-full">
                            <div className="text-start text-gray-400 text-[13px] font-medium pr-4">
                                <p>Total price</p>
                            </div>
                            <div className="text-end text-gray-400 text-[13px] font-medium pl-4">
                                <p>£4,155.00</p>
                            </div>
                        </div>
                        <div className="flex px-4 justify-between w-full">
                            <div className="text-start text-gray-400 text-[13px] font-medium pr-4">
                                <p>Pay on Delivery of Goods</p>
                            </div>
                            <div className="text-end text-gray-400 text-[13px] font-medium pl-4">
                                <p>£3,947.25</p>
                            </div>
                        </div>
                        <div className="flex px-4 justify-between w-full">
                            <div className="text-start text-gray-400 text-[15px] font-medium pr-4">
                                <p>Pay Now</p>
                            </div>
                            <div className="text-end text-gray-400 text-[15px] font-medium pl-4">
                                <p>£207.75</p>
                            </div>
                        </div>
                    </div>
                }

                {activeTab === 'dashboard' &&
                    <div>
                        <div className="flex px-4 justify-between w-full">
                            <div className="text-start text-gray-400 text-[15px] font-medium pr-4">
                                <p>Total price</p>
                            </div>
                            <div className="text-end text-gray-400 text-[15px] font-medium pl-4">
                                <p>£4,155.00</p>
                            </div>
                        </div>
                        <div className="flex px-4 justify-between w-full">
                            <div className="text-start text-gray-400 text-[15px] font-medium pr-4">
                                <p>Pay Full Amount</p>
                            </div>
                            <div className="text-end text-gray-400 text-[15px] font-medium pl-4">
                                <p>£4,155.00</p>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div className="py-4 px-4 space-y-2">
                <button
                    className="w-full py-2 bg-[#00ACBB] text-white font-semibold rounded-lg"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                <button
                    className="w-full py-2 bg-[#007BFF] text-white font-semibold rounded-lg"
                    onClick={handleViewCart}
                >
                    View Cart
                </button>
                <button
                    className="w-full py-2 bg-[#28A745] text-white font-semibold rounded-lg"
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;
