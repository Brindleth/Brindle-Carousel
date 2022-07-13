import React, { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import './carouselstyles.css'

export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-items-children' style={{width: width}}>
            {children}
        
        </div>
        
    );
};


const Carousel = ({children,}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    };
  return (
      <div>
        <div className='title'>
            <h1 className='md:text-5xl'>Trending Deeds</h1>
        </div>
    
            <div className='carousel'>
                <div className='indicator'>
                    <div className='indicator-center'>
                    <AiFillCaretLeft onClick={() => {
                    updateIndex(activeIndex - 1);
                    }} size={60}/>
                    </div>
                </div>

                <div className='carousel-container'>
                  <div className='carousel-items-container'>
                    <div className='carousel-items'style={{ transform: `translateX(-${activeIndex*100}%)`}}>
                        {React.Children.map(children,(child, index) => {
                            return React.cloneElement(child, {width: "100%"});
                            
                        })}
                    </div>
                  </div>
                </div>
                

                <div className='indicator'>
                    <div className='indicator-center'>
                    <AiFillCaretRight onClick={() => {
                        updateIndex(activeIndex + 1);
                    }} size={60}/>
                    </div>
                </div>
                
            </div>
        <div className='pagination'>
                    {React.Children.map(children, (child, index) => {
                    return(
                        
                        <button className='videohover' onClick={() =>{
                            updateIndex(index);
                        }}/>
                    )
})}
        </div>
        </div>
    
  )
}

export default Carousel