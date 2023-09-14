import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineEye,AiFillEdit} from "react-icons/ai"

const Orders = () => {
    const arr = [1,2,3,4]

  return (
   <section className="tableClass">
    <main>
        <table>
            <thead> 
                <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
            </thead>
            <tbody>
              {arr.map((i) => (
                  <tr key={i}>
                  <td>#11whjwwkww</td>
                  <td>Processing</td>
                  <td>23</td>
                  <td>₹{231451}</td>
                  <td>COD</td>
                  <td>Ritik</td>
                  <td><NavLink to={`/order/${223832329}`}><AiOutlineEye/></NavLink>
                  
                  <button>
                   <AiFillEdit/>
                  </button>
                  </td>
              </tr>
              ))}
            </tbody>
        </table>
    </main>
   </section>
  )
}

export default Orders
