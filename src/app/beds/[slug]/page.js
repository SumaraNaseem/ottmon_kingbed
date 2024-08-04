"use client";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css/animate.min.css";
import Image from "next/image";
import SlipLids from "../../../components/cards/SlipLids";
import ColorPalette from "../../../components/cards/ColorPalette";
import RightSidebar from '../../../components/RightSidebar/RightSidebar';
import "../../../css/styles.css";
import './style.css'
import { useRouter } from 'next/navigation';
import ProductbaseDropdown from "../../../components/ProductbaseDropdown";
// import DetailsMobile from "../../../components/cards/_components/details_mobile";
import { Check, Minus, Plus } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import Accessories, { Vertical } from "../../accessories/page";
import axios from "axios";
import { addToCart, Removecart } from "./../../../app/Redux/Action/actions";
import { useDispatch, useSelector } from "react-redux";
const Products = ({params}) => {
  const buttonStyles = [{ padding: "0.25rem" }, { padding: "0.25rem" }];
  const router = useRouter();
  console.log(params.slug,'_________1'); 
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("hlo toggle sidebar are u there ")
    setIsSidebarOpen(!isSidebarOpen);
  };
  const headBoardSet = [
    {
      image: "/safina-plain-Headboard.jpg",
      name: "Safina Plain +£95",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/York-Headboard.jpg",
      name: "York +£95",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Oakland-Headboard.jpg",
      name: "Oakland +£95",
      price:'95',

      alter: "headboard"
    },

    {

      image: "/Moon-Headboard.jpg",
      name: "Moonlight +£95",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Elegant-Headboard.jpg",
      name: "Elegant +£95",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Majextic-B-Strut-30-Front-Blue.jpg",
      name: "Majestic Elegant +£125",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Soneros-Strut-30-Front-Blue.jpg",
      name: "Safina Elegant +£125",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Alvador-Headboard.jpg",
      name: "Soneros +£125",
      price:'125',

      alter: "headboard"
    }, {
      image: "/Giovani-strutted-26.jpg",
      name: "Alvador +£95",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Sicilian-Headboard.jpg",
      name: "Giovani +£125",
      price:'125',

      alter: "headboard"
    },

    {
      image: "/Chesterfield-Headboard.jpg",
      name: "Sicilian +£95",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Majestic-Chesterfield-Headboard.jpg",
      name: "Chesterfield +£95",
      price:'95',

      alter: "headboard"
    },
    {
      image: "/Safina-Chesterfield-Headboard.jpg",
      name: "Majestic Chesterfield +£125",
      price:'125',

      alter: "headboard"
    },
    {
      image: "/Safina-Chesterfield-Headboard.jpg",
      name: "Safina Chesterfield +£125",
      price:'125',

      alter: "headboard"
    }, {
      image: "/Safina-Chesterfield-Headboard.jpg",
      name: "Lewis Plain +£125",
      price:'125',

      alter: "headboard"
    },

    {
      image: "/Alvador-Headboard.jpg",
      name: "Lewis Chesterfield +£125",
      price:'125',

      alter: "headboard"
    },

  ];
  const standingBoardSet = [
    {
      image: "/Plain-Safina.jpg",
      name: "Grandeur +£155",
      price:'155',

      alter: "headboard"
    },
    {
      image: "/curve-360-grey.jpg",
      name: "curve 360 +£175",
      price:'175',

      alter: "headboard"
    },
    {
      image: "/curve-360-grey.jpg",
      name: "Majestic +£195",
      price:'195',

      alter: "headboard"
    },

    {
      image: "/curve-360-grey.jpg",
      name: "Safina +£195",
      price:'195',

      alter: "headboard"
    },
    {
      image: "/Wingback-Plain-Floor-standing-Curved-54inch-PWB-Head-Only-LHS.jpg",
      name: "Majestic WBPL +£245",
      price:'245',

      alter: "headboard"
    },
    {
      image: "/oakland-54inch.jpg",
      name: "Oakland +£175.00",
      price:'175',

      alter: "headboard"
    },
    {
      image: "/moonlight.jpg",
      name: "Moonlight +£175",
      price:'175',

      alter: "headboard"
    },
    {
      image: "/Elegant-floorstanding-Headboard.jpg",
      name: "Elegant +£175",
      price:'175',

      alter: "headboard"
    }, {
      image: "/Elegant-floorstanding-Headboard.jpg",
      name: "Soneros +£175",
      price:'175',

      alter: "headboard"
    },
    {
      image: "/Giovani.jpg",
      name: "Giovani +£125",
      price:'125',

      alter: "headboard"
    },

    {
      image: "/Alvador-Panel-Headboard.jpg",
      name: "Giovani +£175",
      price:'175',

      alter: "headboard"
    },
    {
      image: "/York-Panel-54inch-Headboard-Only.jpg",
      name: "Alvador +£175",
      price:'175',

      alter: "headboard"
    },
    {
      image: "/Horizontal-4-Panel.jpg",
      name: "Majestic Chesterfield +£125",
      price:'125',

      alter: "headboard"
    },
    {
      image: "/Horizontal-4-Panel.jpg",
      name: "York Panel +£175",
      price:'175',

      alter: "headboard"
    }, {
      image: "/Moonlight-Head-Only.jpg",
      name: "York 4 +£175",
      price:'175',

      alter: "headboard"
    },

    {
      image: "/Wingback-Ottoman-Storage-Bed-Plush-Velvet-Silver-Grey001-300x300.jpeg",
      name: "Sicilian +£185",
      price:'185',

      alter: "headboard"
    },
    {
      image: "/Wingback-Ottoman-Storage-Bed-Plush-Velvet-Silver-Grey001-300x300.jpeg",
      name: "Sicilian +£185",
      price:'185',

      alter: "headboard"
    },
    {
      image: "/Majestic-Chesterfield.jpg",
      name: "Moonlight WB +£225",
      price:'225',

      alter: "headboard"
    },
    {
      image: "/Safina-Chesterfield.jpg",
      name: "Elegant WB +£225",
      price:'225',

      alter: "headboard"
    },
    {
      image: "/Chesterfield-Floor-Standing-Tall-Wing-back-54inch.jpg",
      name: "Chesterfield +£185",
      price:'185',

      alter: "headboard"
    },
    {
      image: "/09-0003-P3-F1-LSV2-H1V4-54-Head-Only.jpg",
      name: "Majestic +£245",
      price:'245',

      alter: "headboard"
    },{
      image: "/Wingback-Safina-Chesterfield.jpg",
      name: "Safina +£245",
      price:'245',

      alter: "headboard"
    },
    {
      image: "/Majestic-Wingback.jpg",
      name: "Queen Ann +£245",
      price:'245',

      alter: "headboard"
    },
    {
      image: "/Tall-vegas-Chesterfield.jpg",
      name: "Oxford WB +£245",
      price:'245',

      alter: "headboard"
    },
    {
      image: "/Majestic-Wingback.jpg",
      name: "Safina WB +£245",
      price:'245',

      alter: "headboard"
    },
    {
      image: "/09-0003-P3-F1-LSV2-H1V4-54-Head-Only.jpg",
      name: "Majestic WB +£245",
      price:'245',

      alter: "headboard"
    },
    {
      image: "/moonlight.jpg",
      name: "Tall vegas +£275",
      price:'275',

      alter: "headboard"
    },
    
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMattress, setSelectedMattress] = useState(null);
  const [DropdownVisibleRemovalServices, setDropdownVisibleRemovalServices] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shake, setShake] = useState(false);
  const [BtnAmount, setBtnAmount] = useState(1); // Initial amount
  const [counter, setCounter] = useState(1); // Initial counter
  const [sales, setsales] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [showArrows, onChange] = useState(true);
  const [selectedImagePath, setSelectedImagePath] = useState("/single.png");
  const [selectedImagePathType, setSelectedImagePathType] = useState("/Divan-Base-Only-b.png"
  );
  const [selectedImagePathDepth, setSelectedImagePathDepth] = useState("/Deep-Base.png");
  const [amount, setAmount] = useState("0"); // Initial amount value
  const [initialAmount, setInitialAmount] = useState(0); // Store initial fetched amount
  const [previousButtonAmount, setPreviousButtonAmount] = useState(0); // Track the button-specific amount

  console.log(amount,'add Room Services is  ==')
  const [showBedDephthOptions, setShowBedDephthOptions] = useState(false);
  const [name, setname] = useState(""); // Initial amount value
  const [description, setdescription] = useState(""); // Initial amount value
  const dispatch = useDispatch();

  const [inStock, setinStock] = useState(""); // Initial amount value
  const [PId, setPId] = useState(""); // Initial amount value
  const [imageUrl, setinimageUrl] = useState(""); // Initial amount value
  const [addmattresses, setaddmattresses] = useState(true);
  const [addServices, setaddServices] = useState(true);
  const [Mattressopetion, setMattressopetion] = useState(true);
  const [buttonTextShow, setbuttonTextShow] = useState('');
  const [amountHeadboard, setAmountheadBoard] = useState('');
 
  const [matressatet, setmatressatet] = useState('');
