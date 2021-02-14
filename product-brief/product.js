var urlParams = window.location.href;
var url = new URL(urlParams);
var id = url.searchParams.get("item")
console.log(id);

var apiURL = `https://fakestoreapi.com/products/${id}`;

fetch(apiURL)
    .then(function (data) {
        return data.json()
    })
    .then(function (item) {
        var container = document.querySelector('.container2');
        container.id = `${item.id}`
        container.innerHTML = `<p class="product-title">${item.title}</p>
        <img src="${item.image}" alt="product-image" class="product-buy-img">
        <p class="product-price">${"Price: $" + item.price}</p>
        <p class="product-description"><span class="product-desc-head">Description:</span> +${item.description}</p>
        <div class="product-btns">
        <button class="btn">Add to cart</button>
        <button class="btn">Buy now</button>
        </div>
        `


    })