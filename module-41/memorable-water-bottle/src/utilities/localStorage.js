const getStoreCart = () => {
    const storeCartString = localStorage.getItem('cart');
    if (storeCartString) {
        return JSON.parse(storeCartString)
    }
    return []
}

const saveCartToLS = cart => {
    const cartStringField = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringField)
}


const addToLS = id => {
    const cart = getStoreCart()
    cart.push(id)
    // save to local storage
    saveCartToLS(cart)
}

const removeFormLS = id =>{
    const cart = getStoreCart();
    // removing every id

    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining)
}


export { addToLS, getStoreCart, removeFormLS }