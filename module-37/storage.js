const addToLocalStorage = () => {
    const idInput = document.getElementById('id-field');
    const id = idInput.value;
    const quantityInput = document.getElementById('quantity-field');
    const quantity = quantityInput.value;


    if (id && quantity) {
        localStorage.setItem(id, quantity)
    }
    idInput.value = '';
    quantityInput.value = '';


}


//  

