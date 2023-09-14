import React from 'react'
import { NavLink } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <>
    <section className='paymentSuccess'>
       <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order status below</p>
        <NavLink to={"/my-orders"}>
            View Orders
        </NavLink>
       </main>
    </section>
    </>
  )
}

export default PaymentSuccess
