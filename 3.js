// task 1
let a= 12;      
let b= "Привет";  
let c= false;    

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

// task 2
x= 8;
y= 3;

console.log("Сумма =", x+y);
console.log("Разность =", x-y);
console.log("Произведение =", x*y);
console.log("Частное =", x/y);

// task 3
n= 19;

if (n<18) {
    console.log("Доступ запрещён");
} else {
    console.log("Доступ разрешён");
}

// task 4
p= 123;

if (typeof p=== "number") {
    console.log("Это число");
} else if (typeof p=== "string") {
    console.log("Это строка");
} else if (typeof p=== "boolean") {
    console.log("Это логическое");
} else {
    console.log("Неизвестный тип");
}

// task 5
d= 5;

switch(d) {
    case 1: console.log("Понедельник"); break;
    case 2: console.log("Вторник"); break;
    case 3: console.log("Среда"); break;
    case 4: console.log("Четверг"); break;
    case 5: console.log("Пятница"); break;
    case 6: console.log("Суббота"); break;
    case 7: console.log("Воскресенье"); break;
    default: console.log("Что-то не так с числом");
}

// task 6
for(i= 1; i<= 10; i++){
    console.log(i);
}

// task 7
m= 0;
for(z= 1; z<= 100; z++){
    m += z;
}
console.log("Сумма 1-100 =", m);

// task 8
for(q= 1; q<= 20; q++){
    if(q%2 === 0){
        console.log(q, "чётное");
    } else {
        console.log(q, "нечётное");
    }
}

// task 9
alpha = 10;
while(alpha >= 1){
    console.log(alpha);
    alpha--;
}

// task 10
gamma = "";
do {
    console.log("Введите пароль");
    gamma = "admin"; 
} while(gamma !== "admin");
