import React from 'react'

const OrderDetails = () => {
    return (
        <section className='orderDetails'>
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"a;sjjsswsdskwhdlwkdjw"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Ritik"}
                    </p>
                    <p>
                        <b>Phone No.</b>
                        {9508318852}
                    </p>
                </div>
                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing"}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-05-2017"}
                    </p>
                    <p>
                        <b>Deliverd At</b>
                        {"29-05-2017"}
                    </p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Refrrence</b>
                        {"83whjdwjdhkdn"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"29-05-2017"}
                    </p>
                </div>
                <div>
                    <h1>Amount</h1>
                    <p>
                        <b>Items Total</b>
                        ₹{23145}
                    </p>
                    <p>
                        <b>Shipping Charges</b>
                        ₹{200}
                    </p>
                    <p>
                        <b>Tax Charges</b>
                        ₹{360}
                    </p>
                    <p>
                        <b>Total</b>
                        ₹{360 + 200 + 23145}
                    </p>
                </div>

                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheeze Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{2314}</span>

                        </div>
                    </div>
                    <div>
                        <h4>Veg Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{500}</span>

                        </div>
                    </div>
                    <div>
                        <h4>Fried Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{1800}</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{
                            fontWeight: 800,
                        }}>Sub Total</h4>
                        <div style={{
                            fontWeight: 800,
                        }}>₹{1800 + 500 + 2314}</div>
                    </div>
                </article>
            </main>
        </section >
    )
}

export default OrderDetails
