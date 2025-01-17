import React from 'react';
import { mainCaroselData } from './MainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const MainCarousel = () => {
    // const navigate=useNavi
    const items = mainCaroselData.map((item)=>
    <img className='cursor-pointer -pb-10'  
    role='presentation' src={item.image} alt=""/>)

 return(
    
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
 )
}
export default MainCarousel;