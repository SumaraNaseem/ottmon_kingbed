"use client";
import "@fortawesome/fontawesome-free/css/all.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import "../../css/styles.css";
import Image from "next/image";
import logo from "../../assets/Sosoft-logo.png";
import search from "../../assets/search.svg";
import phoneimg from "../../assets/phoneimg.png";
import locationimg from "../../assets/location.svg";
import userimg from "../../assets/userimg.svg";
import basket from "../../assets/basket.svg";
import pricematch from "../../assets/price-match-icon.png";
import delivery from "../../assets/delivery-icon.png";
import fabric from "../../assets/fabric-swatches.png";
import trustpilot from "../../assets/trustpilot-icon.png";
import "../../css/styles.css";
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const ssss = useRouter()

  const { cartItems } = useSelector((reducers) => reducers.cartReducer);
  console.log(cartItems,'cartItems__')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");
  const router = useRouter()
  // Material sizes for Beds
  const [BedOpen, setBedOpen] = useState(false);
  const [shopByBedSize, setshopByBedSize] = useState(false);
  const [shopByBedType, setShopByBedType] = useState(false);
  const [shopByBedMaterial, setShopByBedMaterial] = useState(false);
  // const [shopByBedFirmness, setShopByBedFirmness] = useState(false);

  // Material sizes for Matresses
  const [shopBySize, setshopBySize] = useState(false);
  const [matressesOpen, setIsMatressesOpen] = useState(false);
  const [shopByType, setShopByType] = useState(false);
  const [shopByFirmness, setShopByFirmness] = useState(false);
  const [discountBeds, setDiscountBeds] = useState(false);
  const [showLoftBeds, setShowLoftBeds] = useState(false)

  // Material sizes for Accessories
  const [accessoriesOpen, setIsAccessoriesOpen] = useState(false);

  const displayBedShops = () => {
    setshopByBedSize(!shopByBedSize);
    // setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
    setShopByType(!setShopByType);
  };

  // show matresses when backward button is clicked
  const displayMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMatressesOpen(false);
    setBedOpen(false);
    setIsMatressesOpen(false);
    setIsAccessoriesOpen(false);
  };

  const showMattresesBySize = () => {
    setIsMatressesOpen(!matressesOpen);
    setshopBySize(false);
  };
  const showMattresesByType = () => {
    setIsMatressesOpen(!matressesOpen);
    setShopByType(false);
  };
  const showMattresesByFirmness = () => {
    setIsMatressesOpen(!matressesOpen);
    setShopByFirmness(false);
  };

  // show beds when backward button is clicked
  const showBedsBySize = () => {
    setBedOpen(!BedOpen);
    setshopByBedSize(false);
  };
  const showBedsByType = () => {
    setBedOpen(!BedOpen);
    setShopByBedType(false);
  };
  const showBedsByMaterial = () => {
    setBedOpen(!BedOpen);
    setShopByBedMaterial(false);
  };

  const displayShopsBedSizes = () => {
    setShopByBedType(!shopByBedType);
    setIsMatressesOpen(!matressesOpen);
    setBedOpen(!BedOpen);
  };
  const displayShopsBedTypes = () => {
    setShopByBedType(!shopByBedType);
    setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
  };
  const displayShopsBedMaterials = () => {
    setShopByBedMaterial(!shopByBedMaterial);
    setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
  };
  const displayDiscountBeds = () => {
    setDiscountBeds(!discountBeds);
    setIsMatressesOpen(false);
    setBedOpen(!BedOpen);
  };

  const displayLoftBeds = () => {
    setShowLoftBeds(!showLoftBeds);
  };

  const displayBed = () => {
    setBedOpen(true);
    setIsDropdownOpen(false);
    setIsMatressesOpen(false);
    setIsAccessoriesOpen(false);
  };
  const displayAccessories = () => {
    setBedOpen(false);
    setIsDropdownOpen(false);
    setIsAccessoriesOpen(true);
    setIsMatressesOpen(false);
  };

  const displayMatresses = () => {
    setIsMatressesOpen(!matressesOpen);
    setIsDropdownOpen(false);
    setBedOpen(false);
    setIsAccessoriesOpen(false);
  };
  const displayShops = () => {
    setshopBySize(!shopBySize);
    setIsMatressesOpen(!matressesOpen);
  };
  const displayShopsSizes = () => {
    setShopByType(!shopByType);
    setIsMatressesOpen(!matressesOpen);

  };
  const exitShopByBedTypeDropdown = () => {
    setShopByBedType(!shopByBedType);
  };
  const exitShopByBedMaterialDropdown = () => {
    setShopByBedMaterial(!shopByBedMaterial);
  };
  const exitDiscountBedsDropdown = () => {
    setDiscountBeds(!discountBeds);
    setShopByBedType(false)
    setBedOpen(false)
  };
  const exitDisplayLoftBeds = () => {
    setShowLoftBeds(!showLoftBeds);
    setShopByBedType(false)
    setBedOpen(false)
  };

  const displayShopByFirmness = () => {
    setShopByFirmness(!shopByFirmness);
    setIsMatressesOpen(!matressesOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMatressesOpen(false);
    setshopBySize(false);
    setShopByType(false);
    setShopByFirmness(false);
  };

  const exitBedSizeDropdown = () => {
    setshopByBedSize(!shopByBedSize);
  };
  const exitDropdown = () => {
    console.log('function called')
    // Perform any necessary actions before closing the dropdown
    // For example, triggering the animation
    const dropdown = document.querySelector(".dropdown-content");
    if (dropdown) {
      dropdown.classList.remove("animate__slideInLeft");
      dropdown.classList.add("animate__slideOutLeft");
    }

    // Delay closing the dropdown to allow the animation to finish
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000); // Adjust the delay based on your animation duration

    // Hide the backdrop
    const backdrop = document.querySelector(".backdrop");
    if (backdrop) {
      backdrop.style.display = "none";
    }
  };

  const exitMatressesDropdown = () => {
    setIsMatressesOpen(!matressesOpen);
  };

  const exitAccessoriesDropdown = () => {
    setIsAccessoriesOpen(!accessoriesOpen);
  };

  const exitBedDropdown = () => {
    setBedOpen(!BedOpen);
  };
  const exitShopDropdown = () => {
    setshopBySize(!shopBySize);
  };
  const exitShopByFirmness = () => {
    setShopByFirmness(!shopByFirmness);
  };
  const exitShopByTypeDropdown = () => {
    setShopByType(!shopByType);
  };

  useEffect(() => {
    const handleToggleScroll = () => {
      // Toggle the body scroll based on dropdown state
      document.body.style.overflow = isDropdownOpen ? "hidden" : "auto";
    };

    handleToggleScroll();

    return () => {
      document.body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen) {
        // Check if the click occurred inside the dropdown or on the hamburger icon
        if (
          !event.target.closest(".dropdown-content") &&
          !event.target.closest(".hamburger-icon") &&
          !event.target.closest(".mattress-dropdown")
        ) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="py-5 max-xl:py-0">
      <header className="flex flex-col relative max-xl:px-3 max-sm:px-1">
        <nav className="h-[15vh]  py-3 flex items-center gap-[5%] max-xl:flex-col ">
          <div className="flex items-center w-[55%] justify-end gap-[10%] max-xl:gap-[5%]  max-xl:w-[100%] max-sm:h-[100%]">
            <Link href={"/"}>
              <Image
                className="max-xl:w-32 max-sm:w-24"
                src={logo}
                width={170}
                height={170}
                alt="logo"
              />
            </Link>

            <div className="flex items-center max-sm:self-end w-[100%]  max-md:px-2 relative">
              <div className="flex items-center w-[100%] z-10 ">
                {/* <button
                  className="hidden max-md:block  w-[10%] text-[1.2rem] max-sm:relative max-sm:left-10  max-[400px]:py-[0.1rem] py-2 max-lg:border-[1px] cursor-pointer"
                  onClick={sideDropdown}
                >
                  &#9776;
                </button> */}

                <div className="flex relative w-[100%] max-md:hidden">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border-[#0b1a44]  rounded-xl  bg-[#f2f2f2] border-[1.5px] outline-none h-[2.8rem] px-2  placeholder-bold  w-[100%] max-xl:w-[50%] "
                    style={{ fontWeight: "bold", fontSize: "0.8rem" }}
                  />
                  <Image
                    className="z-50 absolute right-3 max-xl:right-[52%] top-1/2 -translate-y-1/2"
                    src={search}
                    width={15}
                    height={15}
                    alt="search"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* {isDropdownOpen && (
            <div
              className="fixed left-0 top-0 w-full h-full bg-[#00000066] z-50 max-md:block backdrop"
          onClick={exitDropdown}
            ></div>
          )}

          {matressesOpen && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => {
                setIsMatressesOpen(false);
                // setBedOpen(false);
              }}
            ></div>
          )}
          {BedOpen && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setBedOpen(false)}
            ></div>
          )}

          {shopBySize && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setshopBySize(false)}
            ></div>
          )}
          {shopByType && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setShopByType(false)}
            ></div>
          )}
          {shopByFirmness && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setShopByFirmness(false)}
            ></div>
          )}

          {shopByBedSize && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setshopByBedSize(false)}
            ></div>
          )}

          {shopByBedType && (
            <div
              className="fixed  left-0 top-0 w-full h-full bg-[#00000066] hidden z-50 max-md:block"
              onClick={() => setShopByBedType(false)}
            ></div>
          )} */}

          <div className="w-[40%] flex gap-[10%] max-xl:absolute max-xl:h-[15vh] max-xl:top-0 max-xl:items-center  right-0 max-xl:justify-end  max-xl:gap-[5%] max-xl:w-[80%] max-lg:w-[70%] max-md:w-[100%] max-xl:px-5 max-sm:items-center">
            <div className="flex items-center cursor-pointer mr-5 max-sm:mr-2">
              <div className="flex flex-col justify-center">
                <Image
                  src={phoneimg}
                  width={35}
                  height={35}
                  alt="phone"
                  className="max-xl:w-5 max-xl:h-5"
                />
                <span className="font-bold text-[0.6rem] hidden max-xl:inline ">
                  phone
                </span>
              </div>
              <span className="font-bold max-xl:text-[0.8rem] max-xl:hidden">
                0151 548 1554
              </span>
            </div>

            <div className="flex items-center gap-10 max-sm:gap-5">
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <Image src={locationimg} width={13} height={13} alt="Showrooms" />
                <span className="font-bold text-[0.6rem]">Showrooms</span>
              </div>

              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <Image src={userimg} width={18} height={18} alt="Account" />
                <span onClick={()=>{
                  ssss.push('/Users/SignUp')
                }} className="font-bold text-[0.6rem]">Account</span>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <Image src={basket} onClick={()=>{
                  ssss.push('/NewPaymentCardSetup')
                }} width={18} height={18} alt="Basket" />
                 
             <span onClick={() => ssss.push('/NewPaymentCardSetup', { scroll: false })} className="font-bold text-[0.6rem] ">Basket 
             <span class="bg-red-100 text-red-800 text-xs font-medium     py-0.5 rounded dark:bg-red-900 dark:text-red-300" style={{marginLeft:'2px'}}>{cartItems.length}</span>

             {/* <span className="w-20 h-20 text-12 bg-black text-white "> {cartItems.length}</span>  */}
            
              </span>
              </div>
              
            </div>
          </div>
        </nav>
        <nav className=" relative  max-md:hidden  bg-[#EEEEEE] py-3 px-3">
          <ul className="m-0 p-0 h-[100%]  text-[0.9rem] flex items-center justify-evenly flex-wrap max-xl:text-[0.8rem] max-2xl:w-[100%]">
            <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white font-semibold relative">
              <Link href={'/'}>Home</Link>
            </li>

            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <Link href={'#'}>Mattresses</Link>
              </li>

              <div className=" bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[65vw] bg-white shadow-xl  z-50 dropdowncontent mattress-content h-[65vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className="  top-0  w-[28%] h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4  font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Type
                  </li>
                  <li className="">
                    <Link href="/mattresses/MemoryFoam" className="hover:text-[#08c]">
                      Memory Foam
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/mattresses/PocketSprung" className="hover:text-[#08c]">
                      Pocket Sprung
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/mattresses/Orthopaedic" className="hover:text-[#08c]">
                      Orthopaedic
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/Latex" className="hover:text-[#08c]">
                      Latex
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/Miracoil" className="hover:text-[#08c]">
                      Miracoil
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/NaturalFillings" className="hover:text-[#08c]">
                      Natural Fillings
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/CutBedMattresses" className="hover:text-[#08c]">
                      Cut Bed Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/KidsMattresses" className="hover:text-[#08c]">
                      Kids Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/NextDayMattresses" className="hover:text-[#08c]">
                      Next Day Mattresses
                    </Link>
                  </li>
                </ul>
                <ul className=" border-[2px] w-[25%]  h-[100%] px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Firmness
                  </li>
                  <li className="">
                    <Link href="/mattresses/ExtraFirm" className="hover:text-[#08c]">
                      Extra Firm
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/mattresses/Firm" className="hover:text-[#08c]">
                      Firm
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/mattresses/MediumFirm" className="hover:text-[#08c]">
                      Medium Firm
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/Medium" className="hover:text-[#08c]">
                      Medium
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/SoftFirm" className="hover:text-[#08c]">
                      Soft Firm
                    </Link>
                  </li>
                </ul>
                <ul className=" w-[25%]  h-[100%] flex flex-col px-10 box-border py-8  max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Size
                  </li>
                  <li className="">
                    <Link href="/mattresses/SuperKing" className="hover:text-[#08c]">
                      Super King(6&apos;)
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/mattresses/KingSize" className="hover:text-[#08c]">
                      King Size(5&apos;)
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/mattresses/Double" className="hover:text-[#08c]">
                      Double(4&apos; 6&apos;&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/SmallDouble" className="hover:text-[#08c]">
                      Small Double(4&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/Single" className="hover:text-[#08c]">
                      Single(3&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/SmallSingle" className="hover:text-[#08c]">
                      Small Single(2&apos; 6&apos;&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/mattresses/European" className="hover:text-[#08c]">
                      European
                    </Link>
                  </li>
                </ul>

                <ul className=" w-[25%]  h-[100%] relative ">
                  <Image
                    src="/mattress-menu.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-b-2xl"
                  />
                </ul>

                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl">
                  <button onClick={() => router.push('/mattresses')} className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Matresses</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <Link href={'#'}>Beds</Link>
              </li>
              <div className="bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[60vw] bg-white shadow-xl  z-50 dropdowncontent mattress-content h-[65vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className=" w-[33%]  h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4  font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Type
                  </li>
                  <li className="">
                    <Link href="/beds/memoryFoam" className="hover:text-[#08c]">
                      Memory Foam
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/beds/PocketSprung" className="hover:text-[#08c]">
                      Pocket Sprung
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/beds/Orthopaedic" className="hover:text-[#08c]">
                      Orthopaedic
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/Latex" className="hover:text-[#08c]">
                      Latex
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/Miracoil" className="hover:text-[#08c]">
                      Miracoil
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/NaturalFillings" className="hover:text-[#08c]">
                      Natural Fillings
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/CutBedMattresses" className="hover:text-[#08c]">
                      Cut Bed Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/KidsMattresses" className="hover:text-[#08c]">
                      Kids Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/NextDayMattresses" className="hover:text-[#08c]">
                      Next Day Mattresses
                    </Link>
                  </li>
                </ul>

                <ul className="border w-[33%] h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4  font-semibold text-[1rem] max-lg:text-[0.9rem]">
                    {" "}
                    Shop by Size
                  </li>
                  <li className="">
                    <Link href="/beds/SuperKingsBeds" className="hover:text-[#08c]">
                      Super Kings Beds(6&apos;)
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/beds/KingSizeBeds" className="hover:text-[#08c]">
                      King Size Beds(5&apos;)
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/beds/DoubleBeds" className="hover:text-[#08c]">
                      Double Beds(4&apos; 6&apos;&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/SmallDoubleBeds" className="hover:text-[#08c]">
                      Small Double Beds(4&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/SingleBeds" className="hover:text-[#08c]">
                      Single Beds(3&apos;)
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/beds/SmallSingleBeds" className="hover:text-[#08c]">
                      Small Single Beds(2&apos; 6&apos;&apos;)
                    </Link>
                  </li>{" "}
                  <li className=" absolute right-5 bottom-5">
                    {" "}
                    <button
                      onClick={() => router.push('/beds')}
                      className="bg-[#08c]  text-white px-8 py-[0.8rem] inline-block h-[100%] hover:bg-[#3b82f680]  transition border-color text duration-100 ease-out delay-0 font-semibold"
                    >
                      View All Beds
                    </button>
                  </li>
                </ul>
                <ul className=" w-[33%] h-[100%] relative">
                  <Image
                    src="/divan-beds-menu.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </ul>

                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl">
                  <button onClick={() => { router.push('/beds'); exitBedDropdown() }} className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Beds</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span><Link href={'#'}>Accessories</Link></span>
              </li>

              <div onClick={exitAccessoriesDropdown} className="bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[60vw] bg-white shadow-xl  z-50 dropdowncontent accessories-content h-[60vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className="py-8 px-10 relative h-[100%] max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="">
                    <Link href="/accessories/Pillows" className="hover:text-[#08c]">
                      Pillows
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/accessories/Duvetts" className="hover:text-[#08c]">
                      Duvetts
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/accessories/MattressToppers" className="hover:text-[#08c]">
                      Mattress Toppers
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/accessories/Headboards" className="hover:text-[#08c]">
                      Headboards
                    </Link>
                  </li>
                </ul>

                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl">
                  <button onClick={() => router.push('/accessories')} className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Accessories</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center relative dropdown">
              <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
                <span><Link href={'/sales'}>Sales</Link></span>
              </li>

              <div className="bottom-[3%] relative max-xl:bottom-[-3%] max-lg:bottom-[-5%] w-[60vw] bg-white shadow-xl  z-50 dropdowncontent sales-content h-[60vh] max-lg:h-[70vh] max-lg:w-[70vw] hidden rounded-b-2xl">
                <ul className="  w-[33%]  h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1.2rem]">Sale</li>
                  <li className="">
                    <Link href="/sales/DivanBeds" className="hover:text-[#08c]">
                      Divan Beds
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/sales/DivanBasesOnly" className="hover:text-[#08c]">
                      Divan Bases Only
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/sales/BedFrames" className="hover:text-[#08c]">
                      Bed Frames
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/sales/Mattresses" className="hover:text-[#08c]">
                      Mattresses
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/sales/Headboards" className="hover:text-[#08c]">
                      Headboards
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/sales/Furniture" className="hover:text-[#08c]">
                      Furniture
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/sales" className="hover:text-[#08c]">
                      All Sale Products
                    </Link>
                  </li>
                </ul>

                <ul className="  w-[33%] border-[1px] h-[100%]  px-10 py-8 max-xl:px-5 max-xl:py-5 leading-8 max-lg:leading-7">
                  <li className="my-4 font-semibold text-[1.2rem]">
                    {" "}
                    Clearance
                  </li>
                  <li className="">
                    <Link href="/clearance/DivanBases" className="hover:text-[#08c]">
                      Divan Bases
                    </Link>{" "}
                  </li>
                  <li className="">
                    <Link href="/clearance/Mattresses" className="hover:text-[#08c]">
                      Mattresses
                    </Link>
                  </li>
                  <li className="">
                    {" "}
                    <Link href="/clearance/BedFrames" className="hover:text-[#08c]">
                      Bed Frames
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/clearance/Headboards" className="hover:text-[#08c]">
                      Headboards
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/clearance/Furniture" className="hover:text-[#08c]">
                      Furniture
                    </Link>
                  </li>
                  <li className="">
                    <Link href="/clearance/ClearanceBundles" className="hover:text-[#08c]">
                      Clearance Bundles
                    </Link>
                  </li>
                </ul>
                <ul className="  top-0  border-[2px] w-[33%]   h-[100%] relative">
                  <Image
                    src="/bedfactory-sale-menu.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </ul>

                <div className="absolute bg-[white] w-[100%] bottom-0 h-[10%]  border-t-[1px] rounded-b-2xl ">
                  <button onClick={() => router.push('/sales')} className="bg-[#08c] absolute right-[10%] flex gap-5 items-center text-sm text-white px-4 py-[0.6rem]  h-[100%] hover:bg-[#44bcf7] transition border-color text duration-100 ease-out delay-0">
                    <span> View All Sales</span>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* <li className="  p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>About Us</span>
            </li> */}
            {/* <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>Deliver Information</span>
            </li> */}
            {/* <div className="flex flex-col items-center relative dropdown"> */}
            {/* <li className="p-3 cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>FAQs</span>
            </li> */}

            {/* <li className="p-3  cursor-pointer hover:bg-[#08c] hover:text-white  font-semibold relative listitem">
              <span>Advice Centre</span>
            </li> */}
            <li className="p-3  cursor-pointer bg-[#08c] text-white  font-semibold relative listitem">
              <span>Order Swatches</span>
            </li>
          </ul>
        </nav>

        <div className=" relative w-[100%] hidden max-md:flex border-[2px] border-[#e3e3e5]">
          <div
            className="w-[10%] cursor-pointer flex items-center justify-center hamburger-icon"
            onClick={toggleDropdown}
          >
            <span className="text-[1.2rem] block  font-bold">&#9776;</span>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="   bg-[#f2f2f2]  border-[1.5px] border-[#e3e3e5] h-[2.8rem] px-2  placeholder-bold  w-[80%] "
            style={{ fontWeight: "bold", fontSize: "0.8rem" }}
          />
          <div className="w-[10%] flex justify-center items-center cursor-pointer">
            <Image
              className="z-50  cursor-pointer"
              src={search}
              width={15}
              height={15}
              alt="searchbox"
            />
          </div>
        </div>

        <div className="z-50 hidden max-md:block">
          {isDropdownOpen && (
            <div
              className={`absolute top-0 h-[100vh] custom-animation bg-white left-0 border-[2px] animate__animated border-[#e3e3e5] dropdown-content w-[100%] ${isDropdownOpen
                ? "animate__slideInLeft"
                : "animate__slideOutLeft"
                }`}
            >
              <div className="text-[0.9rem]  flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <span>Menu</span>
                {""}
                <div onClick={exitDropdown} className="flex items-center gap-1">
                  <span>Close</span>
                  {""}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="h-[100%] w-[100%]">
                <div
                  onClick={displayMatresses}
                  className="text-[0.9rem]  border-[1px] p-4 flex  gap-8 items-center cursor-pointer font-bold"
                >
                  <span> Mattresses</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <div
                  onClick={displayBed}
                  className="text-[0.9rem] p-4 border-[1px] flex gap-8 cursor-pointer items-center  font-bold"
                >
                  <span> Beds</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div
                  onClick={displayAccessories}
                  className="text-[0.9rem] flex gap-8 p-4 items-center border-[1px]   cursor-pointer  font-bold"
                >
                  <span> Accessories</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
                <div onClick={() => { router.push('/sales'); exitDropdown() }} className="text-[0.9rem] p-4 border-[1px] items-center  flex gap-8 cursor-pointer  font-bold">
                  <span> Sale</span>{" "}
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <div className="leading-8 py-3">
                  <div className="text-[0.9rem] px-4 py-2 cursor-pointer  ">
                    About Us
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer  ">
                    Delivery Information
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer">
                    FAQs
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer ">
                    Advise Centre
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="relative">
              {/* Matresses Open */}

              {matressesOpen && (
                <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={displayMenu}
                      ></i>{" "}
                      <span>Mattresses</span>{" "}
                    </div>
                    <div
                      onClick={exitMatressesDropdown}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>
                  <div
                    onClick={displayShops}
                    className="text-[0.9rem] flex p-4 gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                  >
                    <span> Shop by Size</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>

                  <div
                    onClick={displayShopsSizes}
                    className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                  >
                    <span> Shop by Type</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div
                    onClick={displayShopByFirmness}
                    className="text-[0.9rem]  gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold"
                  >
                    <span> Shop by Firmness</span>{" "}
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                  <div onClick={() => { router.push('/mattresses'); exitDropdown() }} className="text-[0.9rem] p-4 flex gap-8 items-center cursor-pointer text-[#08c] font-semibold">
                    <span> All Matresses</span>{" "}
                  </div>
                </div>
              )}

              {shopBySize && (
                <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={showMattresesBySize}
                      ></i>{" "}
                      <span>Shop By Size</span>{" "}
                    </div>
                    <div
                      onClick={exitShopDropdown}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>
                  <div className="leading-8">
                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] border px-4 py-2  items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Super King(6&apos;)</span>{" "}
                    </div>

                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 border py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span> King Size(5&apos;)</span>{" "}
                    </div>
                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border fles cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span> Double(4&apos; 6&apos;&apos;)</span>{" "}
                    </div>
                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span> Small Double(4&apos;)</span>{" "}
                    </div>
                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span> Single(3&apos;)</span>{" "}
                    </div>
                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Small Single(2&apos; 6&apos;&apos;)</span>{" "}
                    </div>
                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>European</span>{" "}
                    </div>
                    <div onClick={() => exitShopDropdown()} className="text-[0.9rem] px-4 py-2 border bg-[#eee] cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <Link href="/mattresses" className="text-[#08c] font-semibold">
                        View All Matresses
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {shopByType && (
                <div className="bg-white  fixed top-0 w-[100%]  h-[100vh] left-0">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={showMattresesByType}
                      ></i>{" "}
                      <span>Shop By Type</span>{" "}
                    </div>
                    <div
                      onClick={exitShopByTypeDropdown}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>

                  <div className="leading-8" onClick={exitShopByTypeDropdown}>
                    <div className="text-[0.9rem] border  px-4 py-2  items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Memory Foam</span>{" "}
                    </div>

                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Pocket Sprung</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2 border fles cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Orthopaedic</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Latex</span>{" "}
                    </div>
                    {/* <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Miracoil</span>{" "}
                  </div>
                  <div className="text-[0.9rem] px-4 py-2  cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                    <span>Cot Bed Mattresses</span>{" "}
                  </div> */}
                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Natural Fillings</span>{" "}
                    </div>

                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Kids Mattresses</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Next Day Mattresses</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2 border bg-[#eee] cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <Link href="/mattresses" className="text-[#08c] font-semibold">
                        View All Matresses
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {shopByFirmness && (
                <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
                  <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                    <div className="flex items-center gap-5">
                      <i
                        className="fa fa-chevron-left"
                        aria-hidden="true"
                        onClick={showMattresesByFirmness}
                      ></i>{" "}
                      <span>Shop By Firmness</span>{" "}
                    </div>
                    <div
                      onClick={exitShopByFirmness}
                      className="flex items-center gap-1"
                    >
                      <span>Close</span>{" "}
                      <span className="text-[1.5rem]">&times;</span>
                    </div>
                  </div>
                  <div className="leading-8" onClick={exitShopByFirmness}>
                    <div className="text-[0.9rem]  px-4 py-2 border items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Extra Firm</span>{" "}
                    </div>

                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Firm</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Medium-Firm</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Medium</span>{" "}
                    </div>
                    <div className="text-[0.9rem] px-4 py-2 border cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <span>Soft-Medium</span>{" "}
                    </div>

                    <div className="text-[0.9rem] px-4 py-2 border bg-[#eee] cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                      <Link href="/mattresses" className="text-[#08c] font-semibold">
                        View All Matresses
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bed Open */}

          {BedOpen && (
            <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex gap-5 items-center">
                  {" "}
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={displayMenu}
                  ></i>{" "}
                  <span>Bed</span>{" "}
                </div>
                <div
                  onClick={exitBedDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div
                onClick={displayBedShops}
                className="text-[0.9rem] flex p-4 border gap-8 items-center cursor-pointer  font-semibold"
              >
                <span> Shop by Size</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>

              <div
                onClick={displayShopsBedTypes}
                className="text-[0.9rem] p-4 border flex gap-8 items-center cursor-pointer  font-semibold"
              >
                <span> Shop by Type</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
              <div
                onClick={displayShopsBedMaterials}
                className="text-[0.9rem] p-4 flex border gap-8 items-center cursor-pointer  font-semibold"
              >
                <span> Shop by Material</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
              <div onClick={() => { router.push('/beds'); exitBedDropdown() }} className="text-[0.9rem] bg-[#eee] text-[#08c] border p-4 flex gap-8 items-center cursor-pointer  font-semibold">
                <span> All Beds</span>{" "}
              </div>
            </div>
          )}

          {shopByBedSize && (
            <div className="bg-white  fixed top-0 w-[100%]  h-[100vh] left-0">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={showBedsBySize}
                  ></i>{" "}
                  <span>Shop By Size</span>{" "}
                </div>
                <div
                  onClick={exitBedSizeDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="leading-8" onClick={exitBedSizeDropdown}>
                <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                  <span>SuperKing Beds(6&apos;)</span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span> King Size Beds(5&apos;)</span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                  <span> Double Beds(4&apos; 6&apos;&apos;)</span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span> Small Double Beds(4&apos;)</span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span> Single Beds(3&apos;)</span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span>Small Single Beds(2&apos; 6&apos;&apos;)</span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <Link href="/beds" className="text-[#08c] font-semibold">
                    View All Beds
                  </Link>
                </div>
              </div>
            </div>
          )}
          {shopByBedType && (
            <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={showBedsByType}
                  ></i>{" "}
                  <span>Shop By Type</span>{" "}
                </div>
                <div
                  onClick={exitShopByBedTypeDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="leading-8" >
                <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                  <span>Bed frames</span>{" "}
                </div>

                <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span> Divan beds</span>{" "}
                </div>
                <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span>Guests Beds</span>{" "}
                </div>
                <div onClick={exitShopByBedTypeDropdown} className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span>Next Day Beds</span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <div className="flex items-center gap-5" onClick={displayDiscountBeds}>
                    <span>Discount Beds</span>{" "}
                    <i
                      className="fa fa-chevron-right"
                      aria-hidden="true"

                    ></i>{" "}
                  </div>
                </div>
                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <div className="flex items-center gap-5" onClick={displayLoftBeds}>
                    <span>Loft Beds</span>{" "}
                    <i
                      className="fa fa-chevron-right"
                      aria-hidden="true"

                    ></i>{" "}
                  </div>
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold" onClick={exitShopByBedTypeDropdown}>
                  <Link href="/beds" className="text-[#08c] font-semibold">
                    View All Beds
                  </Link>
                </div>
              </div>
            </div>
          )}

          {shopByBedMaterial && (
            <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={showBedsByMaterial}
                  ></i>{" "}
                  <span>Shop By Material</span>{" "}
                </div>
                <div
                  onClick={exitShopByBedMaterialDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="leading-8" onClick={exitShopByBedMaterialDropdown}>
                <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                  <span>Wooden Bed frames</span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span>Fabric Bed Frames</span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                  <span> Metal Frame Beds</span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <Link href="/beds" className="text-[#08c] font-semibold">
                    View All Beds
                  </Link>
                </div>
              </div>
            </div>
          )}
          {discountBeds && (
            <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={displayDiscountBeds}
                  ></i>{" "}
                  <span>Discount Beds</span>{" "}
                </div>
                <div
                  onClick={exitDiscountBedsDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="leading-8" onClick={exitDiscountBedsDropdown}>
                <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                  <span>Small Single (2&apos; 6&apos;&apos;)
                  </span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span>Single (3&apos;)
                  </span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                  <span> Small Double (4&apos;)
                  </span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                  <span> Double (4&apos; 6&apos;&apos;)
                  </span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <Link href="/beds" className="text-[#08c] font-semibold">
                    View All Beds
                  </Link>
                </div>
              </div>
            </div>
          )}
          {showLoftBeds && (
            <div className="bg-white  fixed top-0 w-[100%] h-[100vh] left-0">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={() => { setShowLoftBeds(p => !p); setBedOpen(false); setShopByBedType(true) }}
                  ></i>{" "}
                  <span>Loft Beds</span>{" "}
                </div>
                <div
                  onClick={exitDisplayLoftBeds}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div className="leading-8" onClick={exitDisplayLoftBeds}>
                <div className="text-[0.9rem]  px-4 py-2  items-center cursor-pointer  hover:text-white font-semibold">
                  <span>Double (4&apos; 6&apos;&apos;) - 4 Pieces
                  </span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <span>King Size (5&apos; 4&apos;&apos;) - 4 Pieces
                  </span>{" "}
                </div>
                <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                  <span>Superking (6&apos;) - 4 Pieces
                  </span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                  <span>Single Bed (3&apos; 2&apos;&apos;) - 2 Pieces
                  </span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2 fles cursor-pointer   font-semibold">
                  <span>Single Bed (2&apos; 6&apos;&apos;) - 2 Pieces
                  </span>{" "}
                </div>

                <div className="text-[0.9rem] px-4 py-2  cursor-pointer   font-semibold">
                  <Link href="/beds" className="text-[#08c] font-semibold">
                    View All Beds
                  </Link>
                </div>
              </div>
            </div>
          )}

          {matressesOpen && (
            <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={displayMenu}
                  ></i>{" "}
                  <span>Mattresses</span>{" "}
                </div>
                <div
                  onClick={exitMatressesDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div
                onClick={displayShops}
                className="text-[0.9rem] flex p-4 border gap-8 items-center cursor-pointer  font-semibold"
              >
                <span> Shop by Size</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>

              <div
                onClick={displayShopsSizes}
                className="text-[0.9rem] p-4 flex border gap-8 items-center cursor-pointer  font-semibold"
              >
                <span> Shop by Type</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
              <div
                onClick={displayShopByFirmness}
                className="text-[0.9rem]  gap-8 border items-center p-4 flex cursor-pointer  font-semibold"
              >
                <span> Shop by Firmness</span>{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
              <div onClick={() => { router.push('/mattresses'); exitMatressesDropdown() }} className="text-[0.9rem] p-4 bg-[#eee] flex gap-8 items-center cursor-pointer text-[#08c] font-semibold">
                <span> All Matresses</span>{" "}
              </div>
            </div>
          )}

          {accessoriesOpen && (
            <div className="mattress-dropdown h-[100vh] fixed bg-white top-0 left-0 w-[100%]">
              <div className="text-[0.9rem] flex justify-between items-center p-3 cursor-pointer bg-[#08c] text-white font-semibold">
                <div className="flex items-center gap-5">
                  <i
                    className="fa fa-chevron-left"
                    aria-hidden="true"
                    onClick={displayMenu}
                  ></i>{" "}
                  <span>Accessories</span>{" "}
                </div>
                <div
                  onClick={exitAccessoriesDropdown}
                  className="flex items-center gap-1"
                >
                  <span>Close</span>{" "}
                  <span className="text-[1.5rem]">&times;</span>
                </div>
              </div>
              <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border flex p-4 gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                <span>Pillows</span>{" "}
              </div>

              <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border p-4 flex gap-8 items-center cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                <span> Duvets</span>{" "}
              </div>
              <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                <span>Mattress Protectors</span>{" "}
              </div>
              <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                <span>Mattress Toppers</span>{" "}
              </div>
              <div onClick={exitAccessoriesDropdown} className="text-[0.9rem] border gap-8 items-center p-4 flex cursor-pointer hover:bg-[#08c] hover:text-white font-semibold">
                <span>Headboards</span>{" "}
              </div>
              <div onClick={() => { router.push('/accessories'); exitAccessoriesDropdown() }} className="text-[0.9rem] p-4 border bg-[#eee] flex gap-8 items-center cursor-pointer text-[#08c] font-semibold">
                <span> All Accessories</span>{" "}
              </div>
            </div>
          )}
        </div>

        <nav className="h-[10vh] py-3 relative max-md:hidden">
          <ul className="p-0 m-0 w-[75%] absolute left-1/2  top-0 h-[100%] flex justify-between -translate-x-1/2  px-2 items-center max-xl:text-[0.8rem] max-2xl:w-[100%] max-md:hidden">
            <li className="flex items-center gap-2 cursor-pointer">
              <Image src={pricematch} width={23} height={23} alt="price" />
              <span>Price Match Guarantee</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <Image src={delivery} width={23} height={23} alt="delivery" />
              <span>Free Delivery Over</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <Image src={fabric} width={23} height={23} alt="fabric" />
              <span>Free Fabric Samples</span>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <Image src={trustpilot} width={23} height={23} alt="trustpilot" />
              <span>Five Star Trust Pilot Reviews</span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
