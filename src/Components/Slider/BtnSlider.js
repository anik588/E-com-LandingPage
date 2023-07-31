import React, { useRef } from 'react';
import './Slider.css';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import Slider2 from './Slider2.js';

const BtnSlider = () => {
  const sliderRef = useRef(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div>
      <hr />
      
      <div className='btn-div'>
          <button className="arrow-btn left" onClick={handleScrollLeft}>
            <AiOutlineLeft size={24} />
          </button>
          <p className='btn-h1'>Top New Deals!</p>
          <button className="arrow-btn right" onClick={handleScrollRight}>
            <AiOutlineRight size={24} />
          </button>
          
      </div>
       <Slider2 ref={sliderRef} />
    </div>
  );
};

export default BtnSlider;
