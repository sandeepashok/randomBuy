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
        <div class="form">
        <div class="name">
            <div class="name-head head">First Name:</div>
            <input type="text" class="firstname" placeholder="First Name">
            <div class="name-head head">Last Name:</div>
            <input type="text" class="lastname" placeholder="Last Name">
        </div>
        <div class="mail">
            <div class="mail-head head">E-Mail:</div>
            <input type="email" class="mail-input" placeholder="xyz@something.com">
        </div>
        <div class="address">
            <div class="address-head head">Address:</div>
            <input type="text" id="address-input" class="address-input" placeholder="Address"></input>
        </div>
        <div class="state">
            <div class="state-head head">State:</div>
            <input type="text" class="state-input" placeholder="State/Province">
        </div>
        <div class="country">
            <div class="country-head head">Country:</div>
            <input type="text" class="country-input" placeholder="country">
        </div>
        <div class="postal">
            <div class="postal-head head">Postal/Zip Code:</div>
            <input type="number" min="1" class="postal-code" placeholder="Postal/Zip Code">
        </div>
        <button class="place-order">Place Order</button>
    </div>`
    })