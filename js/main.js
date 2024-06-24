document.addEventListener("DOMContentLoaded", () => {
  fetch("data/rucksacks.json")
    .then((response) => response.json())
    .then((data) => {
      const productsContainer = document.getElementById("products-container");

      data.forEach((rucksack) => {
        const productCard = createProductCard(rucksack);
        productCard.querySelector("button").onclick = openProductPage;
        productsContainer.appendChild(productCard);
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке данных о рюкзаках:", error);
    });
});

function createProductCard(rucksack) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const image = document.createElement("img");
  image.src = rucksack.image;
  image.alt = rucksack.name;

  const title = document.createElement("h3");
  title.textContent = rucksack.name;

  const price = document.createElement("p");
  price.textContent = `Цена: ${rucksack.price} руб.`;

  const button = document.createElement("button");
  button.textContent = "Купить";
  button.dataset.productId = rucksack.id;

  productDiv.appendChild(image);
  productDiv.appendChild(title);
  productDiv.appendChild(price);
  productDiv.appendChild(button);

  return productDiv;
}

function openProductPage(event) {
  const productId = event.target.dataset.productId;
  window.location.href = `pages/product.html?id=${productId}`;
}
