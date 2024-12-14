document.getElementById('loadData').addEventListener('click', () => {
    // Виконуємо запит на API для отримання даних
    fetch('https://randomuser.me/api/')
        .then(response => {
            // Перевіряємо, чи запит успішний
            if (!response.ok) {
                throw new Error('Не вдалося отримати дані');
            }
            return response.json(); // Перетворюємо відповідь в JSON
        })
        .then(data => {
            // Отримуємо необхідні дані
            const user = data.results[0];
            const picture = user.picture.large;
            const city = user.location.city;
            const country = user.location.country;
            const postcode = user.location.postcode;
            const email = user.email;

            // Формуємо HTML-код для відображення отриманих даних
            const userInfo = `
                <div class="user-info">
                    <img src="${picture}" alt="User Picture" />
                    <p><strong>Місто:</strong> ${city}</p>
                    <p><strong>Країна:</strong> ${country}</p>
                    <p><strong>Поштовий індекс:</strong> ${postcode}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                </div>
            `;

            // Додаємо нову інформацію в кінець списку
            document.getElementById('userData').innerHTML += userInfo;
        })
        .catch(error => {
            // Обробка помилок
            console.error('Помилка при отриманні даних:', error);
            document.getElementById('userData').innerHTML = 'Не вдалося отримати дані.';
        });
});
