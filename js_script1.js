
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
};



for (let i = 10; i >= -10; i -= 2){
    console.log(i);
};
console.log("Rainy day!")


const minSalary = 500;
const maxSalary = 5000;
const employees = 7;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1){
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);

    console.log(`Employee's salary # ${i} - ${salary}`);

    totalSalary += salary;
}
console.log(`Total salary: `, totalSalary);

const min = 3;
const max = 6;
let total = 0;

for (let i = min; i <= max; i += 1){
    if (i % 2 !== 0) {
        console.log(`Не четное: `, i);
        continue;
    }

    console.log(`Четное :`, i);
    total += i; 
}
console.log(`total: `, total);

let balance = 1000;
const payment = 1005;

console.log(`Total order amount is: ${payment}. We heck the available amount on your account.`);

if (payment <= balance) {
    console.log(`Ok. Withdrow -${payment}.`)
    balance = balance - payment; // balance -=payment;
    console.log(`The rest on your amount is ${balance}.`);
} else (
    console.log(`Not enough money on your account. Sorry((`)
);

console.log(`Operation is finished.`)

const totalSpent = 5000;
let payment = 5;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;
    console.log(`Bronze partner the discount is 2%`);
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
    console.log(`Silver partner the discount is 5%`);
} else if (totalSpent >= 5000) {
      discount = 0.1;
    console.log(`Gold partner the discount is 10%`);
} else {
    console.log(`Not a partner the discount is 0%`);
}

console.log(`The order is under production on amount ${payment}credits at discount ${discount*100}%.`)


function checkForSpam(message) {
    let result;
  // Change code below this line
    const spam1 = "spam";
    const spam2 = "sale";
    
if(message.toLowerCase().includes(spam1) || message.toLowerCase().includes(spam2)){
    result=true;
} else
    result = false;

  // Change code above this line
  return result;
}

console.log(checkForSpam("Get best sale offers now!"));


function sayHi(){
  console.log("Hello, this is my first function!")
};

sayHi();

function add(a, b, c) {
  // Change code below this line

return a+b+c;

  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
console.log(add(17, 10, 13));

function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

console.log(makeMessage('Radar', 6150));

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password.toLowerCase().includes(SAVED_PASSWORD);

  // Change code above this line
  return isMatch;
}

console.log(isValidPassword("jqueryismyjam"));


function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if(ordered>available){
  message="Not enough goods in stock!"
    console.log(message);
} else {
    message = "Order is processed, our manager will contact you."
    console.log(message);
}
  // Change code above this line
  return message;
}

checkStorage(100, 50);

let a = 12;

a %= 10; // a= a % 10

console.log(a);


