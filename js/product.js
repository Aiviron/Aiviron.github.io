document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    fetch("data/rucksacks.json")
      .then((response) => response.json())
      .then((data) => {
        const product = data.find((rucksack) => rucksack.id === productId);

        if (product) {
          displayProduct(product);
        } else {
          console.error("Товар не найден");
        }
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных о рюкзаках:", error);
      });
  } else {
    console.error("Не указан ID товара");
  }
});

function displayProduct(rucksack) {
  const productContainer = document.getElementById("product-container");

  const image = document.createElement("img");
  image.src = `images/${rucksack.image}`;
  image.alt = rucksack.name;

  const title = document.createElement("h2");
  title.textContent = rucksack.name;

  const description = document.createElement("p");
  description.textContent = rucksack.description;

  const price = document.createElement("p");
  price.textContent = `Цена: ${rucksack.price} руб.`;

  productContainer.appendChild(image);
  productContainer.appendChild(title);
  productContainer.appendChild(description);
  productContainer.appendChild(price);
}
