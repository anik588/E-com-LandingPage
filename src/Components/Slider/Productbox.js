import React from 'react';

import './Slider.css';

const Productbox = (props) => {
  return (
  
    <div className="slider-div">
      <img src={props.imageUrl} alt=""/><br></br>
      <h3>{props.title}</h3><br></br>
      <p>{props.Desc}</p><br></br>
      <p>Price: {props.Price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default Productbox;
