import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate,useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../../../../Redux/ActionReducer/productReducer';
toast.configure()

export default function EditCategories(){
    const navigate =useNavigate();
    const dispatch = useDispatch();

    const {state} = useLocation(state=>state);
    console.log(state);

    const data=state.data;
    const index=state.index;
    
     const schema = yup.object().shape({
        name:yup.string().required("name required").min(1),
      });

    //  const Login=async(data)=>{
    //      try{
    //         const res = await LOGIN(data);
    //         const token = res.data.token;
    //         console.log(token);
    //         const decoded = jwt_decode(token);

    //         console.log(decoded)
    //         console.log(decoded.email)
    //         console.log(decoded.role);
            
    //         //Local Storage 
    //         localStorage.setItem(ID_KEY,decoded.id);
    //         localStorage.setItem(ROLE_KEY,decoded.role);
    //         localStorage.setItem(EMAIL_KEY,decoded.email);
    //         localStorage.setItem(TOKEN_KEY,res.data.token);

    //         toast.success('Login Successfully', { theme: "colored" })
    //         if(decoded.role==="Admin")
    //         {
    //             navigate("/home");
    //         }else{
    //             navigate("/ehome");
    //         }
            
    //      }catch(error){
    //          if(error.response.status === 401){
    //             toast.error("Invalid Credentials", { theme: "colored" })
    //          }
    //          if(error.response.status === 500){
    //             toast.error("Something Went Wrong", { theme: "colored" })
    //          }
             
            
    //      }
    //  }

   
        return (
            <div className="flex flex-col justify-center  items-center ">
                <div className="flex mt-14 w-1/2 justify-center items-center">
                    <h3 className="mx-28 px-14 text-3xl font-semibold text-red-400">Mobile First</h3>
                </div>
                <div className=" w-1/2 ">
                <Formik
                    initialValues={{name:data.name}}
                    validationSchema={schema}
                    onSubmit={(values,actions)=> {
                        const d= new Date();
                        const date=d.toLocaleString();
                        const data={
                          name:values.name,
                          date:date,
                          index:index
                        }
                       console.log(data);
                       dispatch(updateCategory(data));
                       navigate('/allcategory')
                       actions.resetForm();
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <div className="bg-gray-50 shadow rounded px-8 pt-6 pb-8 mx-28 my-14 border-2 border-red-400" >
                        <form onSubmit={handleSubmit}>
                            <div className="flex w-full justify-center items-center self-center ">
                                <p className=" text-red-400 font-bold text-xl" >Update Category</p>
                                </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                name<span className="text-red-500"> *</span>
                            </label>
                            <input
                            className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                type="name"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <h6 className="text-red-600 text-sm font-bold">{errors.name && touched.name && errors.name}</h6>
                        </div>
                        
                        <div className="flex items-center justify-center">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                             rounded focus:outline-none focus:shadow-outline" type="submit">
                                Update Category
                            </button>     
                        </div>
                        
                    </form>
                   </div>
                    )}
                </Formik>
                </div>
                
            </div>
        )
    }

