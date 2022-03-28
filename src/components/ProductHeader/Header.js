import React from 'react'
import { useNavigate } from 'react-router'

function Header({compo,nav}) {
  const navigate = useNavigate();
    return (
        <div className="flex w-screen h-14 items-center justify-between bg-gray-100 border-t-2 border-b-2  border-red-500 mt-2">
                <h2 className="pl-5 text-2xl font-semibold text-red-500  ">{compo}</h2>
                
                {
                  nav?<div className="flex justify-center items-center h-full w-3/12 ">
                  <div className="text-2xl font-semibold text-red-500 ">Manage {compo}</div>
                  </div>:null
                }
                {
                  nav?<button onClick={()=>navigate(`/create${nav}`)} class="bg-transparent  hover:bg-red-500 mr-5 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  Create {compo}
                </button>:null
                }
                
        </div>
    )
}

export default Header
