import React, { useEffect } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay-ts';
import { addProduct } from '../../../../Redux/ActionReducer/productReducer';
import Header from '../../../ProductHeader/Header';
import {getSocket} from '../../../../configs/sockets';
toast.configure()

let socket;
export default function CreateProduct(){
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // const {state} = useLocation();
    // const id = state.id;
    const state1 = useSelector(state=>state);
    console.log(state1)

    const NewProduct=async()=>{
         socket = await getSocket();
        
    }
    
    const schema = yup.object().shape({
        name:yup.string().required('name is rquired').min(1),
        image:yup.string().required('select image'),
        price:yup.number().required('price is rquired'),
        category:yup.string().required("select category"),
        detail:yup.string().required('detail is required').min(2),
        quantity:yup.number().required('enter quantity'),
      });
      useEffect(()=>{
          NewProduct();
        //(event)=>setFieldValue('image',event.target.files[0])
        //dispatch(addProduct()).then((res)=>console.log(res));
        
      },[]);
        return (
            <div className=" sm:w-44 md:w-full  bg-white flex flex-col justify-center  items-center  bg-opacity-30 px-10">
                <Header compo={"Create Product"}/>
                <Formik 
                    initialValues={{name:'',image:'',price:'',category:'',detail:'',quantity:''}}
                    validationSchema={schema}
                    onSubmit={(values, actions) => {
                        // let formdata = new FormData();
                        // formdata.append('image',values.image);
                        console.log(values.image)
                        // formdata.append('name',values.name);
                        // formdata.append('detail',values.detail);
                        // formdata.append('price',values.price);
                        // formdata.append('quantity',values.quantity);
                        const data = {
                           name:values.name,
                           imageUrl:values.image,
                           price:values.price,
                           category:values.category,
                           detail:values.detail,
                           quantity:values.quantity
                        }
                        console.log(data)
                        dispatch(addProduct(data));
                        socket.emit("new_product",{room:1255});
                        navigate('/')
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
                        setFieldValue
                        /* and other goodies */
                    }) => (
                        <form className="bg-gray-200  bg-opacity-30 shadow rounded px-4 pt-6 pb-8  my-10 sm:w-36 md:w-1/2 border-2 border-red-500" enctype="multipart/form-data" onSubmit={handleSubmit}>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                                    Name<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.name && touched.name && errors.name}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="price">
                                    Price<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.price}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.price && touched.price && errors.price}</h6>
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="image">
                                    Image<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="file"
                                    name="image"
                                    onChange={(event)=>setFieldValue('image',event.target.files[0])}
                                    onBlur={handleBlur}
                                    //value={values.image}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.image && touched.image && errors.image}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="genre">
                                    Detail<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="detail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.detail}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.detail && touched.detail && errors.detail}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                                    Category<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="text"
                                    name="category"
                                    list='category'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.category}
                                />
                                <datalist id="category">
                                {
                                        state1.Product.Categories.map((val)=>(<option value={val.name}/>))

                                    }
                                    </datalist>
                                <h6 className="text-red-600 text-sm font-bold">{errors.category && touched.category && errors.category}</h6>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="quantity">
                                    Quantity<span className="text-red-500"> *</span>
                                </label>
                                <input
                                    className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                            text-gray-700 mb-3 leading-tight focus:outline-black"
                                    type="number"
                                    name="quantity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.quantity}
                                />
                                <h6 className="text-red-600 text-sm font-bold">{errors.quantity && touched.quantity && errors.quantity}</h6>
                            </div>
                            

                            <div className="flex items-center justify-center">
                                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6
                               rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Save 
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }

