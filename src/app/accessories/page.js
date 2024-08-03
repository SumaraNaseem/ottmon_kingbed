"use client"
import Drawer from "../../components/ButtomDrawer";
import ProductFilter from "../../components/ProductFilter";
import ProductGridSelector from "../../components/ProductGridSelector";
import ProductListAccessories from "../../components/ProductListAccessories";
import ProductListBeds from "../../components/ProductListBeds";
 import { useEffect, useState } from "react";
const sortOptions = [
    "Featured",
    "Best selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, old to new",
    "Date, new to old"
]

const Accessories = () => {
    const [selected, setSelected] = useState("Featured")
    const [isOpen, setIsOpen] = useState(false);
    const [openBottom, setOpenBottom] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const [selectedGrid, setSelectedGrid] = useState(2);
    return (

        <div className="">

            <div>
                <div className="products-banner bg-gray-500 flex justify-center p-20">
                    <div className="text-white text-xl">Beds and Bed Frames</div>
                </div>
                <div className="products-body px-10 mt-5 py-5 ">
                    <div className="header flex justify-between items-center">
                        <div className="">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="drawer-button">
                                    <div className="filter flex gap-0.5 text-gray-400 ">
                                        <span><svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M324.4 64C339.6 64 352 76.37 352 91.63C352 98.32 349.6 104.8 345.2 109.8L240 230V423.6C240 437.1 229.1 448 215.6 448C210.3 448 205.2 446.3 200.9 443.1L124.7 385.6C116.7 379.5 112 370.1 112 360V230L6.836 109.8C2.429 104.8 0 98.32 0 91.63C0 76.37 12.37 64 27.63 64H324.4zM144 224V360L208 408.3V223.1C208 220.1 209.4 216.4 211.1 213.5L314.7 95.1H37.26L140 213.5C142.6 216.4 143.1 220.1 143.1 223.1L144 224zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H336C327.2 432 320 424.8 320 416C320 407.2 327.2 400 336 400H496zM320 256C320 247.2 327.2 240 336 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H336C327.2 272 320 264.8 320 256zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H400C391.2 112 384 104.8 384 96C384 87.16 391.2 80 400 80H496z"></path></svg></span>
                                        <span>Filter</span></div></label>
                            </div>
                            <div className="drawer-side z-20">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ProductFilter pageType={'Beds'} />
                            </div>
                        </div>
                        <ProductGridSelector selectedGrid={selectedGrid} setSelectedGrid={setSelectedGrid}/>
                        <div className="sort hidden md:block">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button onClick={handleClick} type="button" className="inline-flex min-w-56 w-full border border-primary  justify-between gap-x-1.5 rounded-3xl bg-white px-3 py-2 text-sm  text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true" >
                                        {selected}
                                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                {isOpen ? <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    {sortOptions.map((item, i) => (
                                        <div key={i} className="py-1" role="none" onClick={() => { setSelected(item); setIsOpen(false) }}>
                                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{item}</a>
                                        </div>
                                    ))}

                                </div> : <div></div>}
                            </div>
                        </div>
                        <ul className="md:hidden menu " onClick={()=>setOpenBottom(!openBottom)}>
                            <li>
                                <details open>
                                    <summary  style={{padding:"3px"}}>Sort</summary>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className="list">
                        <ProductListAccessories CallingFrom='Accessories'  selectedGrid={selectedGrid} setSelectedGrid={setSelectedGrid} />
                    </div>
                    <div className="paginatiion">
                    </div>
                </div>
            </div>
            <Drawer open={openBottom} side="bottom" setOpen={setOpenBottom} sortOptions={sortOptions} setSelected={setSelected} selected={selected} />
        </div>
    );
};

export default Accessories;
