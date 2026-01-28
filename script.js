document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
    let timerSeconds = 26;

    const updateTimer = () => {
        if (timerSeconds >= 0) {
            const seconds = String(timerSeconds).padStart(2, '0');
            timerElement.textContent = `00:${seconds}`;
            timerSeconds--;
        } else {
            // Остановка таймера
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
        }
    };

    // Запускаем таймер с интервалом в 1 секунду
    const timerInterval = setInterval(updateTimer, 1000);
});
