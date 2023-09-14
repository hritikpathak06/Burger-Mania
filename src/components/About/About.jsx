import React from 'react'
import {NavLink} from "react-router-dom";
import {RiFindReplaceFill} from "react-icons/ri"
import me from "../../assets/ritik.jpg"

const About = () => {
  return (
  <>
  <section className="about">
    <main>
      <h1>About Us</h1>
      <article>
        <h4>Burger Mania</h4>
        <p>We are burger mania.The place for the most tasty and healthy burger in the country</p>
        <p>Explore the various type of food and burgers.Click below to see the menu</p>
        <NavLink to={"/"}>
          <RiFindReplaceFill/>
        </NavLink>
      </article>

      <div>
        <h2>Founder</h2>
        <article>
          <div>
            <img src={me} alt="founder" />
            <h3>Ritik pathak</h3>
          </div>
          <p>I am Ritik Pathak, the founder of the burger mania.Affiliated to good taste....</p>
        </article>
      </div>
    </main>
  </section>
  </>
  )
}

export default About
