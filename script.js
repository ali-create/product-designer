function getURLparam(paramName) {
  let param = new URLSearchParams(window.location.search);
  return param.get(paramName);
}
const urlData = JSON.parse(getURLparam("data"));

const productName = document.querySelectorAll(".product--name");
const price = document.querySelectorAll(".price");
const isSale = document.querySelector(".is--sale");
const saleDiscount = document.querySelector(".sale--discount");
const starRating = document.querySelector(".star--rating");
const description = document.querySelector(".description");
// const itemPurchaseName = document.querySelector(".product--name_purchase");
// const pricePurchase = document.querySelector(".price_purchase");

const overlay = document.querySelector(".screenOverlay");
const modal = document.querySelector(".purchase--modal");
const purchase = document.querySelector(".purchaseBtn");
const ship = document.querySelector(".ship");
const purchaseComplete = document.querySelector(".purchaseComplete");

productName.forEach((cur) => {
  cur.textContent = urlData.productName + " ";
});
// itemPurchaseName.textContent = urlData.productName + " ";
// pricePurchase.textContent = " " + urlData.price + "";
price.forEach((cur) => {
  cur.textContent = urlData.price;
});
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

Notification.requestPermission();

document.querySelector(".ok").addEventListener("click", function () {
  overlay.classList.toggle("overlay");
  purchaseComplete.classList.toggle("hidden");
  // setTimeout();
  const time = 50 - Math.trunc(Math.random() * 40 + 30);
  const tTime = 60 * 5 - time;
  const timer = setTimeout(() => {
    showNotif();
  }, tTime * 1000);
  // console.log(tTime);
});

//////////////////////////////////////

function showNotif() {
  const notification = new Notification("Your Item has been Shipped!", {
    body: `We have shipped '${urlData.productName}' to ${
      document.querySelector(".input--address").value
    }`,
    image: urlData.imgSRC,
    icon: "Untitled.png",
  });
}

// console.log(Notification.permission);
