'use strict';

// GET CART PRODUCTS
function createProductList() {
    fetch('' + endpoints.cart.url).then(function (response) {
        return response.json();
    }).then(function (productsList) {
        var html = '';
        for (var i = 0; i < productsList.length; i++) {
            html += '\n                    <tr>\n                        <th scope="row"> ' + productsList[i].id + ' </th>\n                        <td><img class="card-img-top" src="http://placehold.it/250x250" alt=""></td>\n                        <td> ' + productsList[i].name + ' </td>\n                        <td class="center"><i class="fas fa-times" data-id="' + productsList[i].id + '"></i></td>\n                        <td class="right"> $' + productsList[i].price + ' </td>\n                    </tr>\n                ';
        }
        $("#cart").append(html);
    });
}
createProductList();

//DELETE CART PRODUCTS
setTimeout(function () {
    var elementsArray = document.querySelectorAll('i.fas');

    elementsArray.forEach(function (elem) {
        elem.addEventListener("click", function () {
            var a = this.getAttribute("data-id");
            deleteOrder({ id: a });
            location.reload();
        });
    });
}, 500);

function deleteOrder(data) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(endpoints.cart.url + '/' + data.id, options).then(function (response) {
        return response.json;
    });
}

//MAKE ORDER FROM CART
document.getElementById('add-order').addEventListener("click", function () {
    fetch(endpoints.cart.url).then(function (response) {
        return response.json();
    }).then(function (cartItems) {
        var tab = [];
        for (var i = 0; i < cartItems.length; i++) {
            tab.push(cartItems[i].id);
        }
        addNewOrder({ username: "unknown", "orderProducts": tab });
        alert('Pomyślne zamówienie');
    });
});

function addNewOrder(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    return fetch(endpoints.orders.url, options).then(function (response) {
        return response.json;
    });
}