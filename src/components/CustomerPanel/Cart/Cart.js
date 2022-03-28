import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Header from '../../ProductHeader/Header';

function Cart() {
    const navigate = useNavigate();
    // const [tprice,settprice]=useState(0);
    const state = useSelector(state=>state);
    console.log(state);
    var total = 0;
    for (var i in state.Product.Cart) {
     total += state.Product.Cart[i].price;
    }
    return (
        <>
         <Header compo={"Cart"}/>
        <div className="w-screen h-screen flex justify-center flex-col items-center">
           <div className="flex w-1/2 h-1/2 p-3 flex-col rounded items-center bg-gray-300 border-2 border-red-500">
               {
                   state.Product.Cart.map((val,index)=>(
                    <div className="flex w-full items-center justify-between h-5/6">
                        <p className="text-3xl">{val.name}</p>
                        <p className="text-3xl">Price: {val.price}</p>
                    </div>
                   ))
               }
              <div className="flex bottom-0">
                <span className="text-2xl font-semibold">Total Amount : {total}</span>
              </div>
             </div> 
             <div>
                 {
                     total?<button onClick={()=>navigate('/checkout',{state:{tprice:total}})} className="mt-2 px-6 py-2 bg-green-500 rounded">
                     Buy
                 </button>:null
                 }
               
            </div> 
        </div>
        </>   
    )
}

export default Cart
