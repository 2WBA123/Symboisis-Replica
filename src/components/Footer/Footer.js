import React from 'react';

const Footer=()=>{
    return (
        <>
        
        <div className=" item-center grid grid-flow-row grid-cols-4 mt-4 bg-black py-3">
            <div className="flex flex-col  items-center text-white">
                <div className="m-4">Brands</div>
                <div>
                <ul className="list-disc list-inside">
                    <li>Apple</li>
                    <li>Samsung</li>
                    <li>Nokia</li>
                    <li>Vivo</li>
                    <li>Techno</li>
                </ul>
                </div>
            </div>

            <div className="flex flex-col  items-center text-white">
                <div className="m-4">Customer Service</div>
                <div>
                <ul className="list-disc list-inside">
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Courier Guide</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>International Delivery</li>
                </ul>
                </div>
            </div>

            <div className="flex flex-col  items-center text-white">
                <div className="m-4">Questions</div>
                <div>
                <ul className="list-disc list-inside">
                    <li>Track Your Order</li>
                    <li>Exchange Policy</li>
                    <li>Privacy Policy</li>
                    <li>Warranty Policy</li>
                    <li>Payments</li>
                </ul>
                </div>
            </div>

            <div className="flex flex-col  items-center text-white ">
                <div className="m-4">Delivered By</div>
                <div>
                <ul className="list-disc list-inside ">
                    <li>TCS</li>
                    <li>Leoperd</li>
                    <li>M & P</li>
                    <li>Courier</li>
                    <li>Post Office</li>
                </ul>
                </div>
            </div>
               
        </div>
        <div className="flex w-full justify-center items-center h-10 bg-red-600">
          <p className="text-white">Powered by SYMITS | Copyright<span className="text-blue-600">©</span> 
           2022 Symbios.pk. All Rights Reserved. | Customer Service 03-111-444-717</p>
        </div>
        </>
    )
}

export default Footer
