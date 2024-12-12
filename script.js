// Змінюємо колір для елемента з номером 3 (getElementById)
document.getElementById("item3").addEventListener("click", function() {
  const item3 = document.getElementById("item3");

  // Перевіряємо, чи вже був клік на цей елемент (використовуємо атрибут data-clicked)
  if (!item3.hasAttribute("data-clicked")) {
    // Перший клік - змінюємо на перший набір кольорів
    item3.style.backgroundColor = "lightgreen";
    item3.style.color = "blue";
    // Позначаємо, що клік було здійснено
    item3.setAttribute("data-clicked", "true");
  } else {
    // Другий клік - змінюємо на другий набір кольорів
    item3.style.backgroundColor = "orange";
    item3.style.color = "yellow";
    // Видаляємо атрибут, щоб більше не змінювати кольори
    item3.setAttribute("data-clicked", "clickedAgain");
  }
});

// Змінюємо колір для елемента з номером 4 (querySelector)
document.getElementById("item4").addEventListener("click", function() {
  const item4 = document.querySelector("#item4");

  // Перевіряємо, чи вже був клік на цей елемент (використовуємо атрибут data-clicked)
  if (!item4.hasAttribute("data-clicked")) {
    // Перший клік - змінюємо на перший набір кольорів
    item4.style.backgroundColor = "orange";
    item4.style.color = "yellow";
    // Позначаємо, що клік було здійснено
    item4.setAttribute("data-clicked", "true");
  } else {
    // Другий клік - змінюємо на другий набір кольорів
    item4.style.backgroundColor = "lightgreen";
    item4.style.color = "blue";
    // Видаляємо атрибут, щоб більше не змінювати кольори
    item4.setAttribute("data-clicked", "clickedAgain");
  }
});

// Перемінна для зберігання первинного зображення
let firstImage = document.getElementById("image");

// Логіка для кнопок управління зображенням
const addBtn = document.getElementById("addBtn");
const imageContainer = document.getElementById("image-container");

addBtn.addEventListener("click", function() {
    // Додаємо нове зображення в контейнер перед кнопками, якщо його ще немає
    const newImage = document.createElement("img");
    newImage.src = firstImage.src; // Встановлюємо таке саме фото, що і у першого
    newImage.alt = "Фото Києва";
    newImage.width = 500;
    newImage.classList.add("new-image"); // Додаємо клас для нового зображення
    imageContainer.appendChild(newImage); // Додаємо нове зображення перед кнопками
});

// Збільшення зображення
document.getElementById("increaseBtn").addEventListener("click", function() {
    const newImages = document.querySelectorAll(".new-image");
    
    if (newImages.length === 0) {
        // Якщо немає нових зображень, збільшуємо розмір першого фото
        let currentWidth = firstImage.width;
        firstImage.width = currentWidth + 50;
    } else {
        // Якщо є нові зображення, збільшуємо розмір останнього
        const lastImage = newImages[newImages.length - 1];
        let currentWidth = lastImage.width;
        lastImage.width = currentWidth + 50;
    }
});

// Зменшення зображення
document.getElementById("decreaseBtn").addEventListener("click", function() {
    const newImages = document.querySelectorAll(".new-image");

    if (newImages.length === 0) {
        // Якщо немає нових зображень, зменшуємо розмір першого фото
        let currentWidth = firstImage.width;
        if (currentWidth > 50) { // Щоб не зменшити до нуля
            firstImage.width = currentWidth - 50;
        }
    } else {
        // Якщо є нові зображення, зменшуємо розмір останнього
        const lastImage = newImages[newImages.length - 1];
        let currentWidth = lastImage.width;
        if (currentWidth > 50) { // Щоб не зменшити до нуля
            lastImage.width = currentWidth - 50;
        }
    }
});

// Видалення зображення
document.getElementById("removeBtn").addEventListener("click", function() {
    const newImages = document.querySelectorAll(".new-image");

    // Якщо є нові зображення, видаляємо останнє
    if (newImages.length > 0) {
        const lastImage = newImages[newImages.length - 1];
        imageContainer.removeChild(lastImage);
    } else {
        // Якщо нових зображень немає, видаляємо перше зображення
        imageContainer.removeChild(firstImage);
    }
});

