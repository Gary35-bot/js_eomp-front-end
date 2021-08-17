// let products = [];
// let cart = [];

fetch("https://immense-lake-69588.herokuapp.com/view-products/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.data);
    json.data.forEach((item) => {
      console.log(item);
      console.log(item[1]);
    });
    renderproducts(json.data);
  });

function renderproducts(products) {
  let productContainer = document.querySelector("#products-container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="products">
        <h2 class="product-name">${product[1]}</h2>
        <h3 class="product-discription">${product[2]}</h3>
        <h3 class="product-price">${product[3]}</h3>
        <button onclick="deleteProduct(${product[0]})">delete</button>
        <button onclick="toCart(${product[0]})">Cart</button>
        <button onclick="add(${product[0]})">Edit</button>

      </div>
    `;
  });
}

// add to cart function

function toCart(id) {
  console.log(id);
  let product = [];
  fetch("https://immense-lake-69588.herokuapp.com/view-products/")
    .then((response) => response.json())
    .then((json) => {
      json.data.forEach((item) => {
        if (item[0] == id) {
          product = item;
        }
      });
      console.log(product);
      // code here
      // cart.push(product);
      // console.log("Here is your items:", cart);
    });
}

function deleteProduct(index) {
  console.log(index);
  let delConfirm = confirm("Are you sure you want to delete this product?");
  if (delConfirm) {
    fetch(`https://immense-lake-69588.herokuapp.com/delete-product/${index}`);
  }
}

// function Edit(index) {
//   // console.log(index);
//   if (index == -1) {
//     let edit_container = document.querySelector(".editor");
//     edit_container.style.display = "none";
//   } else {
//     let edit_container = document.querySelector(".editor");
//     edit_container.style.display = "flex";
//     fetch("https://immense-lake-69588.herokuapp.com/show-products/").then(
//       (request) => {
//         request.json().then((obj) => {
//           // console.log(obj);
//           data = obj.data;
//           // console.log(data[index]);
//           product = data[index];
//           populateEdit(data[index][0]);
//           let old_container = document.querySelector(".old-info");
//           old_container.innerHTML = `<div class="item">
//            <p class="product-name">Name: ${product[1]}</p>
//            <p class="product-price">Price: ${product[2]}</p>
//            <p class="product-date">Date: ${product[3]}</p> 
//        </div>`;
//         });
//       }
//     );
//   }
// }
