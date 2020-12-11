# How to create a simple shopping cart using JavaScript.

This is a simple shopping cart which allow user to add product with a quantity of unit to a shopping cart and this shopping cart will show a list of item based on what user added in to the shopping cart with showing a total sum amount in of their cart.

So let's get started.

Step 1: Firstly, we create an empty `array` for shopping cart.  So that later on we can push a list of product added into the shopping cart.

```sh
const cart = [];
```

Step 2: Next, we also want to a list of product with the price using an `object`.



```sh
const name = { 'shampoo': 49.99 };
```
So now we have a dictionary list of our product stated the product name using `string` and price using `number`.

Step 3: We can now create a `function` for user to add the name of the product and quantity they needed.

```sh
function addItem( product, quantity ) {

};
```
Step 4: Then we now got the `function addItem( product, quantity )` we now want to get the price based on user input name of product to matched the dictionary list by matching key of the list to get product price.

We can do it by create a variable `price` and inside `price` we use the `product` to pull out the product price from the dictionary called `name` we created earlier.

```sh
function addItem( product, quantity ) {
  const price = name[product]
};
```
Step 5: Then, we set a list of `object` dictionary to store based on user input.
So that we can push this new dictionary list to the shopping cart.

```sh
function addItem( product, quantity ) {
  const price = name[product]
  const list = { product: product, price: price, quantity: quantity }
};
```
Step 6: Now let's push that list into our shopping cart.
By `cart.push(list)`

The `push()` method adds new items to the end of an array, and returns the new length.

```sh
function addItem( product, quantity ) {
  const price = name[product]
  const list = { product: product, price: price, quantity: quantity }
  cart.push(list)
};
```

Step 7: How to show a list of item in cart based on user input .

In order to do that we create a `function` inside the `function addItem` by named it `showItem`.

1. We want to calculate the quantity in total.

Inside this ` function showItem` we create a variable by setting the `variable quantity` starting at 0.

Then we use a `for loop` to loop thru the `variable cart` and  calculate the total of quantity.

2. We want to show user a list of product with price and quantity every time the user add to their cart.

Same thing, we use for loop whenever the user added `product` to their `cart`, the `cart` will +1 list of `product `to the `cart`. Then we now we use `console.log` to show the list of each `product` with `price` and `quantity`.

Also, we `console.log` to show the total quantity user added in their shopping cart.

Now you can try and see what happen whenever the user add a product and quantity.

It's working right?

However, everytime when the user added the same `product`. It will show the  `product` and `quantity` in a bunch of list of duplication `product` like a to-do list. And we want to show our shopping `cart`  without duplication.

So next step I will show you how to match the `product` when user place another same `product` by not showing the duplication of same product.

```sh
function addItem( product, quantity ) {
  const price = name[product]
  const list = { product: product, price: price, quantity: quantity }
  cart.push(list)

  function showItem() {
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1) {
        quantity += cart[i].quantity
    }
    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].product} $${cart[i].price} x ${cart[i].quantity}`)
    }
    console.log(`You have ${quantity} items in your cart`)
};

```

Step 8: We can now do `for loop` before our `function show item`. What this `for loop` does if it loop through the shopping cart and see if the `product name` matched to `product` the user added earlier if the `product` matched the `product` we add the `quantity` to the same product `quantity` user added earlier in their cart.

In order to stop the `for loop` we need to add `return` so that it can stop looping over and over again.

```sh
function addItem( product, quantity ) {
  for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].product === product) {
          cart[i].quantity += quantity
          return
      }
  }

  const price = name[product]
  const list = { product: product, price: price, quantity: quantity }
  cart.push(list)

  function showItem() {
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1) {
        quantity += cart[i].quantity
    }
    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].product} $${cart[i].price} x ${cart[i].quantity}`)
    }
    console.log(`You have ${quantity} items in your cart`)
};
```

Step 9: Last but not least. We need to calculate the total amount of this shopping cart.

We first set the `variable total` starting at 0. Then we use `for loop` to loop though the whole shopping `cart` then we calculate the `price` multiply by quantity to get the total amount of the whole `cart`.

Boom!! Now we got the total amount for this shopping `cart`.

We can now `console.log` to tell the user how much in total in their shopping `cart` now.

```sh
function addItem( product, quantity ) {
  for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].product === product) {
          cart[i].quantity += quantity
          return
      }
  }

  const price = name[product]
  const list = { product: product, price: price, quantity: quantity }
  cart.push(list)

  function showItem() {
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1) {
        quantity += cart[i].quantity
    }
    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].product} $${cart[i].price} x ${cart[i].quantity}`)
    }
    console.log(`You have ${quantity} items in your cart`)

    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].quantity
    }
    console.log(`Total in cart: $${total}`)
};
```

Step 10: BONUS - Sales Tax

Add sales tax to product with a tax rate of 12.5%

Same thing we first set the `taxRate` starting at 0.
Then `for loop` to looping through the whole cart. We then set `taxRate = (12.5 * total)` then `/ 100` to divide by 100 .

Now we got the total amount of sales tax for our product. We need to show the total amount + sales tax to the user.

So we set a `variable amountWithTax` inside the `variable amountWithTax` we add the total amount + total amount of sales tax .

And now we got a the total amount with sales tax. But there is a small problem, computer are accurate they always calculate the amount in accurate (etc: 169.234234) but we it to be readable for our user.

In order to do that we can do it by rounding off the `total` price. In JavaScript there a magic shortcut trick we can use which is `.toFixed()`.

We now can set `.toFixed(2)` at the end of `(total + taxRate)`. By adding 2 inside the bracket `toFixed(2)`, it will return the total amount in two decimal place.


```sh
function addItem( product, quantity ) {
  for (let i = 0; i < cart.length; i += 1) {
      if (cart[i].product === product) {
          cart[i].quantity += quantity
          return
      }
  }

  const price = name[product]
  const list = { product: product, price: price, quantity: quantity }
  cart.push(list)

  function showItem() {
    let quantity = 0
    for (let i = 0; i < cart.length; i += 1) {
        quantity += cart[i].quantity
    }
    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].product} $${cart[i].price} x ${cart[i].quantity}`)
    }
    console.log(`You have ${quantity} items in your cart`)

    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].quantity
    }

    let taxRate = 0
    for (let i = 0; i < cart.length; i += 1) {
        taxRate = ((12.5 * total) / 100)
    }
    let amountWithTax = (total + taxRate).toFixed(2)

    console.log(`Total in cart: $${amountWithTax} with a sales tax of $${taxRate.toFixed(2)}`)
};
```

Whoever is reading this. I hope you enjoy reading this. :)
