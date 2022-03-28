import React, { useState,useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation,useNavigate } from 'react-router';
import { useDispatch , useSelector} from 'react-redux';
import LoadingOverlay from 'react-loading-overlay-ts';

toast.configure()

export default function EditForm (){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isActive, setActive] = useState(false)
    // const [department, setDep]=useState([]);
    // const [roles, setRoles]=useState([]);
    // const {state} = useLocation();
    // console.log(state);
    // const User = state.user;
    // const state1 = useSelector(state=>state);
    // console.log(state1)

    const schema = yup.object().shape({
        fname:yup.string().required("Enter first name").min(1).max(30),
        lname:yup.string().required("Enter last name").min(1).max(30),
        gender:yup.string().required("Select gender "),
        age:yup.number().required("Enter age").min(1).max(30),
        phoneno:yup.number().required("Enter phone number ").min(11),
      });

    

    useEffect(()=>{
        // setActive(true)
        // dispatch(getDepartmentsAsync()).then((res)=>{
        //     console.log(res);
        //     setActive(false)
        // });
        // setActive(true)
        // dispatch(getRolesAsync()).then((res)=>{
        //     console.log(res);
        //     setActive(false)
        // });
        
      },[]);
        return (
        
            <LoadingOverlay
                active={isActive}
                spinner
                text='Loading your content...'
                >
            <div className="flex flex-col justify-center  items-center px-10">
                <div className="grid"><p className=" text-black font-bold text-2xl mt-10" >Update User</p></div>
                <Formik 
                    initialValues={{fname:"",lname:"",gender:"",age:"",phoneno:"",}}//fname, lname
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        const data = {
                            fname:values.fname,
                            lname:values.lname,
                            phone:values.phoneno,
                            gender:values.gender,
                            age:values.age,
                        }
                        console.log(data);
                        //dispatch(updateUserAsync(data))
                        // Signup(data)
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
                        <form className="bg-gray-200 shadow rounded px-4 pt-6 pb-8  my-10 w-1/2 " onSubmit={handleSubmit}>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                   First Name<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="fname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fname}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.fname && touched.fname && errors.fname}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                   Last Name<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="lname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lname}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.lname && touched.lname && errors.lname}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Phone Number<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="phoneno"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneno}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.phoneno && touched.phoneno && errors.phoneno}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">
                                    Gender<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="gender"
                                    list='gender'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gender}
                                />
                                <datalist id="gender">
                                  <option value="male"/>
                                  <option value="female"/>
                                </datalist>
                                <h6 className="text-red-600 text-sm font-bold">{errors.gender && touched.gender && errors.gender}</h6>
                            </div>
                              
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="gender">
                                    Age<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="age"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.age}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.age && touched.age && errors.age}</h6>
                            </div>
                            

                            <div className="flex items-center justify-center">
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4
                             rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Update Employee
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            </LoadingOverlay>
        )
    }

