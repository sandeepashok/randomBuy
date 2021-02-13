var apiURL = 'https://fakestoreapi.com/products?sort=desc';

fetch(apiURL)
    .then(function (data) {
        return data.json();
    })
    .then(function (products) {
        products.forEach(function (item) {
            // console.log(item)
            var container = document.querySelector(".container").appendChild(document.createElement('div'))
            container.className = "sub-container";
            container.id = `${item.id}`;
            container.innerHTML = `<div class="item-container" id="${item.id}">
                                        <div class="product-container">
                                            <img src="${item.image}" alt="${item.category}" class="image">
                                            <p class="item-title">${item.title}</p>
                                            <div class="price-section">
                                                <p class="item-price">${"$" + item.price}</p>    
                                            </div>
                                            <a href="/product-brief/product.html?item=${item.id}" class="buy-btn" data-item-id="${item.id}">Buy<img class="cart-img"  data-item-id="${item.id}" src="./img/carts.svg"/></a>
                                            <button class="wishlist-btn">WishList<img class="cart-img" src="./img/love.svg"/></button>
                                        </div>
                                    </div>`
        })

    })