import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id,title,image,price,rating}) {
    const [{panier},dispatch]= useStateValue();
    const supprimerPanier = () =>{
        dispatch({
            type:"SUPPRIMER_PANIER",
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
          <img className="checkoutProduct_img"src={image} alt=""/>
          <div className="checkoutProduct_info">
              <p className="checkoutProduct_title">{title}</p>
              <hr className="checkoutProduct_hr"></hr>
              <p className ="checkoutProduct_price">
                <strong>{price} DH</strong>
              </p>
              <div className="CheckoutProduct_rating">
                        {Array(rating)
                            .fill()
                            .map((_) => (
                                <img
                                    src="https://cdn.dribbble.com/users/411234/screenshots/2427834/star.png"
                                    alt=""
                                    className="star"
                                />
                            ))}
                    </div>
                   <button className="CheckoutProduct_btn" onClick={supprimerPanier}>Supprimer</button>
          </div>
        </div>
    )
}

export default CheckoutProduct
