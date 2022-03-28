import React from 'react';
import Pic from '../Cards/electronics.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../Redux/ActionReducer/productReducer';

function LatestCard({data,index}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    return (
        <div class="w-full h-full rounded overflow-hidden shadow-lg hover:translate-x-10 mx-1 bg-white ">
          <div className="w-full h-1/2 relative">
            {
              data.image?<img  className="block w-full h-full"  src={URL.createObjectURL(data.image)} />:<img className="block"  src={Pic} />
            }
            <div className="absolute right-0 top-0">
            <button onClick={()=>navigate('/editproduct',{state:{data:data,index:index}})}><EditIcon  className=" hover:animate-none text-red-600 hover:text-red-400 animate-pulse" style={{fontSize:'35px'}} /></button>
             <button onClick={()=>dispatch(deleteProduct(index))}><DeleteIcon className=" hover:animate-none text-red-600 hover:text-red-400 animate-pulse" style={{fontSize:'35px'}}/></button>
            </div>
          </div>
        <div className="h-3/6 hover:bg-gray-50" onClick={()=>navigate('/productdetail',{state:{product:data,index:index}})}>
        <div class="px-2 py-2 w-full h-1/2">
          <div class="w-full font-bold text-lg mb-1">{data.name}</div>
          <p class="text-gray-700 text-sm lg:text-blue-700">
            {data.detail}
          </p>
        </div>
        <div class="px-2 pb-2 flex flex-col justify-between w-full h-1/2">
          <div className="flex flex-row  justify-between">
            <div>Price </div><span class="inline-block  bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">{data.price}$</span>
         </div>
          <div className="flex flex-row  justify-between">
           <div> Quantity</div> <span class="inline-block  bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">{data.quantity}</span>
          </div>
        </div>
        </div>
        
      </div>
    )
}

export default LatestCard
