var apiURL = 'https://fakestoreapi.com/products?sort=desc';

fetch(apiURL)
.then(function(data){
    return data.json();
})
.then(function(products){
    products.forEach(function(item){
    console.log(item)
    var container = document.querySelector(".container").appendChild(document.createElement('div'))
    container.className = "sub-container";
    container.id = `${item.id}`;
    container.innerHTML = `<div class="item-container" id="${item.id}">
    <div class="product-container">
    <img src="${item.image}" alt="${item.category}" class="image">
    <p class="item-title">${item.title}</p>
    <div class="buy-section">
    <p class="item-price">${"$" + item.price}</p>    
    </div>
    <button class="buy-btn"><a href="../product-brief/product.html">Buy<img class="cart-img" src="./img/carts.svg"/></a></button>
    </div>`
    })
})

