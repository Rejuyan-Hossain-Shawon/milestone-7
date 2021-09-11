const displayLocalStorageCart = () => {
    const cart = getStorageProducts();

    for (const product in cart) {
        displayProduct(product, cart[product]);
    }
}

const addProduct = () => {
    const priceField = document.getElementById("product-price");
    const price = parseFloat(priceField.value);
    const nameField = document.getElementById("product-name");
    const name = nameField.value;
    // display product in the UI
    displayProduct(name, price);



    // add product in Local storage
    addToStorageCart(name, price);


    // clear field 
    priceField.value = "";
    nameField.value = "";

}


const displayProduct = (name, price) => {
    const ul = document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = `Name:${name} | Price:${price}`;
    ul.appendChild(li);
}

const getStorageProducts = () => {
    const cart = localStorage.getItem("cart");
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);

    }
    else {
        cartObj = {};
    }
    return cartObj;
}


const addToStorageCart = (name, price) => {
    const cart = getStorageProducts();
    if (cart[name]) {
        cart[name] += price;
    }
    else {
        cart[name] = price;
    }






    //     set item to local storage

    localStorage.setItem("cart", JSON.stringify(cart));



}
displayLocalStorageCart();