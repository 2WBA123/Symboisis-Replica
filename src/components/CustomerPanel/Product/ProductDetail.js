import React, { useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector} from 'react-redux';
import { useLocation,useNavigate } from 'react-router';
import Pic from '../scree/electronics.jpg';
import {addToCart} from '../../../Redux/ActionReducer/productReducer'
import Header from '../../ProductHeader/Header';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function ProductDetail(){
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state);
    //const Product = state.data;
    const dispatch = useDispatch();
    // const {state} = useLocation();
    // const id = state.id;
    const state1 = useSelector(state=>state);
    console.log(state1)
    
      useEffect(()=>{
        
        //dispatch(getAllProductAsync()).then((res)=>console.log(res));
        //`http://localhost:3001/${Product.imageUrl}`
        
      },[]);
        return (
            <>
            <Header compo={"Product Detail"}/>
            <div className="bg-gray-100 sm:w-48 md:w-full  h-screen flex flex-col justify-center  items-center px-10">
            
                <div className="sm:w-48 md:w-5/12 h-1/2 flex shadow-xl border-2 border-red-500 justify-center items-center rounded">
                    <div className='w-5/12 h-full '>
                    <img className='w-full h-full '  src={URL.createObjectURL(state.product.image)} />
                    </div>
                    <div className='pl-6  w-7/12'>
                        <div className="flex flex-row justify-between mr-4"><h4 className="text-2xl font-semibold">Name :  </h4>
                        <span className="text-lg text-red-400 border-2  rounded p-2 w-6/12 text-center">{state.product.name}</span></div>
                        <div className="flex flex-row justify-between mr-4"><h4 className="text-2xl font-semibold">Price : </h4>
                        <span className="text-lg text-red-400 border-2 rounded p-2 w-6/12 text-center">{state.product.price}</span></div>
                        <div className="flex flex-row justify-between mr-4"><h4 className="text-2xl font-semibold">Detail : </h4>
                        <span className="text-lg text-red-400 border-2 rounded p-2 w-6/12 text-center">{state.product.detail}</span></div>
                        <div className="flex flex-row justify-between mr-4"><h4 className="text-2xl font-semibold">Category :  </h4>
                        <span className="text-lg text-red-400 border-2  rounded p-2 w-6/12 text-center">{state.product.category}</span></div>
                        <div className="flex flex-row justify-between mr-4"><h4 className="text-2xl font-semibold">Quantity : </h4>
                        <span className="text-lg text-red-400 border-2 rounded p-2 w-6/12 text-center">{state.product.quantity}</span></div>
                    </div>
                </div>
                <div className="mt-10">
                    <button onClick={()=>navigate('/checkout',{state:{data:state.product,index:state.index}})} className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400">
                        <span className="text-lg">Buy   Now</span>
                    </button>
                    <button onClick={()=>{ navigate('/'); dispatch(addToCart(state.product)) }} className="ml-1 bg-green-500 px-2 py-2 rounded-lg hover:bg-green-400">
                        <span className="text-lg">Add to Cart</span>
                    </button>
                </div>
            </div>
            </>
        )
    }

