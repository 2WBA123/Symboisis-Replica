import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Redux/ActionReducer/productReducer';
toast.configure()

export default function Signup (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const schema = yup.object().shape({
        email:yup.string().required("email required").email(),
        password:yup.string().required("Please Enter your password").test("regex","Password must be min 8 characters, and have 1 Special Character, 1 Uppercase, 1 Number and 1 Lowercase", val => {
           let regExp = new RegExp(
              "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
           );
        console.log(regExp.test(val), regExp, val);
        return regExp.test(val);
      }
    ),
      });

    //   const Signup=async(data)=>{
    //     try{
    //        const res = await SIGNUP(data);
    //        console.log(res)
    //        const token=localStorage.getItem(TOKEN_KEY);
    //        console.log("<===> TOKEN <===>",token);
    //        toast.success('SignUp Successfully', { theme: "colored" })
    //     }catch(error){
    //         if(error.response.status === 401){
    //             toast.error("Invalid Credentials", { theme: "colored" })
    //          }
    //          if(error.response.status === 500){
    //             toast.error("Something Went Wrong", { theme: "colored" })
    //          }
    //          if(error.response.status === 409){
    //             toast.error("Email Alreay Exits", { theme: "colored" })
    //          }
    //     }
    // }

    
        return (
            <div className="flex flex-col justify-center items-center w-screen h-screen">
                <div >
                    <p className="text-red-400 text-3xl font-semibold">
                        Mobile First
                    </p>
                </div>
                <Formik 
                    initialValues={{email: '', password: '' }}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            email: values.email,
                            password: values.password
                        }
                        console.log(data);
                        navigate('/admin')
                        dispatch(addUser(data))
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
                        <form className="w-1/3  h-3/6 bg-gray-50 shadow rounded px-8 pt-6 pb-8 mx-28 my-24 " onSubmit={handleSubmit}>
                            <div className="flex justify-center items-center"><p className=" text-red-400 font-bold text-xl" >Signup Here</p></div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="stock">
                                    Password <span className="text-red-500"> *</span>
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
                                    Signup
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

