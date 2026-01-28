let products = [];
let cart = [];
let total = 0;

function addProduct() {
    const name = document.getElementById("pname").value;
    const price = Number(document.getElementById("pprice").value);
    const stock = Number(document.getElementById("pstock").value);

    if (!name || price <= 0 || stock <= 0) {
        alert("Please enter valid product details");
        return;
    }

    products.push({ name, price, stock });
    displayProducts();

    document.getElementById("pname").value = "";
    document.getElementById("pprice").value = "";
    document.getElementById("pstock").value = "";
}

function displayProducts() {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    products.forEach((p, index) => {
        list.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>$${p.price}</td>
                <td>${p.stock}</td>
                <td>
                    <button onclick="buyProduct(${index})">Buy</button>
                </td>
            </tr>
        `;
    });
}

function buyProduct(index) {
    if (products[index].stock === 0) {
        alert("Out of stock!");
        return;
    }

    products[index].stock--;
    cart.push(products[index]);
    total += products[index].price;

    document.getElementById("total").innerText = total;
    document.getElementById("cartItems").innerHTML +=
        `<li>${products[index].name} - $${products[index].price}</li>`;

    displayProducts();
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert(
        "Purchase Successful!\n" +
        "Items: " + cart.length + "\n" +
        "Total: $" + total
    );

    cart = [];
    total = 0;
    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("total").innerText = 0;
}
