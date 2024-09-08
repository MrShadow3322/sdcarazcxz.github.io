document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const minBalance = 1000;
    const maxBalance = 10000;

    // Генерация случайного баланса при первом запуске
    if (!localStorage.getItem('userBalance')) {
        const randomBalance = Math.floor(Math.random() * (maxBalance - minBalance + 1)) + minBalance;
        localStorage.setItem('userBalance', randomBalance);
        balanceElement.textContent = `${randomBalance.toLocaleString()} RATC`;
    } else {
        balanceElement.textContent = `${localStorage.getItem('userBalance')} RATC`;
    }
});

// Переключение между страницами
function showPage(page) {
    if (page === 'main') {
        document.getElementById('main-page').style.display = 'block';
        document.getElementById('tasks-page').style.display = 'none';
    } else if (page === 'tasks') {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('tasks-page').style.display = 'block';
    }
}

// Выполнение задания
function completeTask() {
    if (!localStorage.getItem('taskCompleted')) {
        let currentBalance = parseInt(localStorage.getItem('userBalance')) || 0;
        localStorage.setItem('userBalance', currentBalance + 500);
        localStorage.setItem('taskCompleted', 'true');
        alert('Вы получили 500 RATC за подписку!');
        location.reload(); // Обновляем страницу для обновления баланса
    } else {
        alert('Вы уже выполнили это задание!');
    }
}
