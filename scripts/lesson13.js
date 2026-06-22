// localStorage
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
// const n = 100;
// new Promise((resolve, reject) => {
//     let number = [];
//     for (let i = 0; i < n; i++) {
//         number.push(Math.floor(Math.random() * n));
//     }
//     let count = [];
//     for (let i = 0; i < n; i++) {
//         if (number[i]%2 === 0) {
//             count.push(number[i]);
//         }
//     }
//     if (count.length > n/2) {
//         resolve(count.toString());
//     }
//     else {
//         reject(count.toString());
//     }
// })
// .then((data) => {console.log("Resolved with number:", data);})
// .catch((err) => {console.log("Rejected with number:", err);});


const wahsDishes = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;

        if (success){
            resolve("The dishes are washed");
        }
        else{
            reject("The dishes are not washed");
        }
    }, 2000)
});
const cleanRoom = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;

        if (success){
            resolve("The room is cleaned");
        }
        else{
            reject("The room is not cleaned");
        }
    }, 4000)
});
const makeDinner = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;

        if (success){
            resolve("Dinner is ready");
        }
        else{
            reject("Dinner is not prepared");
        }
    }, 7000)
})
async function handlePromise(){
    try{
        const result = await wahsDishes;
        console.log(result);
        const result1 = await cleanRoom;
        console.log(result1);
        const result2 = await makeDinner;
        console.log(result2);
    }
    catch(error){
        console.error(error)
    }
}

handlePromise();
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
const min = 1;
const max = 10;
const data = Array.from({ length: max - min + 1 }, (_, i) => min + i);
shuffle(data);
console.log("Shuffled:", data);
function sortArray(data) {
	const sortPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (data.length > 0) {
				const sortData = [...data].sort((a, b) => a - b);
				localStorage.setItem("myData", JSON.stringify(sortData));
				resolve(sortData);
			} else {
				reject("Array empty");
			}
		}, 4000);
	});
	return sortPromise;
}

sortArray(data)
	.then((result) => {
		console.log("Sorted:", result);
	})
	.catch((error) => {
		console.log(error);
	});

function multiplyAsync(a,b){
    const multiplePromise = new Promise((resolve, reject) =>{
        if(typeof a =='number' || typeof b =='number'){
            const res = (a*b);
            resolve(`Result : ${res}`);
        }else{
            reject("Enter a number")
        }
    })
    return multiplePromise;
}
async function handlePromise(){
    try{
        const result = await multiplyAsync(6,9);
        console.log(result);
    }
    catch(error){
        console.error(error)
    }
}
handlePromise();
// multiplyAsync(6,9)
//     .then((result) =>{
//         console.log("Result = ",result)
//     })
//     .catch((errro)=>{
//         console.log(error)
//     })