// 1
function greet(name) {
    return "Привет, " + name + "!";
}
console.log(greet("Каусар"));

// 2
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
console.log(sum(10, 20));

// 3
function showMessage() {
    alert("Функция сработала!");
}
showMessage();

// 4
document.getElementById("btn1").onclick = function() {
    alert("Кнопка нажата!");
};

// 5
let hoverDiv = document.getElementById("hoverDiv");
hoverDiv.onmouseover = function() {
    hoverDiv.style.color = "red";
};
hoverDiv.onmouseout = function() {
    hoverDiv.style.color = "black";
};

// 6
let count = 0;
document.getElementById("clickBtn").onclick = function() {
    count++;
    document.getElementById("count").textContent = count;
};

// 7
document.getElementById("textInput").oninput = function() {
    document.getElementById("textOutput").textContent = this.value;
};

// 8
function showAlert(msg) {
    alert(msg);
}
document.getElementById("alertBtn").onclick = function() {
    showAlert("Привет из функции");
};

// 9
let colorDiv = document.getElementById("colorDiv");
colorDiv.onclick = function() {
    if (colorDiv.className === "blue") {
        colorDiv.className = "red";
    } else {
        colorDiv.className = "blue";
    }
};

// 10
document.getElementById("sumBtn").onclick = function() {
    let a = Number(num1.value);
    let b = Number(num2.value);
    sumResult.textContent = a + b;
};

// 11
function createBox(color) {
    let box = document.createElement("div");
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.background = color;
    box.className = "box";
    document.body.appendChild(box);
}

redBtn.onclick = () => createBox("red");
greenBtn.onclick = () => createBox("green");
blueBtn.onclick = () => createBox("blue");

// 12
list.onclick = function(e) {
    if (e.target.tagName === "LI") {
        alert(e.target.textContent);
    }
};

// 13
let timer = 0;
let interval;

startBtn.onclick = function() {
    interval = setInterval(function() {
        timer++;
        document.getElementById("timer").textContent = timer;
    }, 1000);
};

stopBtn.onclick = function() {
    clearInterval(interval);
};

// 14
sendBtn.onclick = function() {
    if (email.value.includes("@")) {
        alert("Email принят");
    } else {
        alert("Ошибка email");
    }
};

// 15
let random = Math.floor(Math.random() * 10) + 1;
let tries = 0;

guessBtn.onclick = function() {
    let user = Number(guessInput.value);
    tries++;

    if (user < random) {
        hint.textContent = "Больше";
    } else if (user > random) {
        hint.textContent = "Меньше";
    } else {
        hint.textContent = "Угадал за " + tries + " попыток";
    }
};
