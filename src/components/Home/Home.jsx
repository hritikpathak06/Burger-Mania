import React from 'react'
import {motion} from "framer-motion"
import Founder from './Founder'
import Menu from './Menu'

const Home = () => {

  const options = {
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    }
  }

  return (
    <>
    <section className='home'>
       <div>
        <motion.h1
        {...options}
        >Burger Mania</motion.h1>
        <motion.p
        {...options}
        transition={{
          delay:0.5
        }}
        >Give Yourself a tasty burger.</motion.p>
       </div>

       <motion.a href="#menu" 
       initial={{
        y:"-100%",
        opacity:0
       }}
       whileInView={{
        y:0,
        opacity:1
       }}
       transition={{
        delay:0.8
       }}
       >
        Explore Our Menu
       </motion.a>
    </section>

    <Founder/>

    <Menu/>
    </>
  )
}

export default Home
