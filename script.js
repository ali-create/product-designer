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
const description = document.querySelector(".description");

const overlay = document.querySelector(".screenOverlay");
const modal = document.querySelector(".purchase--modal");
const purchase = document.querySelector(".purchaseBtn");
const ship = document.querySelector(".ship");
const purchaseComplete = document.querySelector(".purchaseComplete");

productName.textContent = urlData.productName + " ";
price.textContent = " " + urlData.price + "";
isSale.textContent = urlData.sale ? "Is on sale" : "Is not on sale";
saleDiscount.textContent = "Sale " + urlData.saleDiscount * 100 + "%";
starRating.innerHTML = "Average Review: " + urlData.starRating;
description.innerHTML = urlData.Description;

document.querySelector(
  ".title"
).innerHTML = `${urlData.productName} at ${urlData.price} - AmoBuy`;

document.querySelector(".img").src = urlData.imgSRC;
document.querySelector(".img").width = urlData.imgScale * 2;

purchase.addEventListener("click", function () {
  overlay.classList.toggle("overlay");
  modal.classList.toggle("hidden");
});
document.querySelector(".exit").addEventListener("click", function () {
  overlay.classList.toggle("overlay");
  modal.classList.toggle("hidden");
});
ship.addEventListener("click", function () {
  if (
    document.querySelector(".input--email").validity.valid &&
    document.querySelector(".input--email").value != ""
  ) {
    overlay.classList.toggle("overlay");
    modal.classList.toggle("hidden");
    setTimeout(() => {
      overlay.classList.toggle("overlay");
      purchaseComplete.classList.toggle("hidden");
    }, 500);
  }
});
document.querySelector(".ok").addEventListener("click", function () {
  overlay.classList.toggle("overlay");
  purchaseComplete.classList.toggle("hidden");
});
