import React from 'react'
import './Total.css'
import {useStateValue} from "./StateProvider"
import {totalPanier} from './reducer';
function Total() {
    const [{panier},dispatch]= useStateValue();
    return (
        <div className="total">
            <h3>TOTAL A PAYER</h3>
    <p>  {panier.length} items :<strong> {totalPanier(panier)}  DH</strong> </p>
            <button >Procéder à l'achat</button>
        </div>
    )
}

export default Total
