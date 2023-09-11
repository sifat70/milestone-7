import PropTypes from 'prop-types'


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


Bottle.PropTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddCard: PropTypes.func.isRequired
}

export default Bottle;