// Form Validation
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || !email.endsWith("@astanait.edu.kz")) {
        document.getElementById("formMessage").innerText = "Введите корректный email.";
        alert("Ошибка: валидация не пройдена.");
    } else {
        document.getElementById("formMessage").innerText = "Форма успешно отправлена!";
        alert("Форма успешно отправлена!");
    }
});

// To-Do List with Higher-Order Function
function addTask() {
    const task = document.getElementById("taskInput").value;
    if (task !== "") {
        const taskList = document.getElementById("taskList");
        const tasks = taskList.querySelectorAll("li");
        const newTask = document.createElement("li");
        newTask.textContent = task;

        Array.from(tasks).forEach(task => taskList.appendChild(task));
        taskList.appendChild(newTask);

        document.getElementById("taskInput").value = "";
    }
}

// Number Sorting Tool
function sortNumbers(ascending) {
    const input = document.getElementById("numbersInput").value;
    const numbers = input.split(",").map(Number).filter(n => !isNaN(n));

    if (ascending) {
        numbers.sort((a, b) => a - b);
    } else {
        numbers.sort((a, b) => b - a);
    }

    document.getElementById("sortedResult").innerText = "Отсортированные числа: " + numbers.join(", ");
}

// Change Background Color
function changeBackgroundColor() {
    const colors = ["#f0f8ff", "#faebd7", "#ff6347", "#e6e6fa"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Display Current Date and Time
function displayDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString('ru-RU', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    });
    document.getElementById("currentDateTime").innerText = formattedDate;
}
setInterval(displayDateTime, 1000);

// Guessing Game
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    let guess;
    let attempts = 0;

    do {
        guess = Number(prompt("Угадайте число от 1 до 100:"));
        attempts++;

        if (guess === randomNumber) {
            alert("Правильно! Вы угадали число за " + attempts + " попыток.");
        } else if (guess < randomNumber) {
            alert("Слишком мало! Попробуйте снова.");
        } else if (guess > randomNumber) {
            alert("Слишком много! Попробуйте снова.");
        }
    } while (guess !== randomNumber);
}

// Rating System
const stars = document.querySelectorAll(".star");
stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        stars.forEach((s, i) => {
            s.style.color = i <= index ? "gold" : "gray";
        });
    });
});

// Day/Night Theme Switch
function toggleTheme() {
    document.body.classList.toggle("night-theme");
}

// Display current time when the button is clicked
function showCurrentTime() {
    const time = new Date().toLocaleTimeString();
    document.getElementById("timeDisplay").innerText = "Текущее время: " + time;
}

// Reset form inputs
function resetForm() {
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById("formMessage").innerText = "";
}

// Fetch and display a random quote
function loadRandomQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById("quoteDisplay").innerText = `"${data.slip.advice}"`;
        })
        .catch(error => {
            console.error("Ошибка загрузки цитаты:", error);
            document.getElementById("quoteDisplay").innerText = "Не удалось загрузить цитату.";
        });
}




