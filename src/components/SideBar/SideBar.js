import React from 'react';
import '../SideBar/Side.css'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function SideBar() {
    const navigate = useNavigate();
    const state1 = useSelector(state=>state);
    console.log(state1)
    return (
        <div className="w-full rounded bg-gray-200 ml-4">
            <ul className="w-full">
              {
                state1.Product.Categories.map((val,index)=>(
                  <li className="flex  justify-between  py-2 px-2 dropdown relative w-full ">
                  <div><a href='/' className="hover:text-red-400 cursor-pointer">{val.name}</a></div><span className="cursor-pointer"><ChevronRightOutlinedIcon/></span>
                  <div className="dropdown-menu  relative hidden">
                    {
                      state1.Product.Products.map((data,index)=>(
                        data.category==val.name?
                        <div className="cursor-pointer hover:text-red-400 bg my-1 bg-white rounded p-1" onClick={()=>navigate('/productdetail',{state:{product:data,index:index}})}>{data.name}</div>:null
                      ))
                    }
                  </div>    
                </li> 
                ))
              }  
            </ul>
        </div>
    )
}

export default SideBar
