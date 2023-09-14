import React from 'react'
import {AiFillInstagram,AiFillFacebook,AiFillGithub,AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <>
    <footer>
        <div>
            <h2>Burger Mania</h2>
            <p>We are tryoing to give you the best taste possible.</p>
            <br />
            <em>We give attention to geniune feedback.</em>

            <strong>All right reserved @burgermania</strong>
        </div>

        <aside>
            <h4>Follow us</h4>
            <a href="#"><AiFillFacebook/></a>
            <a href="#"><AiFillInstagram/></a>
            <a href="#"><AiFillLinkedin/></a>
            <a href="#"><AiFillGithub/></a>
        </aside>
    </footer>
    </>
  )
}

export default Footer
