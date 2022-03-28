import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Pic from '../CustomerPanel/scree/electronics.jpg'
import { useNavigate } from 'react-router';
;

function CarouselImages({data}){
    const navigate = useNavigate();

    return (
        <div className="w-full h-full ml-4 ">
        <Carousel autoPlay={true} infiniteLoop={true} width={"80%"}  dynamicHeight={false} swipeable="true">
        {
            data.map((val,index)=>(
              <div onClick={()=>navigate('/productdetail',{state:{product:val,index:index}})}>
                <img className="h-full"   src={Pic} />
              </div>
            ))
        }
        
      </Carousel>
        </div>   
    )
}

export default CarouselImages
