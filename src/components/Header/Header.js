import React, { useState ,useEffect} from "react";
import Search from "../SearchBar/search";
import logo from "../Header/letter-a-logo.jpg";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Modal from 'react-modal';
import {getSocket} from '../../configs/sockets';
import ScrollToBottom from 'react-scroll-to-bottom';

let socket;
function Header() {
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
  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }
  const sendMessgae=async()=>{
  //  const socket = await getSocket();
  //  joinRoom();
  if(Message !==""){
    const room = 1255;
    const data = {
     author:"wahab",
     room:room,
     message:Message,
     time:new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),  
   }
   await socket.emit("send_message",data);
    setMessage("");
  }
   
  }
  const [MCount,setCount] = useState(0);
  const [textMessg,setText] = useState([]);
  const [Message,setMessage] = useState("");
  const [modalIsOpen2, setIsOpen2] = useState(false);

  const navigate = useNavigate();
  const state = useSelector(state => state);
  console.log(state);

  const joinRoom=async()=>{
    const room = 1255;
    await socket.emit("join_room",room);
  }
  const reciveData=async()=>{
     socket = await getSocket();
        console.log(socket);
        joinRoom(); 
        socket.on("receive_message",(data)=>{
          setText((oldState)=>[...oldState,data])
        })
        socket.on("message_count",(data)=>{
          const count = data.count;
          setCount(oldState=>oldState+count)
        })
  }

  useEffect(() => {
    reciveData();
    
}, []);
  return (
    <div className="md:flex md:flex-row items-center justify-evenly md:h-24 sm:w-2/5 md:w-2/4 lg:w-full sm:flex-wrap bg-gray-100">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col h-64 w-full rounded border-2 border-gray-600 ">
          <div className=" flex justify-center items-center h-1/6 w-full bg-gray-700">
            <p className="text-base text-white">Live Chat</p>
          </div>

           <div className="flex flex-col h-2/3 w-full justify-end p-2">
              <ScrollToBottom className="flex h-full w-full">
              { 
               textMessg.map((val)=>(
                <div className={`flex flex-col ${val.author=="waha"?"justify-end items-end":"justify-end items-start"} h-1/6 w-full mt-10`}>
                <h3 className="text-base bg-gray-400 p-1 rounded">
                  {val.message}
                </h3>
                <h4 className="text-xs">
                  {val.time} {val.author}
                </h4>
              </div>
              ))
            }
             </ScrollToBottom>
          </div>

          <div class="flex w-full h-1/6 border-gray-700 border-2">
              <input
                className=" appearance-none border border-red-500 rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-black"
                type="text"
                name="message"
                placeholder='Message'
                onChange={(e)=>{setMessage(e.target.value)}}
                class="px-4 py-2 w-10/12 outline-none "
              />
              <button type="submit" onClick={()=>sendMessgae()} class="flex w-2/12 items-center justify-center px-4 border-l bg-white">
                <SendIcon />
              </button>
            </div>
        </div>
        
            
      </Modal>
      <div className="flex-none items-center ml-0">
        <img className="w-24 h-20" src={logo} />
      </div>

      <div className="md:flex items-center  sm:flex-wrap ">
        <div className="">
          <Search />
        </div>
        <div className="flex">

          <div className="px-4 py-2 relative inline-block border-red-500 border-2 m-1 rounded hover:text-red-400 text-red-500"
            onClick={() => navigate('/cart')}>
            <button><AddShoppingCartOutlinedIcon /> </button>
            <p className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs 
            font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {state.Product.Cart.length}
            </p>
          </div>

          <div className="px-4 py-2 relative inline-block border-red-500 border-2 m-1 hover:text-red-400 rounded text-red-500">
            <button onClick={openModal2}><NotificationsNoneIcon style={{ fontSize: '30px' }} /></button>
            <p className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs 
            font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {MCount}
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-24 ">
        <div className="flex flex-col items-center pt-2 mx-1 h-24">
          <WorkOutlineOutlinedIcon className="" />
          <p className="text-sm">7 Days </p>
          <p className="text-sm">Replacement</p>
          <p className="text-sm">warrenty</p>
        </div>
        <div className="flex flex-col items-center pt-2 mx-2 h-24">
          <WhatsappOutlinedIcon className="" />
          <p className="text-sm">message us on </p>
          <p className="text-sm">03415446789</p>
        </div>
        <div className="flex flex-col items-center pt-2 mx-1 h-24">
          <FacebookOutlinedIcon />
          <p className="text-sm">like us on </p>
        </div>
      </div>

    </div>
  );
}

export default Header;
