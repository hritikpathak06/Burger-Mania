import React from 'react'
import { motion } from 'framer-motion'

const CartItem = ({value,title,img,increment,decrement}) => {
  return (
    <>
     <div className="cardItem">
     <motion.div
     initial={{
      x:"-100%",
      opacity:0
     }}
     animate={{
      x:0,
      opacity:1
     }}
     transition={{
      delay:0.8
     }}
     >
    <h4>{title}</h4>
    <img src={img} alt="item" />
     </motion.div>
  <div>
    <button onClick={decrement}>-</button>
    <input type="number" readOnly value={value} />
    <button onClick={increment}>+</button>
  </div>
  </div>
    </>
  )
}

export default CartItem
