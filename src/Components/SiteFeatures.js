import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { RiSecurePaymentFill } from 'react-icons/ri';


const SiteFeatures = () => {
  return (
    <div>
        <div className="Feature-box">

            <div className="Feature-box-inside">
            <TbTruckDelivery size={40} color="red" className="custom-icon-1" /> <h2>Fast Delivery</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="divider"></div>
            
            <div className="Feature-box-inside">
            <AiOutlineFieldTime size={40} color="#3A01DF" className="custom-icon-1" /> <h2>24/7 Service</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="divider"></div>

            <div className="Feature-box-inside">
            <RiSecurePaymentFill size={40} color="#01DFA5" className="custom-icon-1" /> <h2>Secured Payment</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>

            <div className="Feature-box-600">
                <div className="Feature-box-inside-600">
                    <TbTruckDelivery size={30} color="red" className="custom-icon" /> <h2>Fast Delivery</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="Feature-box-inside-600">
                <AiOutlineFieldTime size={30} color="#3A01DF" className="custom-icon-1" /> <h2>24/7 Service</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="Feature-box-inside-600">
                <RiSecurePaymentFill size={30} color="#01DFA5" className="custom-icon-1" /> <h2>Secured Payment</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
    </div>
  )
}

export default SiteFeatures