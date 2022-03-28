import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch,useSelector} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
import Header from '../../../ProductHeader/Header';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { deleteCategory } from '../../../../Redux/ActionReducer/productReducer';
toast.configure()


const AllCategories = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isActive, setActive] = useState(false);
    //const [users,setUsers] = useState([]);
    const state = useSelector(state=>state);
    console.log(state)
     
    
    // const deleteUser=(id)=>{
    //     confirmAlert({
    //         message: 'Are you sure to delete this User',
    //         buttons: [
    //           {
    //             label: 'Yes',
    //             onClick: () =>{dispatch(deleteUserAsync(id)).then(dispatch(getUsersAsync()))}
    //           },
    //           {
    //             label: 'No',
    //             onClick: () => {return}
    //           }
    //         ]
    //       });
    // }
    useEffect(() => {
        // setActive(true)
        // dispatch(getUsersAsync()).then((value)=>{
        //     console.log(value);
        //     setActive(false)
        // });
    }, []);
    
    return (
        <LoadingOverlay
                active={isActive}
                spinner
                text='Loading your content...'
                >
                    <>
                    <Header compo={"Categories"} nav={"Cat"}/>
                    <div className="m-14">
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-2 border-red-500 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200 ">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" class="hover:bg-gray-200 px-6 py-3 text-left text-s font-bold text-black uppercase tracking-wider">
                                            Date & Time
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                   {
                                       state.Product.Categories.map((val,index)=>(
                                        <tr >
                                        <td class="px-2 py-4 whitespace-nowrap " >
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900 hover:text-green-400">
                                                        {val.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                       
                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <div class="text-sm font-medium text-gray-900">
                                                      {val.date}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>                
                                       
                                       <>
                                           <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <EditRoundedIcon onClick={() =>navigate('/editcat',{state:{data:val,index:index}})} 
                                                    className=" hover:text-green-800 text-green-400"/>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-2 py-4 whitespace-nowrap">
                                            <div class="flex items-center">

                                                <div class="ml-4">
                                                    <DeleteIcon onClick={()=>dispatch(deleteCategory(index))} className='hover:text-red-800  text-red-400' />
                                                </div>
                                            </div>
                                        </td>
                                       </>   
                                    </tr>
                                       ))
                                   }
                                   
                                   
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
                    </>
        
        </LoadingOverlay>
    )
}

export default AllCategories
