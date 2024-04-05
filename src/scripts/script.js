// script.js
function calculateDuration() {
    var criticalPathLength = parseFloat(document.getElementById("criticalPathLength").value);
    var totalResourceRequirement = parseFloat(document.getElementById("totalResourceRequirement").value);
    var resourceOnCriticalPath = parseFloat(document.getElementById("resourceOnCriticalPath").value);
    var resourceOnNonCriticalPath = parseFloat(document.getElementById("resourceOnNonCriticalPath").value);
    var startDate = new Date(document.getElementById("startDate").value);

    // Розрахунок тривалості за допомогою резервів часу
    var nonCriticalPathLength = criticalPathLength / (1 - (resourceOnCriticalPath / totalResourceRequirement));
    var nonCriticalPathResourceRequirement = resourceOnNonCriticalPath * nonCriticalPathLength / criticalPathLength;
    var totalDuration = criticalPathLength + nonCriticalPathLength;
    var endDate = new Date(startDate.getTime() + totalDuration * 24 * 60 * 60 * 1000); // Дата закінчення

    // Вивід результату
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "<h2>Результат:</h2>";
    resultElement.innerHTML += "<p>Тривалість комплексу робіт: " + totalDuration.toFixed(2) + " днів</p>";
    resultElement.innerHTML += "<p>Дата закінчення: " + endDate.toLocaleDateString() + "</p>";
}
