function getURLparam(paramName) {
  let param = new URLSearchParams(window.location.search);
  return param.get(paramName);
}
const urlData = JSON.parse(getURLparam("data"));

const productName = document.querySelector(".product--name");
const price = document.querySelector(".price");
const isSale = document.querySelector(".is--sale");
const saleDiscount = document.querySelector(".sale--discount");
const starRating = document.querySelector(".star--rating");

productName.textContent = urlData.productName + " ";
price.textContent = " " + urlData.price + "$";
isSale.textContent = urlData.sale ? "Is on sale" : "Is not on sale";
saleDiscount.textContent = "Sale " + urlData.saleDiscount * 100 + "%";
starRating.textContent = "Average Review: " + urlData.starRating + " Stars";

document.querySelector(
  ".title"
).innerHTML = `${urlData.productName} at ${urlData.price}$ - AmoBuy`;

document.querySelector(".img").src = urlData.imgSRC;
document.querySelector(".img").width = urlData.imgScale * 2;
