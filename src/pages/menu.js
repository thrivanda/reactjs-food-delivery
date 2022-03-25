import React from 'react';
import './menu.css';


export function Menu(props) {
    return (
      <div className="menu">
        <h1>Do you want anything?</h1>
        <div class = "square">
        {MenuData.map ((menuDetail, index) => {
            return <div>
                <h1>{menuDetail.picture} </h1>
                <h2>{menuDetail.name}</h2>
                <p>{menuDetail.ingredient}</p>
                <p>{menuDetail.price}</p>
                
            </div>
                
        })}
        </div>
        <button type="button" class="btn btn-secondary">Order now</button>
      </div>
    );
  }
  


  const MenuData = [
    {
        "name": "Pizza",
        
        "picture": <img src="./img/Neapolitan-pizza.jpg" width={600}  height={400} />,
        
        "ingredient": "Pizza Dough,Cheese,Flour",
        "price": "Rp.30.000"
    },
    {
        "picture": <img src="./img/bakso.jpg" width={600} height={400}/>,
        "name": "Bakso",
        "ingredient": "Beef, Garlic, Flour",
        "price": "Rp.20.000"
    },
    {
        "picture": <img src="./img/esteh.jpg" width={600} height={400}/>,
        "name": "Es Teh",
        "ingredient":"Ice-cube, Tea",
        "price": "Rp.20.000"
    },
    {
        "picture": <img src="./img/indomie.jpeg" width={600} height={400}/>,
        "name": "Indomie",
        "ingredient": "Instant Noodle",
        "price": "Rp.5.000"
    },
    {
        "picture": <img src="./img/batagor.jpg" width={600} height={400}/>,
        "name": "Batagor",
        "ingredient": "Special Nut Sauce with cryspy meatball",
        "price": "Rp.10.000"
    }
]

export default Menu;