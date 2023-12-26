import React from 'react'
import './Cart.css'
import { Divider } from '@mui/material'


const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" alt="cart_img" />
          <div className="cart_btn">
            <button className='cart_btn1'>Add to cart</button>
            <button className='cart_btn2'>Buy Now</button>

          </div>
        </div>
        <div className="right_cart">
          <h3>Fitness Gear</h3>
          <h4>jbvdfusvfkedhvfkuagfuergfy</h4>

          <Divider />
          <p className='mrp'>M.R.P : $400</p>
          <p>Deal of the day : <span style={{ color: "#B12704" }}>$400</span></p>
          <p>You save : : <span style={{ color: "#B12704" }}>$40</span></p>
          <div className="discount_box">
            <h5>Discount  : <span style={{ color: "#111" }}>Extra 10% off</span></h5>
            <h4>Free Delivery : <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 21</span> Details</h4>
            <p>Fastest Delivery : <span style={{ color: "#111",fontWeight:600 }}>Tommorow 11AM</span></p>
          </div>
          <p className="description">About the Item : <span style={{color:"#565959",fontSize:14,fontWeight:500,letterSpacing:'0.4px'}}>An electric kettle is a very common household item primarily designed to heat water efficiently and conveniently through the use of an electrical resistor. Designed to surpass the less efficient stove-top kettles, all they require is an available electrical power outlet. They do not run the risk of boiling dry as they turn themselves off once at boiling temperature by using a thermostat.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart
