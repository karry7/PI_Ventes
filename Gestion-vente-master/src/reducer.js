export const totalPanier =(panier) =>
panier?.reduce((amount,item)=> item.price + amount,0);

export const initialState ={
    panier :[
   
    {
        id:20,
                        title:"Veste Homme Réversible Mi Saison  ",
                        rating:5,
                        price:500,
                        image:"https://www.cdiscount.com/pdt2/6/6/5/1/700x700/mp05091665/rw/veste-mi-saison-homme-en-coton-casual-veste-col-mo.jpg"
    },
    {
        id:20,
                        title:"Veste Homme Réversible Mi Saison  ",
                        rating:5,
                        price:500,
                        image:"https://www.cdiscount.com/pdt2/6/6/5/1/700x700/mp05091665/rw/veste-mi-saison-homme-en-coton-casual-veste-col-mo.jpg"
    },
    {
        id:20,
                        title:"Veste Homme Réversible Mi Saison  ",
                        rating:5,
                        price:500,
                        image:"https://www.cdiscount.com/pdt2/6/6/5/1/700x700/mp05091665/rw/veste-mi-saison-homme-en-coton-casual-veste-col-mo.jpg"
    },
]
};
function reducer(state, action){
    switch(action.type){
        case 'AJOUTER_PANIER':
            return {
               ... state,
            panier: [...state.panier,action.item]
            }
        case 'SUPPRIMER_PANIER':
            let newPanier = [...state.panier];
            const index =state.panier.findIndex(
                 (panierItem) => panierItem.id === action.id)
            if(index>=0) {
                // le produit existe dans le panier donc supprimer :
                newPanier.splice(index,1);
            }
            return {...state, panier: newPanier};
        default: 
        return state;

    }
}
export default reducer;