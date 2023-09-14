import React from 'react'
import { motion } from 'framer-motion'
import {Country,State} from "country-state-city"

const Shipping = () => {
  return (
  <>
  <section className='shipping'>
   <main>
    <h1>Shipping Details</h1>
    <motion.form>
        <div>
            <label htmlFor="">H.No.</label>
            <input type="text" placeholder='Enter house no.' />
        </div>
        <div>
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter Your city' />
        </div>
        <div>
            <label htmlFor="">Country</label>
           <select>
            <option value="">Country</option>
            {
                Country && Country.getAllCountries().map((i) => (
                    <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                ))
            }
           </select>
        </div>
        <div>
            <label htmlFor="">State</label>
           <select>
            <option value="">State</option>
            {State && 
            State.getStatesOfCountry("IN").map((i) => (
                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
            ))
            }
           </select>
        </div>
        <div>
            <label htmlFor="">Pin Code</label>
            <input type="number" placeholder='Enter Pincode Number' />
        </div>
        <div>
            <label htmlFor="">Phone No.</label>
            <input type="number" placeholder='Enter Phone Number' />
        </div>
        <button type='submit'>Confirm Order</button>
    </motion.form>
   </main>
  </section>
  </>
  )
}

export default Shipping
