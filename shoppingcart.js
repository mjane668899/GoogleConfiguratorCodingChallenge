//Shopping Cart


// QUESTION: 1
// Step 1: Add products to the shopping cart.
// Given :
// An empty shopping cart
// And a product, Shower Gel with a unit price of 49.99
// When :
// The user adds 5 Shower Gels to the shopping cart
// Then :
// The shopping cart should contain 5 Shower Gels each with a unit price of 49.99
// And the shopping cart’s total price should equal 249.95

const cart = [];
const name = { 'shampoo': 49.99 };

function addItem(product, quantity) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].product === product) {
            cart[i].quantity += quantity
            return
        }
    }
    const price = name[product]
    const list = { product: product, price: price, quantity: quantity }
    cart.push(list)
}

function showItem() {
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1) {
        quantity += cart[i].quantity
    }
    console.log(`You have ${quantity} items in your cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].product} $${cart[i].price} x ${cart[i].quantity}`)
    }
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].quantity
    }
    console.log(`Total in cart: $${total}`)
}


// Step 2: Add additional products of the same type to the shopping cart.
// Given :
// An empty shopping cart
// And a product, Shower Gel with a unit price of 49.99
// When :
// The user adds 5 Shower Gel to the shopping cart
// And then adds another 3 Shower Gel to the shopping cart
// Then :
// The shopping cart should contain 8 Shower Gels each with a unit price of 49.99
// And the shopping cart’s total price should equal 399.92



const cart = [];
const name = { 'shampoo': 49.99 };

function addItem(product, quantity) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].product === product) {
            cart[i].quantity += quantity
            return
        }
    }
    const price = name[product]
    const list = { product: product, price: price, quantity: quantity }
    cart.push(list)
}

function showItem() {
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1) {
        quantity += cart[i].quantity
    }
    console.log(`You have ${quantity} items in your cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].product} $${cart[i].price} x ${cart[i].quantity}`)
    }
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].quantity
    }
    console.log(`Total in cart: $${total}`)
}

addItem("shampoo", 3);
addItem("shampoo", 5);
showItem()




// Step 3: Calculate the tax rate of the shopping cart with multiple items
// Given :
// An empty shopping cart
// And a product, Shower Gel with a unit price of 49.99
// And another product, Deodorant with a unit price of 99.99
// And a sales tax rate of 12.5%
// When :
// The user adds 2 Shower Gels to the shopping cart
// And then adds 2 Deodorant to the shopping cart
// Then :
// The shopping cart should contain 2 Shower Gels each with a unit price of 49.99
// And the shopping cart should contain 2 Deodorant each with a unit price of 99.99
// And the total sales tax amount for the shopping cart should equal 37.50
// And the shopping cart’s total price should equal 337.46
//

const cart = [];
const name = { 'shampoo': 49.99, 'deodorant': 99.99 };

function addItem(product, quantity) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].product === product) {
            cart[i].quantity += quantity
            return
        }
    }
    const price = name[product]
    const list = { product: product, price: price, quantity: quantity }
    cart.push(list)
}

function showItem() {
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1) {
        quantity += cart[i].quantity
    }
    console.log(`You have ${quantity} items in your cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].product} $${cart[i].price} x ${cart[i].quantity}`)
    }
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].quantity
    }
    console.log(total)

    let taxRate = 0
    for (let i = 0; i < cart.length; i += 1) {
        taxRate = ((12.5 * total) / 100)
    }
    let amountWithTax = (total + taxRate).toFixed(2)

    console.log(`Total in cart: $${amountWithTax} with a sales tax of $${taxRate.toFixed(2)}`)
}

addItem("shampoo", 2);
addItem("deodorant", 2);

showItem()
