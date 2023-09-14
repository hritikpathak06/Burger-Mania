import React from 'react'
import me from "../../assets/ritik.jpg"
import { NavLink } from 'react-router-dom'



const Profile = () => {
  return (
    <>
    <section className='profile'>
        <main>
            <img src={me} alt="me" />
            <h5>Ritik</h5>
            <div>
                <NavLink to={"/admin/dashboard"} style={{
                    borderRadius:0,
                    backgroundColor:"rgb(40,40,40)"
                }}>Dashboard</NavLink>
            </div>
            <div>
                <NavLink to={"/my-orders"}>My Orders</NavLink>
            </div>
            <button>Logout</button>
        </main>
    </section>
    </>
  )
}

export default Profile
