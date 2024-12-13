// Функція для перевірки даних форми
function Formdata(data) {
    let valid = true; // Змінна для відстеження статусу перевірки

    // Перевірка ПІБ (формат: Іванов І.І.)
    let namePattern = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    let nameField = data.name;
    if (!namePattern.test(nameField.value)) {
        nameField.style.borderColor = "red";
        valid = false;
    } else {
        nameField.style.borderColor = "";
    }

    // Перевірка телефону (формат: (XXX)-XXX-XX-XX)
    let phonePattern = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    let phoneField = data.phone;
    if (!phonePattern.test(phoneField.value)) {
        phoneField.style.borderColor = "red";
        valid = false;
    } else {
        phoneField.style.borderColor = "";
    }

    // Перевірка ID-card (формат: 10 цифр)
    let idCardPattern = /^\d{10}$/;
    let idCardField = data.idcard;
    if (!idCardPattern.test(idCardField.value)) {
        idCardField.style.borderColor = "red";
        valid = false;
    } else {
        idCardField.style.borderColor = "";
    }

    // Перевірка факультету (тільки літери)
    let facultyPattern = /^[А-ЯІЇЄҐа-яіїєґ]+$/;
    let facultyField = data.faculty;
    if (!facultyPattern.test(facultyField.value)) {
        facultyField.style.borderColor = "red";
        valid = false;
    } else {
        facultyField.style.borderColor = "";
    }

    // Перевірка дати народження (формат: ЧЧ.ЧЧ.ЧЧЧЧ)
    let birthdatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
    let birthdateField = data.birthdate;
    if (!birthdatePattern.test(birthdateField.value)) {
        birthdateField.style.borderColor = "red";
        valid = false;
    } else {
        birthdateField.style.borderColor = "";
    }

    // Якщо всі перевірки пройшли успішно
    if (valid) {
        displayResults(data); // Виводимо дані під формою
        return false; // Не відправляємо форму
    } else {
        return false; // Не відправляємо форму, якщо є помилки
    }
}

// Функція для виведення результатів під формою
function displayResults(data) {
    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <h3>Введена інформація:</h3>
        <p><strong>ПІБ:</strong> ${data.name.value}</p>
        <p><strong>Телефон:</strong> ${data.phone.value}</p>
        <p><strong>ID-card:</strong> ${data.idcard.value}</p>
        <p><strong>Факультет:</strong> ${data.faculty.value}</p>
        <p><strong>Дата народження:</strong> ${data.birthdate.value}</p>
    `;
}

// Функція для створення таблиці 6x6
function createTable() {
    let tableBody = document.getElementById("table").getElementsByTagName('tbody')[0];
    
    // Заповнюємо таблицю номерами від 1 до 36
    let count = 1;
    for (let i = 0; i < 6; i++) {
        let row = tableBody.insertRow(i);
        for (let j = 0; j < 6; j++) {
            let cell = row.insertCell(j);
            cell.textContent = count++;
            cell.style.padding = "20px";
            cell.style.textAlign = "center";
            // Додаємо обробники подій для кожної клітинки
            cell.addEventListener('mouseover', function() {
                changeCellColorOnHover(cell);  // При наведенні змінюється колір на випадковий
            });
            cell.addEventListener('click', function() {
                changeCellColorOnClick(cell);  // При кліку змінюється колір на обраний
            });
            cell.addEventListener('dblclick', function() {
                changeMainDiagonalColor();  // При подвійній кліці змінюється колір головної діагоналі
            });
        }
    }
}

// Функція для зміни кольору клітинки при наведенні
function changeCellColorOnHover(cell) {
    let randomColor = getRandomColor();
    cell.style.backgroundColor = randomColor;
}

// Функція для отримання випадкового кольору
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функція для зміни кольору клітинки при кліку на неї
function changeCellColorOnClick(cell) {
    let color = document.getElementById("colorPicker").value;  // Отримуємо вибраний колір
    cell.style.backgroundColor = color;  // Встановлюємо вибраний колір
}

// Функція для зміни кольору головної діагоналі таблиці при подвійному кліку
function changeMainDiagonalColor() {
    let color = document.getElementById("colorPicker").value;  // Отримуємо вибраний колір
    let table = document.getElementById("table");
    let rows = table.getElementsByTagName('tr');
    
    for (let i = 0; i < 6; i++) {
        let cell = rows[i].cells[i];  // Головна діагональ: (0,0), (1,1), (2,2), ...
        cell.style.backgroundColor = color;  // Встановлюємо вибраний колір
    }
}

// Викликаємо функцію для створення таблиці при завантаженні сторінки
window.onload = createTable;
