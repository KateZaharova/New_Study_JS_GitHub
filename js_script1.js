
/*const message = "Java Script!";
console.log(message);

//alert(message);

const foo = { id: 1, verified: true, color: 'green' };
const bar = { id: 2, verified: false, color: 'red' };

console.table({ foo, bar });

console.log(typeof bar);

console.groupCollapsed('User Details');
console.log('name: John Doe');
console.warn('job: Software Developer');
// Nested Group
console.group('Address');
console.log('Street: 123 Townsend Street');
console.log('City: San Francisco');
console.error('State: CA');
console.groupEnd();
console.groupEnd();

let i = 0;
console.time("While loop");
while (i < 1000000) {
  i++;
}
console.timeEnd("While loop");
console.time("For loop");
for (i = 0; i < 1000000; i++) {
  // For Loop
}
console.timeEnd("For loop");

const value = prompt("Please enter a number");
console.log(typeof value);
console.log(value);

const season = "summer";

        if (season === "winter"){
            conslole.log("Зима");

            [1,2,3,4,5].forEach(number =>{
                console.log(number);
            });
        } else if (season === "summer"){
            console.log("Літо");
        } else if (season === "autumn") {
            console.log("Осінь");
        } else if (season === "spring") {
            console.log("Весна");
        } else {
            console.log("What a ???");
};

let elementWidth = "40px";
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth:", elementWidth);

let elementHight = "50.55px";
elementHight = Number.parseFloat(elementHight);
console.log("elementHight:", elementHight);

let salary = 200.35066;
salary = salary.toFixed(4);
salary = Number(salary);
console.log(salary);

console.log(2 ** 4);

let number = prompt("PLease enter the number");
number = Number(number);
console.log(number);

let power = prompt("Please enter the power!");
power = Number(power);
console.log(power);

let result = number ** power;
console.log(result);

const colors = ["yellow", "green", "black", "blue", "orange", "teal", "pink", "grey"];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color; 

let brand = prompt("Please type the brand");
brand = brand.toUpperCase();
console.log(brand);

let brand = "Panasonic";
brand = brand.toUpperCase();
console.log(brand);
console.log(brand[4]);
console.log(brand.slice(0).toLowerCase());
console.log(brand[0] + brand.slice(1).toLowerCase());

const string1 = "Have a nice day!";
const string2 = "What a wonderful Day!";

const blackListWord1 = "day";
const blackListWord2 = "night";

console.log(string1.includes(blackListWord1));
console.log(string1.includes(blackListWord2));

console.log(string2.toLowerCase().includes(blackListWord1));

console.log(!0 || 4 || null || 0);

const x1 = 10;
const x2 = 30;
const number = 9;
console.log(`Число ${number} попадает в отрезки до ${x1} и после ${x2} ?`, number < x1 || number > x2 );

const isOnLine = true;
const isFriend = true;
const isDnd = true;

const canOpenTheChat = isOnLine && isFriend && !isDnd
console.log(`Можно ли открыть чат?`, canOpenTheChat)

const sub = "vip";
const canAccessContent = sub === "pro" || sub === "vip";
console.log(`Есть доступ к контенту?`, canAccessContent);

if ( 1<5) {
    console.log("Happy birthday!");
} else {
    console.log("How do you do?");
};

const salary = 300;

if (salary <= 500) {
    console.log("Level 1");
} else if (salary > 500 && salary < 1500) {
    console.log("Level 2");
} else if (salary > 1500 && salary <3000) {
    console.log("Level 3");
} else {
    console.log("Level 4");
}

console.log("bla-bla-bla");
const balance = 1000;
let message;

if (balance >= 0) {
    console.log(message = `Positive balance`);
} else {
    console.log(message = `Negative balance`);
};

const res = balance >= 0 ? `Positive balance` : `Negative balance`;

console.log(res);*/

const star = 4;
let price;

/*if (star === 1 || star === 2) {
    price = 20;
} else if (star === 3 || star === 4){
    price = 70;
} else if (star === 5) {
    price = 120;
} else {
    console.log("No hotel with such star");
};

switch (star){
    case 1:
    case 2:
        price = 20;
        break;
    case 3:
    case 4:
        price = 70;
        break;
    case 5:
        price = 120;
        break;
    default:
        console.log("No hotel with such star");
};

console.log(price);

const option = 4;
let message = "";

switch (option) {
    case 1:
        message = "You can leave your head on";
        break;
    case 2:
        message = "Hello world!";
        break;
    case 3:
        message = "So far, so good";
        break;
    default:
        message = "Our manager will contact you";
};
console.log(message);

for (инициализация; условие; пост - выражение){
    //тело цикла
};*/



for (let i = 10; i >= -10; i -= 2){
    console.log(i);
};
console.log("Rainy day!")