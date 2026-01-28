document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
    let timerSeconds = 26;

    // Инициализация Telegram Mini App
    try {
        let tg = window.Telegram.WebApp;
        tg.expand(); // Расширяем приложение на весь экран
    } catch (e) {
        console.error("Telegram WebApp script not found.", e);
    }
    
    const updateTimer = () => {
        if (timerSeconds >= 0) {
            const seconds = String(timerSeconds).padStart(2, '0');
            timerElement.textContent = `00:${seconds}`;
            timerSeconds--;
        } else {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
            // Здесь можно будет добавить логику, что делать, когда время вышло
        }
    };

    // Запускаем таймер с интервалом в 1 секунду
    const timerInterval = setInterval(updateTimer, 1000);
});
