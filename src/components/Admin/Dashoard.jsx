import React from 'react'
import { NavLink } from 'react-router-dom'
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJs, Tooltip,ArcElement,Legend } from "chart.js"


ChartJs.register(Tooltip,ArcElement,Legend)

const Box = ({ title, value }) => (
    <div>
        <h3>
            {title === "Income" && "Rs."}
            {value}
        </h3>
        <p>{title}</p>
    </div>
)

const Dashoard = () => {

    const data = {

        labels:["Preparing", "Shipped", "Delivered"],
      
        datasets:[
            {
            label:"# of orders",
            data:[2,3,4],
            backgroundColor:["rgba(159,63,176,0.1)","rgba(78,63,176,0.2)","rgba(156,0,60,0.13)"],
            borderColor:["rgb(159,63,176)","rgb(78,63,176)","rgb(156,0,60)"],  
            borderWidth:1,  
            }
        ]
    }

    return (
        <>
            <section className="dashboard">
                <main>
                    <article>
                        <Box title="Users" value={213} />
                        <Box title="Orders" value={40} />
                        <Box title="Income" value={21300} />
                    </article>

                    <section>
                        <div>
                            <NavLink to={"/admin/orders"}>View Orders</NavLink>
                            <NavLink to={"/admin/users"}>View Users</NavLink>
                        </div>

                        <aside>
                            <Doughnut
                            data={data}
                            />
                        </aside>
                    </section>
                </main>
            </section>
        </>
    )
}

export default Dashoard