function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice = pricePerDroid*orderedQuantity;
  if(totalPrice>customerCredits){
    message="Insufficient funds!";
    console.log(message);
  } else {
    customerCredits -=totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left.`;
    console.log(message);
  }
  // Change code above this line
  return message;
}

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
    const totalPrice = (pricePerDroid * orderedQuantity);
    
    if (customerCredits < totalPrice)
        { 
        message = `Insufficient funds!`;
        }
    
    else 
        {
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
        }
        
    
  // Change code above this line
  return message;
}
console.log(makeTransaction(3000, 5, 23000));


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

    if (password === null)
    { // Change this line
    message =  'Canceled by user!';
    }
    else if (password === ADMIN_PASSWORD)
    { // Change this line
    message = 'Welcome!';
    }
    else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword("jqueryismyjam")); 


function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000){
  discount = GOLD_DISCOUNT;
} else if (totalSpent >= 20000 && totalSpent < 50000){
   discount = SILVER_DISCOUNT;
} else if (totalSpent >= 5000 && totalSpent < 20000){
   discount = BRONZE_DISCOUNT;
} else if (totalSpent < 5000) {
   discount = BASE_DISCOUNT;
}
  
  // Change code above this line
  return discount;
}

console.log(getDiscount(137000)); // повертає 0.1
console.log(getDiscount(46900)); // повертає 0.05
console.log(getDiscount(8250)); //повертає 0.02
console.log(getDiscount(1300)); // повертає 0
console.log(getDiscount(5000)); // повертає 0.02
console.log(getDiscount(20000)); //повертає 0.05
console.log(getDiscount(50000)); // повертає 0.1



function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

    case "professional":  // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

console.log(getSubscriptionPrice("professional")); /// повертає число 20
console.log(getSubscriptionPrice("organization")); // повертає число 50
console.log(getSubscriptionPrice("starter")); // повертає число 0


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
    switch (password) {
        case null:
            message = "Canceled by user!"
            break;
        case ADMIN_PASSWORD:
            message = "Welcome!"
            break;
        default:
            message = "Access denied, wrong password!";

}

  // Change code above this line
  return message;
}

console.log(checkPassword('jqueryismyjam'));


function getShippingCost(country) {
  let message;
  // Change code below this line

    switch (country) {
        case "China":
        price = 100;
        message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile":
        price = 250;
        message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia":
        price = 170;
        message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica":
        price = 120;
        message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            message ="Sorry, there is no delivery to your country"
    }
    
  // Change code above this line
  return message;
}

console.log(getShippingCost("russia"));


function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe")); 

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length-1];


console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);


function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
};

console.log(getSubstring("Hello world", 3)); 
console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));


function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
    if (message.length <= maxLength) {
        result = message;
    } else if (message.length > maxLength) {
        result = message.slice(0, maxLength) + "..."
    };
  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16));


function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}
console.log(checkForName("Egor Kolbasov", "egOr"));


function checkForSpam(message) {
  let result;
  // Change code below this line

    result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale") ? true : false;
    
  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));


const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}


const item = "Mango";
console.log(item.split(''));

const message = "JavaScript - is very interesting";
console.log(message.split(' '));
console.log(message.slice(0, 5));
console.log(message.join(''));

const message = ["JavaScript", "is", "very", "interesting"];
console.log(message.join("-"));


const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Ajax"));
console.log(clients.includes("Mongo"));
console.log(clients.includes("Kiwi"));


const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";

const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
    console.log(`${fruit} is a red fruit!`)
};

const numbers = [6,9,11,13,15,17];
console.log(numbers.push(11));
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.pop());
console.log(numbers.pop());
console.log(numbers);


const colors = ["green", "yellow", "red", "pink", "blue", "violet"];
//console.log(colors.splice(3, 1));
console.log(colors.splice(2, 1, "black", "white"))
console.log(colors);


const cart = [54, 28, 105, 11, 15, 26, 78, 95, 41,56,57,85];
let total = 0;

//for (const cart of carts)

 for (let i = 0; i < cart.length; i += 1)
  {
  total += cart[i];
};

console.log(`Total: `, total);


const redFruits = ["apple", "strawberry", "cherry", "cranberries"];


for (let i = 0; i < redFruits.length; i += 1){
console.log([i]+`) ` + redFruits[i])  
}

for (const fruit of redFruits) {
  console.table(fruit + `-1`)
}
const cart = [54, 28, 105, 11, 15, 26, 78, 95, 41,56,57,85];

/*for (let i = 0; i < cart.length; i+=1) {
  if (cart[i] % 2 === 0) {
    console.log(`Четное: `, cart[i]);
  }
}

for (const item of cart) {
  //console.log(item)
  let message = item % 2 === 0
    ? `Четное: ${item}`
    : `Не четное: ${item}`;
  console.log(message);
};
*/

const cart = [54, 28, 105, 11, 15, 26, 78, 95, 41,56,57,85, 2];
//the smallest number
/*let smallestNumber = cart[0];

for (let i = 0; i < cart.length; i+=1) {
  
  if (cart[i] < smallestNumber) {
    smallestNumber = cart[i];    
  } 
}
console.log(smallestNumber);*/

// the biggest number
let biggestNumber = cart[0];

for (const item of cart) {
  if (item > biggestNumber) {
    biggestNumber = item;
  }
};

console.log(biggestNumber);
