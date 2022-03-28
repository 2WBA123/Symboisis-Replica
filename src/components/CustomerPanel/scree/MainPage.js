import React, { useEffect, useState } from 'react';
import SideBar from '../../SideBar/SideBar';
import CarouselImages from '../../Carousel/Carousel';
import Pic from '../scree/electronics.jpg';
import LatestCard from '../../Cards/LatestCard';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useSelector } from 'react-redux';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import Modal from 'react-modal';
import {getSocket} from '../../../configs/sockets'
import io from 'socket.io-client';



function MainPage() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    
    
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    const [modalIsOpen, setIsOpen] = useState(false);
    //socket.on("connection")
    const navigate = useNavigate();
    const state1 = useSelector(state => state);
    console.log(state1)
    const BelowCarousel = state1.Product.Products.slice(0, 3);
    console.log(BelowCarousel.length);

    const schema = yup.object().shape({
        message: yup.string().required("name required").min(1),
    });

    useEffect(() => {
        (async () => {
           const socket = await getSocket();
            console.log(socket);
            socket.emit("get_data", { name: "wahab adil" })


            
          })()

        
    }, []);
    return (
        <>
            <Header />
            <div className='flex relative flex-col w-full h-5/6 mt-3 justify-center items-center '>
             
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="flex flex-col h-full w-full">
                        <div className="flex w-full justify-center items-center self-center font-bold py-2 text-xl">
                            Customer Support
                        </div>

                        <Formik
                            initialValues={{message: ''}}
                            validationSchema={schema}
                            onSubmit={(values, actions) => {
                                const d = new Date();
                                const date = d.toLocaleString();
                                const data = {
                                    name: values.name,
                                    date: date
                                }
                                console.log(data);
                                //dispatch(addCategory(data));
                                // navigate('/admin')
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
                                <div className="bg-gray-50 shadow rounded px-8 pt-6 pb-8    border-2 border-red-400" >
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex w-full justify-center items-center self-center ">
                                            <p className=" text-red-400 font-bold text-xl" >Start Chat</p>
                                        </div>

                                        <div class="flex  rounded border-2 border-red-500">
                                            <input
                                                className=" appearance-none border border-red-500 rounded w-full py-2 px-3 
                                                    text-gray-700 mb-3 leading-tight focus:outline-black"
                                                type="text"
                                                name="message"
                                                placeholder='Message'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                class="px-4 py-2 w-80 outline-none "
                                                value={values.message}
                                            />

                                            <button type="submit" class="flex items-center justify-center px-4 border-l bg-white">
                                                <SendIcon/>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </Formik>
                        <div className="flex justify-center items-center mt-2 ">
                          <button className=" rounded border-2 border-red-500 h-9 w-10 text-center" onClick={closeModal}>
                              <CloseIcon/>
                          </button>
                        </div>

                    </div>
                </Modal>
                <div className="flex w-9/12 h-full justify-center items-center bg-gray-100 pt-5">
                    <div className=" w-1/4 justify-center items-center h-screen">
                        <SideBar />
                    </div>
                    <div className="w-3/4 h-screen ml-3">
                        <CarouselImages data={BelowCarousel} />
                    </div>
                </div>
                <div className="flex sticky justify-end w-11/12  my-2">
                    <div className="mr-0 bg-yellow-300 rounded-full p-3 cursor-pointer">
                        <ChatIcon onClick={openModal} className="text-red-600 animate-bounce hover:animate-none hover:text-red-400" style={{ fontSize: '45px' }} />
                    </div>
                </div>
                <div className="flex flex-row w-9/12 h-full justify-center items-center bg-gray-100 mt-4 ">
                    {
                        BelowCarousel.map((val, index) => (
                            <div className="w-3/12 p-8  " onClick={() => navigate('/productdetail', { state: { product: val, index: index } })}>

                                <img className="h-full hover:translate-y-2 transform" src={URL.createObjectURL(val.image)} />

                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-row w-9/12 h-96 justify-center items-center  bg-gray-100 mt-4 mb-2 pr-1 ">
                    <div className="h-full w-3/12">
                        <img className="h-full" src={Pic} />
                    </div>
                    <div className="h-full w-9/12 pl-1 pt-1 pb-1">
                        <div className="flex px-2 h-1/6 bg-white justify-between items-center border-b-2  border-gray-200">
                            <div className="items-center justify-center">
                                <h6 className="text-xl font-semibold">Latest Products</h6>
                            </div>
                            <div className="items-center justify-center">
                                <h6>Latest Products</h6>
                            </div>
                        </div>
                        <div className="h-5/6 grid grid-cols-4 grid-flow-row">
                            {
                                state1.Product.Products.slice(0, 4).map((val, index) => (

                                    <div className="flex justify-center items-center full p-4 bg-gray-100">
                                        <LatestCard data={val} index={index} />
                                    </div>

                                ))
                            }
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainPage
