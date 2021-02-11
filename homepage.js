var theApi = 'https://fakestoreapi.com/products';
var products = [];

fetch(theApi)
.then(function(data){
    return data.json();
})
.then(function(data){
    products = data;
    products.forEach(function(item){
    console.log(item)
    var container = document.querySelector(".container").appendChild(document.createElement('div'))
    container.className = "sub-container";
    container.id = `${item.id}`;
    container.innerHTML = `<div class="item-container" id="${item.id}">
    <p class="item-title">${item.title}</p>
    <img src="${item.image}" alt="${item.category}" class="image">
    
    <div class="buy-section">
    <p class="item-price">${"₹" + Math.round(item.price*72.85)}</p>
    <button class="wish-btn">♥</button>    
    </div>
    <button class="buy-btn"><a href="../product-brief/product.html">Buy<img src="https://img.icons8.com/nolan/25/fast-cart.png"/></a></button>
    <p class="item-description">DESCRIPTION: \n\n ${item.description}</p>
    </div>`
    })
})


