const addNumberToLS = () => {
    const number = Math.ceil(Math.random()*100)
    localStorage.setItem('number', number)
}

const setobjectToLS = () => {
    const customer = {name: 'Nafiz Alam', products: 3, price: 75}
    localStorage.setItem('customer', JSON.stringify(customer))
}

const readObjectFromLS = () => {
    const customerJSON = localStorage.getItem('customer')
    const customer = JSON.parse(customerJSON)
    console.log(customer.name)
}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('From Saved local storage', number)
}