console.log(amountHeadboard,'buttonText____1')
  const [mattresses, setMattresses] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchMattresses = async () => {
      try {
        const response = await axios.get("https://ottomonukbackup1.vercel.app/mattresses");
        setLoading(false);
        const mattressesData = response.data.mattressesData;
        console.log(mattressesData, "drop down data set1")
        setMattresses(mattressesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchMattresses();
  }, []);

  
  const NGasPistons = (buttonText) => {
   console.log(buttonText,'NGasPistons___')

   
  };
  const [previousHeadBoardAmount, setPreviousHeadBoardAmount] = useState(0); // Track the button-specific amount for amountHeadboard

  const HeadboardDetail1 = (buttonText) => {
    console.log(buttonText,'buttonText111')
    setbuttonTextShow(buttonText)
  };
  const HeadboardDetail = (newAmount) => {
    let currentAmount = Number(amount);
    let currentAmountHeadboard = Number(amountHeadboard);

    currentAmount -= previousHeadBoardAmount;

    currentAmount += Number(newAmount);
    currentAmountHeadboard = Number(newAmount);

    setAmount(currentAmount.toString());
    setAmountheadBoard(currentAmountHeadboard.toString());
    setPreviousHeadBoardAmount(Number(newAmount));

    console.log("Updated Headboard amount is =", currentAmountHeadboard);
    console.log("Updated total amount is =", currentAmount);
  };
  const handleButtonClick1 = (buttonText) => {
    setmatressatet(buttonText)
    setMattressopetion(buttonText)
    if (buttonText === "Yes") {
      setaddmattresses(true);
      setDropdownVisible(true);
      console.log("add mattresses is   =",true);
    } else if (buttonText === "No") {
      setaddmattresses(false);
      setDropdownVisible(false);
      console.log("add mattresses is  =",false);
    }

   
  };
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const [filteredItemId, setFilteredItemId] = useState(null);

  useEffect(() => {
      const filteredItem = cartItems.find(item => item._id === '-2');
      if (filteredItem) {
          console.log(filteredItem, 'Filtered Cart Item with _id -2');
          setFilteredItemId(filteredItem._id);
      }
  }, [cartItems]);
  const deliveryService=(text)=>{
    if(filteredItemId==='-2'){
      return
    }
    console.log(text,'text____')
    if(text = 'Yes +45'){
      var prc=45;
   
      var newPrc=prc.toString()
      console.log(newPrc,'text____1')
      const arrayData={
        imageUrl:'https://res.cloudinary.com/dgmjg9zr4/image/upload/v1722114236/delivery_n5s73b.jpg',
        name:'Deliver To Room Service Added',
        _id:'-2',
        price:newPrc
  
      }
      dispatch(addToCart(arrayData));
  
    }
  }
  const handleServiceClick = (buttonText) => {
    if (buttonText === "Yes") {
      setaddServices(true);
      console.log("add Services is   =",true);
    } else if (buttonText === "No") {
      setaddServices(false);
      console.log("add Services is  =",false);
    }
  };
  const handleRoomServiceClick = (buttonText) => {
    if (buttonText === "Yes") {
      setaddServices(true);
      console.log("add Room Services is   =",true);
    } else if (buttonText === "No") {
      setaddServices(false);
      console.log("add Room Services is  =",false);
    }
  };
  const handleRemovalServiceClick = (buttonText) => {
    let newAmt = 0;

    // Determine the amount to add based on buttonText
    if (buttonText === 'Base Only +£55' || buttonText==='Mattress Only +£55' ) {
      newAmt = 55;
    } else if (buttonText === 'Base + Mattress +£75' || buttonText==='Base + Mattress + Headboard +£75') {
      newAmt = 75;
    }

    if (newAmt > 0) {
      // Convert amount to a number and handle the button-specific logic
      let currentAmount = Number(amount);

      // Subtract the previous button-specific amount
      currentAmount -= previousButtonAmount;

      // Add the new amount
      currentAmount += newAmt;

      // Update the amount and button-specific amount
      setAmount(currentAmount.toString());
      setPreviousButtonAmount(newAmt);

      console.log("Updated amount is =", currentAmount);
    }


    console.log("add Removal  Services is   =1",buttonText);

    if (buttonText === "Yes") {
      setaddServices(true);
      setDropdownVisibleRemovalServices(true);
      console.log("add Removal  Services is   =",buttonText);
    } else if (buttonText === "No") {
      setaddServices(false);
      setDropdownVisibleRemovalServices(false);
      console.log("add Removal Services is  =",false);
    }
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
          amount:amount,
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
    const currentAmount = parseFloat(amount);
    const newAmount = currentAmount + initialAmount; // Increase amount by adding the initial amount
    setAmount(newAmount.toFixed(2)); // Set the new amount with 2 decimal places
  };
  
  const handleDecrease = () => {
    if (counter > 1) { // Prevent counter from going below 1
      const newCounter = counter - 1;
      setCounter(newCounter);
      const currentAmount = parseFloat(amount);
      const newAmount = currentAmount - initialAmount; // Decrease amount by subtracting the initial amount
      setAmount(newAmount.toFixed(2)); // Set the new amount with 2 decimal places
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
  const apiHandleDropdown = () => {
     
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setDropdownVisibleRemovalServices(!DropdownVisibleRemovalServices);
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSelect = (mattress) => {
    setSelectedMattress(mattress);
    console.log(mattress,'your console value')
    setIsDropdownOpen(false); // Optionally close the dropdown after selection
  };
  const onClickItem = (index) => {
    onChange(index);
  };

  useEffect(() => {
 
      const fetchsales = async () => {
        try {
          console.log('Fetching data for mattress with id:', params.slug);
const parts=params.slug.split('D')
console.log(parts,'parts')
// setPId(parts[1])
          const response = await axios.get(`https://ottomonukbackup1.vercel.app/beds/${params.slug}`);
          console.log('Fetched data:', response.data.beds.price);
          setsales(response.data.beds); // Ensure you set the correct response data
          // setAmount(`${response.data.sales.price}`); // Set the fetched price
          setname(response.data.beds.name); // Set the fetched price
          setdescription(response.data.beds.description); // Set the fetched price
          setinStock(response.data.beds.countInStock); // Set the fetched price
          setinimageUrl(response.data.beds.imageUrl); // Set the fetched price

          // setAmount(response.data.beds.price); // Set the fetched price
          const fetchedPrice = response.data.beds.price;
          setAmount(fetchedPrice.toString()); // Set the fetched price
          setInitialAmount(parseFloat(fetchedPrice)); // Store the initial fetched price
          setPId(response.data.beds)
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchsales();
    
  }, [params.slug]);
  // useEffect(() => {
  //   setLoading(true);
  //   const fetchsales = async () => {
  //     try {
  //       const response = await axios.get("https://ottomonukbackup1.vercel.app/sales/id");
  //       setLoading(false);
  //       setsales(res.data.salesData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchsales();
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
          Bed Size section 
          <div className="max-lg:mt-10  w-full max-lg:text-center">
            <div>
              <p className="text-[1.2rem]">{name}</p>
              <span className="text-[#00acbb] font-semibold text-[1.2rem]">
               $ {amount}
              </span>
            </div>

            <div className="  py-10 ">
              <div className="bg-[#f1feff] min-h-[40vh] flex flex-col justify-center rounded-xl">
                <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                  {getTextForImageBedSize().text}
                </div>
                <div className="grid text-sm gap-y-20 rounded-2xl justify-items-center py-10 grid-cols-5 max-xl:grid-cols-3 max-md:mt-20 max-sm:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-lg:justify- max-sm:justify-between">
                  <div
                    className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePath === "/single.png" &&
                      " border-[2px] border-black"
                    }`}
                    onClick={() => handleImageClick("/single.png")}
                  >
                    <Image
                      // add single image later
                      src="/Double-small.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePath === "/single.png" && (
                      <div className="absolute -top-1 -right-[0.38rem] bg-[#00acbb] p-2  rounded-full">
                        <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Small Single 2ft6
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePath === "/single2.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => handleImageClick("/single2.png")}
                  >
                    <Image
                      // add single image later
                      src="/Double-small.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePath === "/single2.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                        <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Single 3ft
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePath === "/Double-small.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => handleImageClick("/Double-small.png")}
                  >
                    <Image
                      src="/Double-small.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePath === "/Double-small.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#415456] p-2  rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Small Double 4ft
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePath === "/Double-small2.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => handleImageClick("/Double-small2.png")}
                  >
                    <Image
                      src="/Double-small.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePath === "/Double-small2.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Double 4ft6
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem]  px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePath === "/Double-small3.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => handleImageClick("/Double-small3.png")}
                  >
                    <Image
                      src="/Double-small.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePath === "/Double-small3.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2 rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      King 5ft
                    </div>
                  </div>
                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem]  px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePath === "/Double-small4.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => handleImageClick("/Double-small4.png")}
                  >
                    <Image
                      src="/Double-small.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePath === "/Double-small4.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2 rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Super King 6ft
                    </div>
                  </div>
                </div>
              </div>

              {/* Bed types section*/}
              <div className="bg-[#f1feff] min-h-[60vh] max-sm:h-[90vh] mt-10 flex flex-col rounded-xl ">
                <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                  {getTextForImageBedType().text}
                </div>
                <div className="grid text-sm justify-items-center rounded-2xl  py-10 grid-cols-6 max-xl:grid-cols-3 max-md:mt-20 max-lg:grid-cols-2 gap-8 max-sm:items-center px-5 my-5 max-xl:gap-20 max-md:gap-28  max-sm:justify-between">
                  <div
                    className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/Divan-Base-Only-b.png" &&
                      " border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/Divan-Base-Only-b.png");
                      removeDepthOptions();
                    }}
                  >
                    <Image
                      src="/Divan-Base-Only-b.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePathType === "/Divan-Base-Only-b.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full  left-0 text-center">
                      Base Only +£0
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType ===
                        "/2-Continentel-Drawer-same-side-b.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType(
                        "/2-Continentel-Drawer-same-side-b.png"
                      );
                      removeDepthOptions();
                    }}
                  >
                    <Image
                      src="/2-Continentel-Drawer-same-side-b.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePathType ===
                      "/2-Continentel-Drawer-same-side-b.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                      <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      2 Drawer same side +£40
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/2-Draw-Same-Side-b.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/2-Draw-Same-Side-b.png");
                      removeDepthOptions();
                    }}
                  >
                    <Image
                      src="/2-Draw-Same-Side-b.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePathType === "/2-Draw-Same-Side-b.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      2 Drawer Continental +£40
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/Side-Opening-Ottoman-b.jpg" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/Side-Opening-Ottoman-b.jpg");
                      displayDepthOptions();
                    }}
                  >
                    <Image
                      src="/Side-Opening-Ottoman-b.jpg"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePathType ===
                      "/Side-Opening-Ottoman-b.jpg" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      End lift Ottoman Bed +£60
                    </div>
                  </div>

                  <div
                    className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                      selectedImagePathType === "/End-Foot-Opening.png" &&
                      "border-[2px] border-black"
                    }`}
                    onClick={() => {
                      handleImageClickType("/End-Foot-Opening.png");
                      displayDepthOptions();
                    }}
                  >
                    <Image
                      src="/End-Foot-Opening.png"
                      alt="openbed"
                      layout="fill"
                      objectFit="contain"
                    />
                    {selectedImagePathType === "/End-Foot-Opening.png" && (
                      <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                       <Check className="h-4 w-4 text-white" /> 
                      </div>
                    )}
                    <div className="absolute top-full mb-10 w-full left-0 text-center">
                      Side Lift Ottoman Bed +£60
                    </div>
                  </div>
                </div>
              </div>

              {/* <div><ProductsPage/></div> / */}
              Bed Depth section :

              {showBedDephthOptions && (
                <div className="bg-[#f1feff] min-h-[60vh] mt-10 max-sm:min-h-[70vh]  flex flex-col rounded-xl animate__animated  animate__fadeInDown">
                  <div className="border-black border-[2px] w-[85%] mt-10 mx-auto p-3 cursor-pointer rounded-2xl text-center">
                    {getTextForImageBedDepth().text}
                  </div>
                  <div className="grid  items-center  justify-items-center my-5 max-sm:my-20 text-sm rounded-2xl  grid-cols-4 max-sm:grid-cols-2 max-sm:gap-x-20 max-sm:gap-y-36">
                    <div
                      className={`h-[6.25rem]  w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Deep-Base.png" &&
                        " border-[2px] border-black"
                      }`}
                      onClick={() => handleImageClickDepth("/Deep-Base.png")}
                    >
                      <Image
                        src="/Deep-Base.png"
                        alt="deepbase"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Deep-Base.png" && (
                        <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                         <Check className="h-4 w-4 text-white" /> 
                        </div>
                      )}

                      <div className="absolute top-full mb-10 mt-2 w-full left-0 text-center">
                        Standard Depth 23cm ( Base Height 37cm ) +£0
                      </div>
                    </div>

                    <div
                      className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Standard-Base.png" &&
                        "border-[2px] border-black"
                      }`}
                      onClick={() =>
                        handleImageClickDepth("/Standard-Base.png")
                      }
                    >
                      <Image
                        src="/Standard-Base.png"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Standard-Base.png" && (
                        <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                         <Check className="h-4 w-4 text-white" /> 
                        </div>
                      )}
                      <div className="absolute top-full mb-10 mt-2 w-full left-0 text-center">
                        Deep Base Depth 30.5cm (Base Height 44cm) +£180
                      </div>
                    </div>

                    <div
                      className={`h-[6.25rem] w-[6.25rem] max-md:w-[5rem] max-md:h-[5rem] px-10 rounded-lg relative cursor-pointer ${
                        selectedImagePathDepth === "/Super-Deep-Base.png" &&
                        "border-[2px] border-black"
                      }`}
                      onClick={() =>
                        handleImageClickDepth("/Super-Deep-Base.png")
                      }
                    >
                      <Image
                        src="/Super-Deep-Base.png"
                        alt="openbed"
                        layout="fill"
                        objectFit="contain"
                      />
                      {selectedImagePathDepth === "/Super-Deep-Base.png" && (
                        <div className="absolute -top-1 -right-[0.38rem]  bg-[#00acbb] p-2  rounded-full">
                         <Check className="h-4 w-4 text-white" /> 
                        </div>
                      )}

                      <div className="absolute top-full mt-2 mb-10 w-full left-0 text-center">
                        Super Deep Depth 37cm (Base Height 50cm) +£450
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showBedDephthOptions && (
                <div className="flex flex-col gap-4 mt-4">
                  <SlipLids
                    defaultText="Anti-Slip Lids -"
                    buttonTexts={[
                      "Anti-Slip Lids - Standard Top (Bed Side Supported By Wall) +£0",
                      "Foam Padded Bed Base +£125",
                    ]}
                    // onButtonClick={handleButtonClick}
                  />

                  <SlipLids
                    defaultText="Base Padding -"
                    buttonTexts={[
                      "No Base Padding +£0",
                      "Foam Padded Bed Base +£125",
                    ]}
                    // buttonStyles={buttonStyles}
                    // onButtonClick={handleButtonClick}
                  />

                  <SlipLids
                    defaultText="Re-enforcement - "
                    buttonTexts={[
                      "Standard Market Build +£0",
                      "Re-Inforced Storage Area & Lids +£80",
                    ]}
                    buttonStyles={buttonStyles}
                    // onButtonClick={handleButtonClick}
                  />

                  <SlipLids
                    defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                    buttonTexts={[
                      "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                      "800N Gas Pistons (55-75kg Mattress) +£25",
                      // Add more button texts as needed
                    ]}
                    buttonStyles={buttonStyles}
                    onButtonClick={NGasPistons}
                  />
                </div>
              )}

              <div>
                <ColorPalette />
              </div>

              <div className=" flex flex-col gap-4 mt-4">
                <SlipLids
                  defaultText="Gas Pistons - 600N Gas Pistons (Upto 55kg Mattress) (Included)"
                  buttonTexts={[
                    "600N Gas Pistons (Upto 55kg Mattress) (Included)",
                    "800N Gas Pistons (55-75kg Mattress) +£25",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                  
                />
  <SlipLids
        defaultText="Headboard Height - 72inch Floor Standing Headboard +£100"
        buttonTexts={[
          "Without Headboard",
          "26inch Strutted Headboard",
          "54inch Floor Standing Headboard",
          "60inch Floor Standing Headboard +£50",
          "72inch Floor Standing Headboard +£100",
          // Add more button texts as needed
        ]}
        buttonStyles={buttonStyles}
        onButtonClick={HeadboardDetail1}
        // onButtonClick={handleRemovalServiceClick}
      /> 
     
     <div className="min-h-[30vh] flex flex-col pt-3 justify-center rounded-2xl items-center gap-5 bg-[#f1feff]">
        <div className="border-black border-[2px] text-[#222222] font-semibold w-[85%] p-2 cursor-pointer rounded-2xl text-center">
        Strutted Headboards - Safina Plain +£95
        </div>


        <div className="flex flex-wrap gap-[1%]  text-[0.8rem] w-[100%] justify-start pl-6 text-center">
        {buttonTextShow!=='' && buttonTextShow !== 'Without Headboard' && 
  (buttonTextShow === '26inch Strutted Headboard' ? headBoardSet : standingBoardSet).map((item, index) => (
    <div 
      key={index} 
      className="flex flex-col gap-2 items-start"
      onClick={() => HeadboardDetail(item.price)} // Add this line
    >
      <div className="flex flex-wrap justify-start">
        <div
          className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-[1px] rounded-md cursor-pointer transition duration-300 ease-in-out"
          // onClick={() => handleColorClick(color)}
        >
          <img
            src={item.image}
            alt={item.alter}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-wrap !w-[95px] justify-start">
        <p className="text-center text-[12px] font-semibold my-2">{item.name}</p>
      </div>
    </div>
  ))
}

        </div>
      </div>
      {/* {selectedHeadboard === "Without Headboard" ? "No headboards available":" board in the "} */}
      <div className='mt-4'></div>
                 <SlipLids
                  defaultText="Would You like to add a Mattress? - No"
                  buttonTexts={[
                    "No",
                    "Yes",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                  onButtonClick={handleButtonClick1}
                  dropdownVisible={dropdownVisible}
                  Mattressopetion={Mattressopetion}
                  // mattresses={mattresses}

                />

 <div>
 {dropdownVisible ? (
          <div className="min-h-[30vh] flex flex-col py-5 justify-center rounded-2xl items-center gap-5 bg-[#f1feff]">
          <div className="border-black border-[2px]  text-[#222222] font-semibold w-[85%] p-2 cursor-pointer rounded-2xl text-center">
        2ft6 Mattress Options 
      </div>
            

            <div className="flex gap-[1%] text-[0.8rem] h-[100px] hide-scrollbar overflow-y-scroll w-[100%] pb-4 justify-center text-center">
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
    
    </div>
    {Loading ? (
  <p className="text-lg font-semibold">Loading...</p>
) : (
  <div className="w-[85%] h-[150px] mb-2 overflow-y-scroll hide-scrollbar">
    <div className="w-[100%] mb-2">
      <div
        onClick={apiHandleDropdown}
        className="border-gray border-[2px] mb-2 p-2 py-8 cursor-pointer rounded-lg text-start bg-white text-gray-400"
      >
        {selectedMattress ? selectedMattress.name : '2ft6 Mattress Options'}
      </div>
      {isDropdownOpen && (
        <div className="border -mt-[96px] border-gray-300 rounded-lg bg-gray-50">
          {mattresses.map((mattress) => (
            <div
              key={mattress._id}
              onClick={() => {handleSelect(mattress)
                dispatch(addToCart(mattress));

                }
              }
              className="border-gray border-[2px] z-10  p-2 py-10 cursor-pointer rounded-lg text-start bg-white text-gray-400"
            >
              
              {mattress.name}
            </div>
          ))}
        </div>
      )}
    </div>
    
   
  </div>
)}


            </div>
          </div>
        ):""}

 
    </div>
                <SlipLids
                  defaultText="Assembly Service - No"
                  buttonTexts={[
                    "No",
                    "Yes",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                  onButtonClick={handleServiceClick}
                />
                <SlipLids
                  defaultText="Deliver To Room Service - No"
                  buttonTexts={[
                    "No",
                    "Yes +45",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                  onButtonClick={deliveryService}
                />
                <SlipLids
                  defaultText="Furniture Removal Service - No"
                  buttonTexts={[
                    "No",
                    "Yes",
                    // Add more button texts as needed
                  ]}
                  buttonStyles={buttonStyles}
                  onButtonClick={handleRemovalServiceClick}
                /> 
              </div>
              {DropdownVisibleRemovalServices ? (<>
                <SlipLids
          defaultText="Bed Size"
          buttonTexts={[
            "Single/Double",
            "King Size/ Super King",
            // Add more button texts as needed
          ]}
          buttonStyles={buttonStyles}
          onButtonClick={handleRemovalServiceClick}
        /> 
        <SlipLids
        defaultText="No. Items"
        buttonTexts={[
          "Base Only +£55",
          "Mattress Only +£55",
          "Base + Mattress +£75",
          "Base + Mattress + Headboard +£75",
          // Add more button texts as needed
        ]}
        buttonStyles={buttonStyles}
        onButtonClick={handleRemovalServiceClick}
      /> </>
        
        ):""}

              {/* counter */}
              <div className="mt-12">
                <div>
                  <p className="text-[#00acbb] font-semibold text-[1.2rem] mb-3">$ {amount}</p>

                  <div className="flex gap-5 max-md:justify-center my-14  items-center">
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
                      className={`bg-[#00acbb] w-[30%] hover:bg-[#00666e] text-sm text-white font-bold py-[0.6rem] px-8 rounded-2xl max-sm:py-[0.3rem] ${
                        shake ? "animate__animated animate__shakeX" : ""
                      }`}
                      onClick={() => {
                        // Create a new product object with the updated price
                        const productWithUpdatedPrice = { ...PId, price: amount,counter:counter };
                        handleIncrease()
                        dispatch(addToCart(productWithUpdatedPrice));
                        toggleSidebar();
                      }}
                      >
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
                    className={`flex w-[100%] justify-around my-10  items-center shadow-xl rounded-2xl py-2 min-h-[20vh] ${
                      isHidden ? "" : ""
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
                        className={`bg-[#00acbb] w-[60%] h-12 hover:bg-[#00666e] text-sm text-white font-bold py-[0.5rem] px-5 rounded-2xl max-sm:py-[0.3rem] ${
                          shake ? "animate__animated animate__shakeX" : ""
                        }`}
                        onClick={() => {
                          // Create a new product object with the updated price
                          const productWithUpdatedPrice = { ...PId, price: amount,counter:counter };
                          handleIncrease()
                          dispatch(addToCart(productWithUpdatedPrice));
                          toggleSidebar();
                        }}>Add to Cart
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
