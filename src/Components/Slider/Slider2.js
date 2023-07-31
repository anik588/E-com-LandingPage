import React, { forwardRef } from 'react';
import Productbox from './Productbox';
import DataSlider from './DataSlider';

const Slider2 = forwardRef((props, ref) => {
  // Use the 'ref' to access the DOM element attached to this component
  // You can perform any necessary actions with the 'ref' here

  return (
    <div className="slider-container" ref={ref}>
      {DataSlider.map((item) => (
        <Productbox key={item.id} {...item} />
      ))}
    </div>
  );
});

export default Slider2;
