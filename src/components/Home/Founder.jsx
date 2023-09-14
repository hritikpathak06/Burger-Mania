import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/ritik.jpg"

const Founder = () => {
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
    <section className='founder'>
        <motion.div {...options}>
            <img src={me} alt="Founder" height={400} width={400}/>
            <h3>Ritik Pathak</h3>
            <p>Hey Everyone! I am Ritik Pathak , the founder of the Burger Mania<br />
             Our aim is to create the most tasty burger acreoss world.
            </p>

        </motion.div>
    </section>
    </>
  )
}

export default Founder
