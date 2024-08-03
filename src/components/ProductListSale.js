"use client"
import { Mattresses, Products } from '../data/products'
import React, { useEffect, useState, useRef, Suspense } from 'react'
import ProductCardAccessories from './ProductCardAccessories'
import ReactPaginate from 'react-paginate'
import ProductCardsale from './ProductCardsale'

const ProductListSale = ({ selectedGrid, setSelectedGrid, pageType,CallingFrom }) => {
    const listRef = useRef()
    const isMattresses = pageType === 'Mattress';
    const isMattressesPocketSprung = pageType === 'PocketSprung';
     //pagination 
    const itemsPerPage = 10
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentProducts = isMattresses ? Mattresses.slice(itemOffset, endOffset) : Products.slice(itemOffset, endOffset);
 
    const pageCount = Math.ceil(Products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Products.length;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setItemOffset(newOffset);
    };
    return (
        <div>
            <section id="Projects"
                className={` ${selectedGrid === 2 ? "custom-grid" : "grid grid-cols-" + selectedGrid} ${selectedGrid !== 0 ? 'justify-items-center justify-center gap-6 ' : ''}mt-10 mb-5 `}>
                    {/* {currentProducts.map((product, i) => ( */}
                        <ProductCardsale itemOffset={itemOffset} CallingFrom={CallingFrom} pageType={pageType}  selectedGrid={selectedGrid}    />
                    {/* ))} */}
            </section>
            <hr className='text-primary' />
            <div className='flex justify-center mt-3'>
                <ReactPaginate
                    pageLinkClassName='text-primary'
                    activeClassName='text-red-400'
                    activeLinkClassName='text-red-400'
                    nextLinkClassName='text-primary'
                    previousClassName='text-primary'
                    className='flex gap-5'
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                /></div>
        </div>
    )
}

export default ProductListSale