import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import {StateContext, useStateValue} from "./StateProvider"
import Total from './Total';
function Checkout() {
    const [{panier}]= useStateValue();
    return (

        <div className="checkout">
     <div className="checkout__gauche">
            {panier?.length ===0 ?(
                <div>
                    <h2 className="checkout_panier_titre">Panier vide</h2>
                    </div>
             ) : (
                 <div>
                    <h2 className="checkout_panier_titre">Mon Panier</h2>
                {/* La liste des produits qu'on a affecté */}
              {panier.map(item => ( 
                <CheckoutProduct
                id ={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>
              ))}
             
             </div>
             )
              }
              </div>
              <div className="checkout__droite">
              
                  <Total/>
                  </div>
                  
        </div>
    )
}

export default Checkout
