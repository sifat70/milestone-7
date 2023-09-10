import './Bottle.css'

const Bottle = ({bottle, handleAddCard}) => {
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>price: {price}</p>
            <button onClick={()=>handleAddCard(bottle)}>Purchace</button>
        </div>
    );
};

export default Bottle;