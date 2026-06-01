//localStorage
// const cl = console.log;
// localStorage.setItem("name", "Alex");
// localStorage.setItem("age", 20);
// cl(localStorage.getItem("name"));
// localStorage.removeItem("age")
// localStorage.clear()
// const form = document.getElementById("form-add");
// const productsList = document.getElementById("products-list");
// const clearBtn = document.getElementById("clear-btn");

// let products = JSON.parse(localStorage.getItem("products")) || [];

// function printProducts() {
//   productsList.innerHTML = "";

//   products.forEach((product) => {
//     const li = document.createElement("li");
//     li.textContent = `${product.product} - ${product.price}$`;

//     productsList.appendChild(li);
//   });
// }

// printProducts();

// if (form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(form).entries());
//     products.push({ product: data.product, price: data.price });
//     localStorage.setItem("products", JSON.stringify(products));
//     printProducts();
//     form.reset();
//   });
// }
// clearBtn.addEventListener("click", () => {
//   localStorage.removeItem("products");
//   products = [];
//   printProducts();
// });
const n = 100;
new Promise((resolve, reject) => {
    let number = [];
    for (let i = 0; i < n; i++) {
        number.push(Math.floor(Math.random() * n));
    }
    let count = [];
    for (let i = 0; i < n; i++) {
        if (number[i]%2 === 0) {
            count.push(number[i]);
        }
    }
    if (count.length > n/2) {
        resolve(count.toString());
    }
    else {
        reject(count.toString());
    }
})
.then((data) => {console.log("Resolved with number:", data);})
.catch((err) => {console.log("Rejected with number:", err);});