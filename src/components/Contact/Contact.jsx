import React from 'react'
import { motion } from 'framer-motion'
import burger from "../../assets/burger.png"

const Contact = () => {
    return (
        <>
            <section className='contact'>
                <motion.form
                    initial={{
                        x: "-100vw",
                        opacity: 0
                    }}

                    animate={{
                        x: 0,
                        opacity: 1
                    }}

                    transition={{
                        delay: 1.2
                    }}
                >
                    <h2>Contact Us</h2>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder="Email" />
                    <textarea cols="30" rows="10" placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                </motion.form>
                <motion.div className='contactFormBorder'
                    initial={{
                        x: "-100vw",
                        opacity: 0
                    }}

                    animate={{
                        x: 0,
                        opacity: 1
                    }}

                    transition={{
                        delay:0.7
                    }}
                >
                    <motion.div
                       initial={{
                        y: "-100vh",
                        x:"50%",
                        opacity: 0
                    }}

                    animate={{
                        y: "-50%",
                        x:"50%",
                        opacity: 1
                    }}

                    transition={{
                        delay:2.8
                    }}
                    >
                        <img src={burger} alt="burder" />
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default Contact
