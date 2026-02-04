document.addEventListener("DOMContentLoaded", function () {

    // 1
    function greet(name) {
        return "Привет, " + name + "!";
    }
    console.log(greet("Каусар"));

    // 2
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(2, 3));
    console.log(sum(10, 5));

    // 3
    function showMessage() {
        alert("Функция сработала!");
    }
    showMessage();

    // 4
    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function () {
        alert("Кнопка нажата!");
    });

    // 5
    var hoverDiv = document.getElementById("hoverDiv");
    hoverDiv.addEventListener("mouseover", function () {
        hoverDiv.style.color = "red";
    });
    hoverDiv.addEventListener("mouseout", function () {
        hoverDiv.style.color = "black";
    });

    // 6
    var count = 0;
    var clickBtn = document.getElementById("clickBtn");
    var countText = document.getElementById("count");

    clickBtn.addEventListener("click", function () {
        count++;
        countText.textContent = count;
    });

    // 7
    var textInput = document.getElementById("textInput");
    var textOutput = document.getElementById("textOutput");

    textInput.addEventListener("input", function () {
        textOutput.textContent = textInput.value;
    });

    // 8
    function showAlert(msg) {
        alert(msg);
    }
    var alertBtn = document.getElementById("alertBtn");
    alertBtn.addEventListener("click", function () {
        showAlert("Привет!");
    });

    // 9
    var colorDiv = document.getElementById("colorDiv");
    colorDiv.style.color = "blue";

    colorDiv.addEventListener("click", function () {
        if (colorDiv.style.color === "blue") {
            colorDiv.style.color = "red";
        } else {
            colorDiv.style.color = "blue";
        }
    });

    // 10
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var sumBtn = document.getElementById("sumBtn");
    var sumResult = document.getElementById("sumResult");

    sumBtn.addEventListener("click", function () {
        var a = Number(num1.value);
        var b = Number(num2.value);
        sumResult.textContent = a + b;
    });

    // 11
    function createBox(color) {
        var box = document.createElement("div");
        box.style.width = "100px";
        box.style.height = "100px";
        box.style.background = color;
        box.style.margin = "5px";
        document.body.appendChild(box);
    }

    redBtn.addEventListener("click", function () {
        createBox("red");
    });
    greenBtn.addEventListener("click", function () {
        createBox("green");
    });
    blueBtn.addEventListener("click", function () {
        createBox("blue");
    });

    // 12
    var list = document.getElementById("list");
    list.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            alert(e.target.textContent);
        }
    });

    // 13
    var timer = 0;
    var interval;
    var timerText = document.getElementById("timer");

    startBtn.addEventListener("click", function () {
        interval = setInterval(function () {
            timer++;
            timerText.textContent = timer;
        }, 1000);
    });

    stopBtn.addEventListener("click", function () {
        clearInterval(interval);
    });

    // 14
    sendBtn.addEventListener("click", function () {
        if (email.value.includes("@")) {
            alert("Email принят");
        } else {
            alert("Ошибка email");
        }
    });

    // 15
    var random = Math.floor(Math.random() * 10) + 1;
    var tries = 0;

    guessBtn.addEventListener("click", function () {
        var user = Number(guessInput.value);
        tries++;

        if (user < random) {
            hint.textContent = "Больше";
        } else if (user > random) {
            hint.textContent = "Меньше";
        } else {
            hint.textContent = "Угадал за " + tries + " попыток";
        }
    });

});
