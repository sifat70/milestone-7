import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoreCart, removeFormLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {


    const [bottles, setBottle] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottle(data))
    }, [])


    // load cart from local storage 

    useEffect(() => {
        console.log('called the use effect', bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoreCart();
            console.log(storedCart);

            const savedCart = [];

            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }

            setCard(savedCart)
        }
    }, [bottles])

    const handleAddCard = bottle => {
        const newCard = [...card, bottle];
        setCard(newCard)
        addToLS(bottle.id)
    }

    const handleRemoveFromCart = id =>{
        // visual cart remove 
        const remainingCart = card.filter(bottle => bottle.id !== id);
        setCard(remainingCart)
        // remove from LS

        removeFormLS(id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={card} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddCard={handleAddCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;