import React from 'react'
import {MdError} from "react-icons/md"
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
  <section className="notFound">
    <main>
        <div>
         <MdError/>
         <h1>404</h1>
         <p>Page Not Found</p>
         <NavLink to={"/"}>Go to Home</NavLink>
        </div>
    </main>
  </section>
  )
}

export default NotFound
