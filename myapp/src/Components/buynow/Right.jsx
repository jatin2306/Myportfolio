import React from 'react'

const Right = () => {
    return (
        <div className='right_buy'>

<img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
            <div className="cost_right">
                <p>your order is eligible for delivery</p><br />
                <span style={{ color: '#565959' }}>slect this option at checkout.Details</span>
                <h3> subtotal of(i item): <strong style={{fontWeight:700,color:"#111"}}>amount</strong></h3>
<button className='rightbuy_btn'>Process to buy</button>
<div className="emi">
    Emi Available
</div>
            </div>
        </div>
    )
}

export default Right
