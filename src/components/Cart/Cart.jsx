import React from 'react'
import burger1 from "../../assets/burger1.avif";
import burger2 from "../../assets/burger2.avif";
import burger3 from "../../assets/burger3.avif";
import CartItem from './CartItem';
import {NavLink} from "react-router-dom"
// const CartItem = ({value,title,img,increment,decrement}) => {
//   <div className="cardItem">
//   <div>
//     <h4>{title}</h4>
//     <img src={img} alt="item" />
//   </div>
//   <div>
//     <button onClick={decrement}>-</button>
//     <input type="number" readOnly value={value} />
//     <button onClick={increment}>+</button>
//   </div>
//   </div>
// }



const Cart = () => {

  const increment = (item) => {

  }

  const decrement = (item) => {

  }

  return (
    <>
      <section className='cart'>
        <main>
          <CartItem
            title={"Cheeze burger"}
            img={burger1}
            value={0}
            increment={() => increment(1)}
            decrement={() => decrement(1)}
          />
          <CartItem
            title={"veg burger"}
            img={burger2}
            value={0}
            increment={() => increment(2)}
            decrement={() => decrement(2)}
          />
          <CartItem
            title={"Fried burger"}
            img={burger3}
            value={0}
            increment={() => increment(3)}
            decrement={() => decrement(3)}
          />
          <article>
            <div>
              <h4>Sub Total</h4>
              <p>₹{2000}</p>
            </div>
            <div>
            <h4>Tax</h4>
            <p>₹{2000*18/100}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{2000+2000*18/100+200}</p>
          </div>
          <NavLink to={"/shipping"}>
              Checkout
          </NavLink>
        </article>
      </main>
    </section >
    </>
  )
}

export default Cart
