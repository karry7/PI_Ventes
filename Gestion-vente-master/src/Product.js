import React from 'react'
import './product.css'
import {useStateValue} from "./StateProvider";
function Product({ id,title, price, image, rating}) {
    const [{panier},dispatch] = useStateValue();
    const ajouterPanier= () =>{
//Ajouter un item panier
dispatch(
    {
        type:'AJOUTER_PANIER',
        id:id,
        title: title,
        price:price,
        image:image,
        rating:rating
    }
    
)
    };

    return (
        <div>
            <div className="product">
                <div className="product_Info">
                    <p className="title">{title}</p>
                    <img src={image} className="product_image" alt="" />

                    <h3 className="product_price"> {price} DH</h3>

                    <div className="product_rating">
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
                </div>

                <button className="btn" onClick={ajouterPanier} >
                    Ajouter Panier
                  </button>
            </div>
            
        </div>
    )
}

export default Product
