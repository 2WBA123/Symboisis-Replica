import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
toast.configure()

export default function Login(){
    const navigate =useNavigate();
    
     const schema = yup.object().shape({
        email:yup.string().required("email required").email(),
        password:yup.string().required("password required"),
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
                    initialValues={{email: '', password: '' }}
                    validationSchema={schema}
                    onSubmit={(values,actions)=> {
                        const data={
                          email:values.email,
                          password:values.password
                        }
                        if(values.email=="admin@gmail.com")
                        {
                            navigate('/admin')
                        }else{
                            navigate('/')
                        }
                       console.log(data);
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
                        <div className="bg-gray-50 shadow rounded px-8 pt-6 pb-8 mx-28 my-14 " >
                        <form onSubmit={handleSubmit}>
                            <div className="flex w-full justify-center items-center self-center ">
                                <p className=" text-red-400 font-bold text-xl" >Login Here</p>
                                </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email<span className="text-red-500"> *</span>
                            </label>
                            <input
                            className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <h6 className="text-red-600 text-sm font-bold">{errors.email && touched.email && errors.email}</h6>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password<span className="text-red-500"> *</span>
                            </label>
                            <input
                                className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                                text-gray-700 mb-3 leading-tight focus:outline-black"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                             <h6 className="text-red-600 text-sm font-bold">{errors.password && touched.password && errors.password}</h6>
                        </div>
                        
                        <div className="flex items-center justify-center">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                             rounded focus:outline-none focus:shadow-outline" type="submit">
                                Login
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

