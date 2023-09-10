import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {


    const [bottles, setBottle] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottle(data))
    }, [])

    const handleAddCard = bottle =>{
        const newCard = [...card, bottle];
        setCard(newCard)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart: {card.length}</h4>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddCard= {handleAddCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;