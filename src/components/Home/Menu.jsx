import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assets/burger1.avif"
import burger2 from "../../assets/burger2.avif"
import burger3 from "../../assets/burger3.avif"

const Menu = () => {
    const addToCartHandler = (itemNum) => {

    }
    return (
        <>
            <section id='menu'>
                <h1>MENU</h1>
                <div>
                    <MenuCard
                        itemNum={1}
                        burgerSrc={burger1}
                        price={200}
                        title="Cheeze Burger"
                        delay={0.9}
                        handler={addToCartHandler} />
                    <MenuCard
                        itemNum={2}
                        burgerSrc={burger2}
                        price={200}
                        title=" Veg Cheeze Burger"
                        delay={0.7}
                        handler={addToCartHandler} />
                    <MenuCard
                        itemNum={3}
                        burgerSrc={burger3}
                        price={200}
                        title="Burger Fried"
                        delay={0.5}
                        handler={addToCartHandler} />
                </div>
            </section>
        </>
    )
}

export default Menu
