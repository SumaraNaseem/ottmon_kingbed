'use client'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useRef, useState  } from 'react'
import { addToCart,Removecart } from "./../app/Redux/Action/actions";
import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from 'next/navigation';
import { useRouter } from 'next/navigation';
const ProductCardsale = ({ name,itemOffset, price, image, hoverImage, discount, size, category, selectedGrid, index, pageType ,CallingFrom}) => {
    const imageRef = useRef();
    const icon1Ref = useRef();
    const icon2Ref = useRef();
    // const ssss = useRouter()
    const router = useRouter();
    const dispatch = useDispatch();
    const isMattresses = pageType === 'Mattress'
    // const goToUser = (id) => {
    //   router.push(`/products/slug/${id}`);
    // }
    useEffect(() => {
        if (!imageRef || !icon1Ref || !icon2Ref) return
        if (!isMattresses) {
            imageRef.current?.addEventListener('mouseover', addHoverImage)
            imageRef.current?.addEventListener('mouseleave', removeHoverImage)
            return () => {
                imageRef.current?.removeEventListener('mouseover', addHoverImage)
                imageRef.current?.removeEventListener('mouseleave', removeHoverImage)
            }
        }
    }, [])
    const addHoverImage = () => {
        icon1Ref.current.style.display = 'inline-block';
        icon2Ref.current.style.display = 'inline-block';
        imageRef.current.src = '/SampleProduct2.jpg'
    }
    const removeHoverImage = () => {
        icon1Ref.current.style.display = 'none';
        icon2Ref.current.style.display = 'none';
        imageRef.current.src = '/SampleProduct.jpg'
    }
    const [Loading ,setLoading] =useState(false)
    const [mattresses, setMattresses] = useState([]);
    console.log(CallingFrom,'CallingFrom___')




    useEffect(() => {
        setLoading(true)
      const fetchMattresses = async () => {
        try {
          const response = await axios.get("https://ottomonukbackup1.vercel.app/sales");
          console.log("API Response:___", response.data);
          setLoading(false)
          const filters = {
            DivanBeds: 'Divan Beds',
            DivanBasesOnly: 'Divan Bases Only',
            BedFrames: 'Bed Frames',
            Mattresses: 'Mattresses',
            Headboards: 'Headboards',
            Furniture: 'Furniture',
            AllSales: 'All Sales',
            ClearanceBundles :'Clearance Bundles'
           
          };
    
          const filteredData = response.data.salesData.filter(
            (value) => value.type === filters[CallingFrom]
          );
          const itemsPerPage = 10;
          const startIdx = itemOffset;
          const endIdx = itemOffset + itemsPerPage;
          const paginatedData = filteredData.slice(startIdx, endIdx);
          setMattresses(paginatedData);

          if(CallingFrom==='Sales'){
            const itemsPerPage = 10;
            const startIdx = itemOffset;
            const endIdx = itemOffset + itemsPerPage;
            const paginatedData = response.data.salesData.slice(startIdx, endIdx);
          setMattresses(paginatedData);
          return
  
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false)
        }
      };
    
      fetchMattresses();
    }, [CallingFrom,itemOffset]);
    return (
      Loading ? (
        <div class="flex justify-center items-center h-screen">
          <div role="status">
            <svg aria-hidden="true" className="w-[150px] h-[150px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
  
        </div>
      ) : (
        mattresses.length>0?
        (mattresses?.map((item, index) =>
          selectedGrid === 0 ? (
            <div
              key={item._id}
              className={`flex p-[20px]  md:gap-x-4 border border-primary ${index >= 0 && index < 9 ? "border-b-0" : ""
                }`}
            >
              <div className="overflow-hidden w-[500px] rounded-t-xl relative ">
                <span
                  ref={icon1Ref}
                  className="absolute left-5 top-2 text-white hidden z-10"
                >
                  <i className="font-extralight fa fa-regular fa-heart"></i>
                </span>
                <span
                  ref={icon2Ref}
                  className="absolute left-5 top-8 text-white hidden z-10"
                >
                  <i className="font-extralight fa fa-solid fa-code-compare"></i>
                </span>
                <div className="absolute right-5 top-8 h-12 w-12  bg-primary rounded-full z-10 flex items-center justify-center text-white">
                  {item.Discount}%
                </div>
                 <img
                    src={item.imageUrl}
                    alt="Product"
                    className=" object-contain h-[300px] w-[100%] rounded-t-xl duration-1000 hover:scale-125"
                    ref={imageRef}
                  />
              </div>
              <div className="flex items-center flex-wrap justify-between w-full ">
                {!isMattresses && (
                  <div className="text-center pt-3">
                    <a onClick={() => {
                   router.push(`/sales/${item._id}`);}} className="bg-primary cursor-pointer p-3 px-2 xs:ms-[0px] ms-[6px] text-white rounded-md">
                      <span>Customize your bed</span>
                    </a>
                  </div>
                )}
  
                <div className="px-4 py-3">
                  <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">
                    {item.Shopby}
                  </span>
                  <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">
                    {item.name}
                  </span>
                  <div className="flex items-center">
                    <>
                      <del>
                        <p className="text-sm text-gray-400 cursor-auto me-2">
                          {item.actualPrice}
                        </p>
                      </del>
                      <p className="text-sm cursor-auto text-red-600">{item.price}</p>
                    </>
                    {/* <button className="add-to-cart bg-primary text-white m-2 btn btn-default"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        dispatch(addToCart(item.id));
                      }}
                      type="button">add to cart</button> */}
                  </div>
  
                </div>
              </div>
            </div>
          ) : (
            <div key={item._id} className={`${selectedGrid === 2 ? "min-w-[500px] max-w-[500px]" : "w-full"} bg-white shadow-md rounded-xl hover:shadow-xl overflow-hidden`}>
          <div className={`relative w-full ${selectedGrid === 2 ? "h-[500px]" : "h-auto sm:h-[300px] md:h-[400px] lg:h-[500px]"}`}>
            <span
              ref={icon1Ref}
              className="absolute left-5 top-2 text-white hidden z-10"
            >
              <i className="font-extralight fa fa-regular fa-heart"></i>
            </span>
            <span
              ref={icon2Ref}
              className="absolute left-5 top-8 text-white hidden z-10"
            >
              <i className="font-extralight fa fa-solid fa-code-compare"></i>
            </span>
            <div className="absolute right-5 top-8 h-12 w-12 bg-primary rounded-full z-10 flex items-center justify-center text-white">
              {item.Discount} %
            </div>
            <img
              src={item.imageUrl}
              alt="Product"
              className="object-cover w-full h-full rounded-t-xl duration-1000 hover:scale-125"
            />
          </div>
          <div className="text-center pt-3">
            {!isMattresses && (
              <a onClick={() => {
                router.push(`/sales/${item._id}`);
              }} className="byb-badge cursor-pointer">
                <span>Customize your bed</span>
              </a>
            )}
          </div>
          <div className="px-4 py-3">
            <span className="text-gray-400 mr-3 text-xs hover:text-primary duration-500">
              {item.Shopby}
            </span>
            <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">
              {item.name}
            </span>
            <div className="flex items-center">
              <>
                <del>
                  <p className="text-sm text-gray-400 cursor-auto me-2">
                    {item.actualPrice}
                  </p>
                </del>
                <p className="text-sm cursor-auto text-red-600">{item.price}</p>
              </>
            </div>
          </div>
        </div>
          )
        )):(
          <div className="flex items-center justify-center h-[1 00px] text-red-500">
      No Record Found
    </div>
        )
      )
        
    )
}

export default ProductCardsale