"use client";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css/animate.min.css";
import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";
import SlipLids from "../../../components/cards/SlipLids";
import ColorPalette from "../../../components/cards/ColorPalette";
import "../../../css/styles.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBagCheckFill } from "react-icons/bs";
import RightSidebar from '../../../components/RightSidebar/RightSidebar';
import { useRouter } from 'next/navigation';
import ProductbaseDropdown from "../../../components/ProductbaseDropdown";
// import DetailsMobile from "../../../components/cards/_components/details_mobile";
import { Check, Minus, Plus } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import Accessories, { Vertical } from "../../accessories/page";
import axios from "axios";
import { addToCart, Removecart } from "./../../../app/Redux/Action/actions";
import { useDispatch, useSelector } from "react-redux";
 import './style.css'
const Products = ({ params }) => {
  const buttonStyles = [{ padding: "0.25rem" }, { padding: "0.25rem" }];
  const router = useRouter();
  console.log(params.slug, '_________1');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
  
    setIsSidebarOpen(!isSidebarOpen);
  };


  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shake, setShake] = useState(false);
  const [BtnAmount, setBtnAmount] = useState(1); // Initial amount
  const [counter, setCounter] = useState(1); // Initial counter
  const [amount, setAmount] = useState(1); 
  const [mattresses, setMattresses] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [showArrows, onChange] = useState(true);
  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");
  const [selectedImagePathType, setSelectedImagePathType] = useState(
    "/Divan-Base-Only-b.png"
  );
  const [selectedImagePathDepth, setSelectedImagePathDepth] =
    useState("/Deep-Base.png");
  
  const [showBedDephthOptions, setShowBedDephthOptions] = useState(false);
  const [name, setname] = useState(""); 
  const [description, setdescription] = useState(""); 
  const dispatch = useDispatch();

  const [inStock, setinStock] = useState(""); 
  const [PId, setPId] = useState(""); 
  const [PId1, setPId1] = useState(""); 

  const [imageUrl, setimageUrl] = useState(""); 

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const displayDepthOptions = () => {
    setShowBedDephthOptions(true);
  };
  const removeDepthOptions = () => {
    setShowBedDephthOptions(false);
  };
  const handleImageClick = (path) => {
    setSelectedImagePath(path);
  };
  const handleImageClickType = (path) => {
    setSelectedImagePathType(path);
  };
  const handleImageClickDepth = (path) => {
    setSelectedImagePathDepth(path);
  };
  const updateBedSizeAmount = () => {
    const bedSizeAmount = getTextForImageBedSize().amount;

    setAmount(bedSizeAmount);
  };
  const updateBedTypeAmount = () => {
    const bedTypeAmount = getTextForImageBedType().amount;

    setAmount(bedTypeAmount);
  };
  const updateBedDepthAmount = () => {
    const bedDepthAmount = getTextForImageBedDepth().amount;

    setAmount(bedDepthAmount);
  };
  const getTextForImageBedSize = () => {
    switch (selectedImagePath) {
      case "/single.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490.00",
        };
      case "/single2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Single 3ft
            </p>
          ),
          amount: "£490.00",
        };
      case "/Double-small.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Double 4ft
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small2.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Double 4ft6
            </p>
          ),
          amount: "£310.00",
        };
      case "/Double-small3.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - King 5ft
            </p>
          ),
          amount: "£365.00",
        };
      case "/Double-small4.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Superking 6ft
            </p>
          ),
          amount: "£415.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Size</span> - Small Single 2ft6
            </p>
          ),
          amount: "£490",
        };
    }
  };
  const getTextForImageBedType = () => {
    switch (selectedImagePathType) {
      case "/Divan-Base-Only-b.png.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: "£225.00",
        };
      case "/2-Continentel-Drawer-same-side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/2-Draw-Same-Side-b.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: "£265.00",
        };
      case "/Side-Opening-Ottoman-b.jpg":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - End Lift Ottoman Bed
              +£60
            </p>
          ),
          amount: "£490.00",
        };
      case "/End-Foot-Opening.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£490.00",
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£225",
        };
    }
  };
  const getTextForImageBedDepth = () => {
    switch (selectedImagePathDepth) {
      case "/Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Base Only +£0
            </p>
          ),
          amount: amount,
        };
      case "/Standard-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Same Side
              +£40
            </p>
          ),
          amount: amount,
        };
      case "/Super-Deep-Base.png":
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - 2 Drawer Continental
              +£40
            </p>
          ),
          amount: amount,
        };
      default:
        return {
          text: (
            <p>
              <span className="font-semibold">Type</span> - Side Lift Ottoman
              Bed +£60
            </p>
          ),
          amount: "£285",
        };
    }
  };
  const [Loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: 'Size: Small single 2ft6',
    // imagePath: '/single2.png',
  });
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    {
      label: 'Single 3ft',
      imagePath: '/Double-small.png',
    },
    {
      label: 'Double 4ft',
      imagePath: '/Double-small.png',
    },
  ];

  useEffect(() => {
    updateBedSizeAmount();
  }, [selectedImagePath]);
  useEffect(() => {
    updateBedTypeAmount();
  }, [selectedImagePathType]);
  useEffect(() => {
    updateBedDepthAmount();
  }, [selectedImagePathDepth]);
  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000); // Duration of the shake animation
    }, 5000); // Interval between each shake animation

    return () => clearInterval(interval);
  }, []);


  const handleIncrease = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setAmount(BtnAmount * newCounter * 10);
  };
  
  const handleDecrease = () => {
    if (counter > 1) { // Ensures counter doesn't go below 1
      const newCounter = counter - 1;
      setCounter(newCounter);
      setAmount(BtnAmount * newCounter * 10);
    }
  };
  
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setDropdownVisible(!dropdownVisible);
  };
  const onClickItem = (index) => {
    onChange(index);
  };

  useEffect(() => {

    const fetchMattresses = async () => {
      try {
        console.log('Fetching data for mattress with id:', params.slug);
        const parts = params.slug.split('D')
        console.log(parts, 'parts')
        setPId(parts[1])
        const response = await axios.get(`https://ottomonukbackup1.vercel.app/mattresses/${parts[1]}`);
        console.log('Fetched data:', response.data.mattresses.price);
        setMattresses(response.data.mattresses); // Ensure you set the correct response data
        setAmount(`$${response.data.mattresses.price}`); // Set the fetched price
        setname(response.data.mattresses.name); // Set the fetched price
        setdescription(response.data.mattresses.description); // Set the fetched price
        setinStock(response.data.mattresses.countInStock); // Set the fetched price
        setimageUrl(response.data.mattresses.imageUrl); // Set the fetched price
        setPId1(response.data.mattresses)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMattresses();

  }, [params.slug]);
  // useEffect(() => {
  //   setLoading(true);
  //   const fetchMattresses = async () => {
  //     try {
  //       const response = await axios.get("https://ottomonukbackup1.vercel.app/mattresses/id");
  //       setLoading(false);
  //       setMattresses(res.data.mattressesData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchMattresses();
  // }, [CallingFrom]);


  return (
    <div>
      <div className="my-10 w-[100%] px-5 max-sm:px-1">
        <div className="flex  w-full max-md:flex-col max-lg:flex-wrap justify-evenly gap-10 max-lg:justify-center">
          {/* <ProductSidebar /> */}
          <div className="w-full  flex justify-center">
            <div className="flex flex-col w-full max-xl:w-full max-lg:w-[70%] max-md:w-[90%] max-sm:w-full">
              <div className="max-sm:w-full w-[100%] min-h-[60vh] relative max-md:min-h-[50vh] max-sm:min-h-[40vh]">
                <Image
                  src={imageUrl}
                  alt="openbed"
                  layout="fill"
                  objectFit="cover"
                />
                {selectedImagePath === "/OttomanEndLiftBaseclosedBg.jpg" && (
                  <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#00acbb]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="flex gap-1 w-[100%] h-[6.25rem] max-sm:h-[4rem] max-sm:w-full relative top-2">
                <div className="w-1/4  max-sm:w-1/4  max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening-small.jpg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath ===
                    "/Ottoman_Bed_side_opening-small.jpg" && (
                      <div className="absolute top-0  right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#00acbb]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman-Side.jpeg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath === "/Ottoman-Side.jpeg" && (
                    <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening.jpg"
                    alt="openbed"
                    layout="fill"
                    objectFit="cover"
                  />
                  {selectedImagePath === "/Ottoman_Bed_side_opening.jpg" && (
                    <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#00acbb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="w-1/4  max-sm:w-1/4 max-sm:h-[full] relative">
                  <Image
                    src="/Ottoman_Bed_side_opening-small.jpg"
                    alt="openbed"
                    objectFit="cover"
                    layout="fill"
                    className="-scale-x-100"
                  />
                  {selectedImagePath ===
                    "/Ottoman_Bed_side_opening-small.jpg" && (
                      <div className="absolute top-0 right-0 mt-2 mr-2 bg-white p-1 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#00acbb]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                </div>
              </div>

             </div>
          </div>

          <div className="max-lg:mt-10  w-full max-lg:text-center">
            <div>
              <p className="text-[1.1rem] font-bold">Cool Gel 5000 Pocket Sprung Mattress</p>

            </div>
            <div>
              <p className="text-[.85rem] my-2 font-bold">SIZE: SMALL SINGLE 2FT6</p>

            </div>
            <div className="relative justify-between w-full my-6 inline-block text-left">
              <div className="w-full">
                <button
                  type="button"
                  className="inline-flex justify-start text-[#C09A73] w-full rounded-md border-2 border-black shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  {selectedOption.label}
                  <div className="inline-flex justify-end">
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              {isOpen && (
                <div
                  className=" z-10 origin-top-right absolute w-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                   
                      <div
                       
                        className={`text-[#C09A73]  rounded-lg relative cursor-pointer border-[2px] border-black
                          `}
                       
                      >{options.map((option, index) => (
                        <div className={`flex text-[#C09A73] px-2 rounded-lg relative cursor-pointer ${selectedOption.imagePath === option.imagePath && ''}`} key={index} onClick={() => handleOptionClick(option)}>
                          <div className="h-[3rem] text-start w-[3rem] max-md:w-[5rem] max-md:h-[5rem] relative cursor-pointer">
                            <Image
                              src={option.imagePath}
                              alt={option.label}
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                          <div className="mb-10 ml-2 mt-[10px] w-full text-left">
                            {option.label}
                          </div>
                        </div>
                         ))}
                      </div>
                   
                  </div>
                </div>
              )}
            </div>
            <div className="leading-2 mb-2  border border-dotted p-2">
            
                    <p className="font-[500] text-[15px] ">Free Shipping to <span className="font-bold">UK</span>  </p>
                    <p className="font-[500]"> Order within the next  <span className="font-bold"> {formatTime(currentTime)}</span>  for dispatch today, and you will receive your package between <span className="font-bold">Aug 02 and Aug 12</span> </p>
                    
                   
                  </div>
                  <div className="leading-2 mb-2 flex items-center justify-center text-center ">
  
  <div className="relative border w-full p-3 flex flex-col items-center justify-center bg-white">
    <BsBagCheckFill className="text-[30px] text-[#56CFE1]" />
    <p className="text-[15px] font-bold text-[#56CFE1] mt-2">Ordered</p>
    <p className="text-[15px] mt-1">Jul 24</p>
  </div>
  
  
  <div className="relative border w-full p-3 flex flex-col items-center justify-center bg-white">
    <TbTruckDelivery className="text-[30px] text-[#56CFE1]" />
    <p className="text-[15px] font-bold text-[#56CFE1] mt-2">Shipped</p>
    <p className="text-[15px] mt-1">Jul 29 - Aug 03</p>
    
  
    
  </div>
  
 
  <div className="relative border w-full p-3 flex flex-col items-center justify-center bg-white">
    <HiMapPin className="text-[30px] text-[#56CFE1]" />
    <p className="text-[15px] font-bold text-[#56CFE1] mt-2">Delivered</p>
    <p className="text-[15px] mt-1">Aug 02 - Aug 12</p>
    
    
    
  </div>
</div>


            <div className=" ">
            

           
             
              <div className="">
                <div>
                  <p className="text-[#00acbb] font-semibold text-[1.2rem] mb-3"> {amount}</p>

                  <div className="flex gap-5 max-md:justify-center my-2  items-center">
                    <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.6rem] px-3 w-[25%] text-sm max-sm:py-[0.3rem]">
                      <Minus
                        strokeWidth={4}
                        className=" w-3 h-3 cursor-pointer"
                        onClick={handleDecrease}
                      />

                      <span>{counter}</span>
                      <Plus
                        strokeWidth={4}
                        className=" w-3 h-3 cursor-pointer"
                        onClick={handleIncrease}
                      />
                    </div>

                    <button
                      className={`bg-[#00acbb] w-[30%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.6rem] px-8 rounded-2xl max-sm:py-[0.3rem] ${shake ? "animate__animated animate__shakeX" : ""
                        }`}
                      onClick={() => {
                        dispatch(addToCart(PId1));
                        toggleSidebar();
                      }}>
                      Add to Cart
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="#ffffff" d="M0 0h24v24H0z" />
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
                        stroke="#000"
                        strokeWidth="2"
                      />
                    </svg>

                    <button className="rounded-2xl py-[0.6rem] border-[1px]  border-black px-3 w-[20%] text-sm max-sm:py-[0.3rem]">
                      Order {name}
                    </button>
                  </div>
                  {/*  */}
                  <div className="flex my-5 gap-5">
                    <div className="relative h-16 w-16">
                      <Image
                        src="/Gpay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative h-16 w-16">
                      <Image
                        src="/Applepay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative h-16 w-16">
                      <Image
                        src="/Visapay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative h-16 w-16">
                      <Image
                        src="/Masterpay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative h-16 w-16">
                      <Image
                        src="/Masterpay2.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>

                    <div className="relative h-16 w-16">
                      <Image
                        src="/shopifypay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="relative h-16 w-16">
                      <Image
                        src="/Klarnapay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      <div className="relative h-16 w-16">
                        <Image
                          src="/Palpay.svg"
                          alt="openbed"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <div className="relative h-16 w-16">
                      <Image
                        src="/Xpresspay.svg"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  {/*  */}

                  <div className="leading-7 mx-[2%]">
                    <p className="font-semibold mb-5">Ask a Question</p>
                    <p>Availability : In Stock({inStock})</p>
                    <p>
                      {description}
                    </p>
                    <p>Tags: without headboard</p>
                  </div>

                  <div
                    className={`flex w-[100%] justify-around my-10  items-center shadow-xl rounded-2xl py-2 min-h-[20vh] ${isHidden ? "" : ""
                      }`}
                  >
                    <div className="flex   basis-[50%] items-center gap-2 justify-center">
                      <div className="relative h-16 w-16">
                        <Image
                          src="/OttomanEndLiftBaseclosedBg.jpg"
                          alt="openbed"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-[100%]"
                        />
                      </div>
                      <div className="text-center w-[50%] text-sm">
                        {name} £200.00
                      </div>
                    </div>

                    <div className="flex items-center flex-col  basis-[60%] gap-2 justify-center">
                      <div className="flex flex-row justify-between w-full gap-4 items-center">
                        <div className="flex border-black border-[1px] justify-between items-center rounded-2xl py-[0.6rem] px-3 w-[60%] text-sm max-sm:py-[0.3rem]">
                          <svg
                            focusable="false"
                            className="icon icon--minus w-3 h-3 cursor-pointer"
                            viewBox="0 0 10 2"
                            role="presentation"
                            onClick={handleDecrease}
                          >
                            <path d="M10 0v2H0V0z" fill="currentColor"></path>
                          </svg>

                          <span>{counter}</span>

                          <svg
                            focusable="false"
                            className="icon icon--plus w-3 h-3 cursor-pointer"
                            viewBox="0 0 10 10"
                            role="presentation"
                            onClick={handleIncrease}
                          >
                            <path
                              d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z"
                              fill="currentColor"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>

                        <div className="relative mx-auto">
                          <div className="bg-black absolute text-white p-[8px] rounded-[50%] right-0 top-0">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">
                              0
                            </span>
                          </div>
                          <i
                            className="fa border-[1px] p-2 rounded-[50%] fa-cart-arrow-down text-[2rem] cursor-pointer"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>

                      <button
                        className={`bg-[#00acbb] w-[60%] h-12 hover:bg-[#00666e] text-sm text-white font-bold py-[0.5rem] px-5 rounded-2xl max-sm:py-[0.3rem] ${shake ? "animate__animated animate__shakeX" : ""
                          }`}
                        onClick={() => {
                          dispatch(addToCart(PId1));
                          toggleSidebar();
                        }}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <ProductbaseDropdown />
      </div>

      {/* Details Mobile */}
      <RightSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* <DetailsMobile /> */}
    </div>
  );
};

export default Products;
