import React from 'react';
import './order.css';
import OrderHeader from '../Component/OrderHeader'



function Order() {
 
  return (
    <div className="Order">
     <OrderHeader/> 
     <div className="background">
         <div className="cardfood">
     {OrderData.map ((orderDetail, index) => {
            return <div className="square">
                <h1>{orderDetail.picture} </h1>
                <h2>{orderDetail.name}</h2>
                <p>{orderDetail.ingredient}</p>
                <p>{orderDetail.price}</p>
                <button class="success"> Add to Cart</button>
                
            </div>
        })}
        </div>
        </div>
        <h1 class="cart-item">Cart Item</h1>
        <h2>Cart is Empty</h2>
    </div>
  );
}
const OrderData = [
  {
      "name": "Pizza",
      
      "picture": <img src="./img/Neapolitan-pizza.jpg" width={150}  height={100} />,
      
      "ingredient": "Pizza Dough,Cheese,Flour",
      "price": "Rp.30.000"
  },
  {
      "picture": <img src="./img/bakso.jpg" width={150} height={100}/>,
      "name": "Bakso",
      "ingredient": "Beef, Garlic, Flour",
      "price": "Rp.20.000"
  },
  {
      "picture": <img src="./img/esteh.jpg" width={150} height={100}/>,
      "name": "Es Teh",
      "ingredient":"Ice-cube, Tea",
      "price": "Rp.20.000"
  },
  {
      "picture": <img src="./img/indomie.jpeg" width={150} height={100}/>,
      "name": "Indomie",
      "ingredient": "Instant Noodle",
      "price": "Rp.5.000"
  },
  {
      "picture": <img src="./img/batagor.jpg" width={150} height={100}/>,
      "name": "Batagor",
      "ingredient": "Special Nut Sauce with cryspy meatball",
      "price": "Rp.10.000"
  }
]
export default Order;