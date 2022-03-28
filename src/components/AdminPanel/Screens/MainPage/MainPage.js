import React from 'react';
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

function MainPage() {
  const state = useSelector(state=>state);
    console.log(state);
    console.log(state.Product.Products.length)
  const navigate = useNavigate();

    return (
        <>
            <Header/>
            <div className="flex w-full h-14 items-center bg-gray-100 border-t-2 border-b-2  border-red-500 mt-2">
                <h2 className="pl-5 text-2xl font-semibold text-red-500  ">Dashboard</h2>
            </div>
            <div className="flex w-full h-screen justify-center items-center">
              <div className='w-9/12 grid grid-flow-row grid-cols-3'>
                <div className="flex flex-col justify-center items-center " onClick={()=>navigate('/allproduct',{state:{compo:'Product',nav:'product'}})}>
                  <div className="flex flex-col w-44 h-48 justify-center items-center bg-gray-100 rounded 
                   border-2 hover:animate-bounce border-red-500">
                    <ProductionQuantityLimitsIcon className="text-red-500"/>
                    <h3 className="text-3xl font-semibold text-red-500 mt-4">Products</h3>
                  </div>
                  <div className="flex flex-row w-44 h-6 mt-4 p-4 justify-between items-center bg-gray-100 rounded border-2 border-red-500">
                     <p className="text-red-500 font-semibold">Products</p>
                     <p className="text-red-500 font-semibold">{state.Product.Products.length}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center " onClick={()=>navigate('/allcategory')}>
                  <div className="flex flex-col w-44 h-48 justify-center items-center bg-gray-100 rounded
                   border-2 hover:animate-bounce border-red-500">
                       <CategoryIcon className="text-red-500"/>
                       <h3 className="text-3xl font-semibold text-red-500 mt-4">Categories</h3>
                  </div>
                  <div className="flex flex-row w-44 h-6 mt-4 p-4 justify-between items-center bg-gray-100 rounded border-2 border-red-500">
                     <p className="text-red-500 font-semibold">Categories</p>
                     <p className="text-red-500 font-semibold">{state.Product.Categories.length}</p>
                  </div>
                </div>

                <div className="flex flex-col  justify-center items-center " onClick={()=>navigate('/users')}>
                  <div className="flex flex-col w-44 h-48 justify-center items-center bg-gray-100 rounded 
                  border-2 hover:animate-bounce border-red-500">
                      <GroupIcon className="text-red-500"/>
                      <h3 className="text-3xl font-semibold text-red-500 mt-4">Users</h3>
                  </div>
                  <div className="flex flex-row w-44 h-6 mt-4 p-4 justify-between items-center bg-gray-100 rounded border-2 border-red-500">
                     <p className="text-red-500 font-semibold">Users</p>
                     <p className="text-red-500 font-semibold">{state.Product.Users.length}</p>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
        </>
    )
}

export default MainPage
