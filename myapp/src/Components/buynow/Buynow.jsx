import React from 'react'
import './Buynow.css'
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'

const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all Items</p>
          <span className='leftbuyprice'>Price</span>
          <Divider />
          <div className="item_containert">
            <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70" alt="" />
            <div className="item_details">
              <h3>main heading</h3>
              <h3>sub heading</h3>
              <h3 className='diffrentprice'>price</h3>
              <p className="unusuall">jdvijjhbkij</p>
              <p>eligble for shopping</p>
              <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
              <Option />
            </div>
            
              <h3 className='item_price'>sdbckjd</h3>
            </div>
            <Divider/>
            <Subtotal/>
          </div>
          <Right/>
        </div>
      </div>

    
  )
}

export default Buynow
