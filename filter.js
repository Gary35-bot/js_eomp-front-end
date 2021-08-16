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

  products.forEach((products) => {
    productContainer.innerHTML += `
      <div class="products">
        <h2 class="product-name">${products[1]}</h2>
        <h3 class="product-discription">${products[2]}</h3>
        <h3 class="product-price">${products[3]}</h3>
      </div>
    `;
  });
}
// function addToCart(id) {
//   let product = products.find((item) => {
//     item.id == id
//   })
//   console.log(product)
// }

// description,"
//                            "price
