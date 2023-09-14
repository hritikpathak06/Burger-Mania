import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import {FiShoppingCart,FiLogIn} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import {motion} from "framer-motion"

const Header = ({isAuthenticated =true}) => {
  return (
    <>
      <nav>
        <motion.div 
        initial={{x:"-100%"}}
        whileInView={{x:0}}
        >
          <IoFastFoodOutline />
        </motion.div>

        <div>
          <NavLink to="/">
           Home
          </NavLink>
          <NavLink to="/contact">
           Contact
          </NavLink>
          <NavLink to="/about">
           About
          </NavLink>
          <NavLink to="/cart">
           <FiShoppingCart/>
          </NavLink>

          <NavLink to={isAuthenticated ? "/me":"/login"}>
             {isAuthenticated ? <FaUser/> : <FiLogIn/>}
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Header
