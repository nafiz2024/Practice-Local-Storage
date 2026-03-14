const handleAddProducts = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEl.value;
    const quantity = quantityEl.value;

    displayProduct(product, quantity)
    addProductToCart(product, quantity)

    productEl.value = '';
    quantityEl.value = '';
}

const getCart = () => {
    const cart = {};

    const cartJSON = localStorage.getItem('cart')
    if (cartJSON) {
        cart = JSON.parse(cartJSON)
    }

    return cart;
}

const addProductToCart = (product, quantity) => {
    const cart = getCart();

    cart[product] = quantity;
    console.log(cart)

    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON)
}

const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`


    const ul = document.getElementById('products_container')
    ul.appendChild(li);
}