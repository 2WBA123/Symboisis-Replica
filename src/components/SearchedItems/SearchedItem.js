import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import LatestCard from '../Cards/LatestCard';
import Header from '../ProductHeader/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function SearchedItem() {
    const {state} = useLocation(state=>state);
    console.log(state);
    const state1 = useSelector(state => state);
    console.log(state1)
    return (
        <>
        <Header compo={state.search}/>
        <div className="flex w-screen h-screen">
            <div className="h-4/6 w-full grid grid-cols-4 grid-flow-row">
                {
                    state1.Product.Products.map((val, index) => (
                        val.category==state.search?
                        <div className="flex justify-center items-center  p-4">
                            <LatestCard data={val} index={index} />
                        </div>:null
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default SearchedItem
