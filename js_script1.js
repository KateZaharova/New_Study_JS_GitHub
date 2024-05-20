
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


const cart = [54, 28, 105, 11, 15, 26, 78, 95, 41,56,57,85, 2];
//the smallest number
let smallestNumber = cart[0];

for (let i = 0; i < cart.length; i+=1) {
  
  if (cart[i] < smallestNumber) {
    smallestNumber = cart[i];    
  } 
}
console.log(smallestNumber);

// the biggest number
let biggestNumber = cart[0];

for (const item of cart) {
  if (item > biggestNumber) {
    biggestNumber = item;
  }
};

console.log(biggestNumber);


const string = "JavaScript";
let inversedString = '';

for (const item of string){
  console.log(item);

  inversedString = item === item.toUpperCase() 
    ? inversedString += item.toLocaleLowerCase()
    : inversedString += item.toLocaleUpperCase()
}
 console.log(inversedString);
*/

/*function includes(array, value) {
  // Change code below this line
  let message = '';
  const args = Array.from(array);
  console.log(value);


  for (let item = 0; item < args.length; item += 1) {
    //console.log(args);
    console.log(args[4]>value);

    message = args[item] === value ? true : false;

   /* if (args[item] === value ) {
      return message = "true";
    } else {
      message = "false";
    }
    // Change code above this line
  }
}
console.log(includes([1, 2, 3, 4, 5], 17));

function includes(array, value) {
  // Change code below this line

  for (let item = 0; item < array.length; item += 1) {

    if (array[item] === value) {
      return true;
    }
  }
      return false;
    
    // Change code above this line
  }
console.log(includes[1, 2, 3, 4, 5], 17);


function checkAge(age) {
 

  if (age>=18) { // Change this line
    return "You are an adult";
  }
  return "You are a minor";
}    
console.log(checkAge(17));
*

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
   return "Welcome!";
  } 
    return "Access denied, wrong password!";
  
  // Change code above this line
}

console.log(checkPassword("jqueryismyjam"));


function checkStorage(available, ordered) {
  // Change code below this line
 
  if (ordered === 0){
    return "Your order is empty!";
  }

    if (ordered > available){
    return "Your order is too large, not enough goods in stock!";
  } 

  return "The order is accepted, our manager will contact you";  
  // Change code above this line
}
console.log(checkStorage(100, 0));


const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length-1
console.log(lastElementIndex);
const lastElement = fruits[lastElementIndex];
console.log(lastElement);


function getExtremeElements(array) {
  // Change code below this line

  const firstArrayElement = array[0];
  console.log(firstArrayElement);
  const lastArrayElement = array[array.length-1];
  console.log(lastArrayElement);
  return array = [firstArrayElement, lastArrayElement];

  // Change code above this line
}

console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
  words = message.split(delimiter);
  
  // Change code above this line
  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));


function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  let words = '';

  // сделать массив элементов, разделить слова на отд.индексы

  words = message.split(' ');

  console.log(words);

  // посчитать длину масива
  let wordsLength = words.length;
  console.log(wordsLength);
  // умножить цену на кол-во слов=длина масива

  let totalPricePerWords = pricePerWord * wordsLength
  
  return totalPricePerWords;
   // Change code above this line
}

console.log(calculateEngravingPrice("Web-development is creative work", 40));


function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line

  string = array.join(delimiter);

  // Change code above this line
  return string;
}
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


function slugify(title) {
  // Change code below this line

  let slug = title.toLowerCase().split(" ").join("-");
  
  return slug;

  // Change code above this line
}

console.log(slugify("Arrays for begginers"));

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  // объединение 2-х массивов
  const newArray = firstArray.concat(secondArray);
  console.log(newArray);
  
  //вычисление длины нового массива
  const newArrayLength = newArray.length;
  console.log(newArrayLength);
  // если maxLength больше длины нового массива - обрезать новый массив
  // если не превышает - весь новый массив.
  if (newArrayLength>maxLength) {
    return newArray.slice(0, maxLength);
  }
  return newArray;

    // Change code above this line
}
  
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


function calculateTotal(number) {
 // Change code below this line
  let total = 0;
  console.log(number);

  for (let i = 1; i<= number; i += 1){
    total = total + i;
  }
return total;
  // Change code above this line
}

console.log(calculateTotal(24));


const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i<fruits.length; i+=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
 
  for (let i = 0; i < order.length; i += 1){
    total = total + order[i];
   // console.log(order[i])
  }
  
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));


function findLongestWord(string) {
  // Change code below this line
  //робимо масив за допомогою м-ду split, роздільник "-"
  let stringArray = string.split(' ');
  console.log(stringArray);

  let longestWord = stringArray[0];
  console.log(longestWord);

  // перебираємо масив
  //порівнюємо кожне слово масиву з першим, і якщо воно більше - перевизначаємо і порівнюємо далі.

  for (let i = 0; i < stringArray.length; i += 1){
    if (longestWord.length < stringArray[i].length) {
      longestWord = stringArray[i];
    }
    
  }
  return longestWord;



  // Change code above this line
}

console.log(findLongestWord("May the force be with you"));


function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1){
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(14, 17));


function filterArray(numbers, value) {
   // Change code below this line

  let newArray = [];

  for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  // Change code above this line
  return newArray;
}

console.log(filterArray([12, 24, 8, 41, 76], 20));


function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit)? true: false; // Change this line
}

console.log(checkFruit("Pear"));


function getCommonElements(array1, array2) {
  // Change code below this line

  let newArray = [];

  for (let i = 0; i < array1.length; i += 1){
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }
  return newArray;
 // Change code above this line
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));



function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const i of order) {
  total += i;
}

 /* for (let i = 0; i < order.length; i += 1) {
  }

  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
  

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
  if (number > value) {
      filteredNumbers.push(number);
    };
  };

  //for (let i = 0; i < numbers.length; i += 1) {
    //const number = numbers[i];

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([12, 24, 8, 41, 76], 38));


function getEvenNumbers(start, end) {
   // Change code below this line

  let evenArray = [];
  
  for (let i = start; i <= end; i += 1){
    if (i % 2 === 0) {
      evenArray.push(i);
    }
  }
  return evenArray;
    // Change code above this line
}
console.log(getEvenNumbers(7, 7));


const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

console.log(number);


function findNumber(start, end, divisor) {
  // Change code below this line
 // let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i
    }
  }

 // return number;
  // Change code above this line
}

console.log(findNumber(16, 35, 7));

//--------------------------------------------------------

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  }
};

console.log(bookShelf.getBooks());
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
bookShelf.removeBook("The Mist");


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
 // console.log(key);
  //console.log(book[key]);
};

const animal = {
  legs: 4,
  ears: 2,
  tail: 1,
  eyes:2,
};
const dog = Object.create(animal);
dog.name = "Mango";

//console.log(dog);
//console.log(animal);
//console.log(dog.name);
//console.log(dog.legs);

//console.log("ears" in animal);
//console.log("legs" in animal);

//console.log(animal.hasOwnProperty("name"));
//console.log(animal.hasOwnProperty("legs"));

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key);
    console.log(dog[key]);
  }
}

const animal = {
  legs: 4,
  ears: 2,
  tail: 1,
  eyes: 2,
  breed: "вівчарка",
  nickname: "Dude",
};
const dog = Object.create(animal);
dog.name = "Mango";

const keys = Object.keys(animal);
console.log(keys);
const values = Object.values(animal);
console.log(values);

for (const key of values) {
 // console.log(key);
  //console.log(animal[key]);
};


const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods);
console.log(values);

const entries = Object.entries(goods);
console.log(entries);

let total = 0

for (const key of values) {
  total += key;
  
};
console.log(total);

const fn = function (a, b, c, ...args) {
  console.log(`${a}, ${b}, ${c}`);
  console.log(args);
}

fn("hello", 1, 2, 3, 4);
fn("Mars", 1, 2, 3, 4, 5);
fn("Moon", 1, 2, 3, 4, 5, 6);


const add = function (...args) {
  //console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg
  };

  return total;

};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6));

const filteredNumbers = function (array, ...args) {
  //console.log(args);
  //console.log(array);

  let newArray = [];

  for (const number of array) {
    if (args.includes(number)) {
      newArray.push(number);
    }
    
  }
  return newArray;
}


console.log(filteredNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filteredNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filteredNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];

//for (const book of books) {
 // console.log(book);
  //console.log(book.title);
  //console.log(book.author);
  //console.log(book.rating);
//}

//const bookNames = [];

//for (const book of books) {
//  bookNames.push(book.title)
//}
//console.log(bookNames);

let total = 0;
let avarageRating = 0;

for (const book of books) {
  total += book.rating;
  avarageRating = (total /books.length).toFixed(2);
}
console.log(avarageRating);


const temps = [14, -4, 25, 8, 11];
console.log(temps);
console.log(Math.max(...temps));

function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber); // Значення першого аргументу
  console.log(secondNumber); // Значення другого аргументу
  console.log(otherArgs); // Масив інших аргументів
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);


const playlist = {
  name: "My play list",
  rating: 5,
  tracks: ["track1", "track2", "track3"],
  trackCount: 3,
  changeName(newName) {
    console.log(`this всередині changeName: `, this);

    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  changeRating(newRating) {
    this.rating = newRating;
  },
}

playlist.changeName("New SUPER-PUPER NAME");
playlist.addTrack("New track ABBA");
playlist.changeRating(10);
//console.log(playlist.trackCount);

playlist.qweqwe = 10;
playlist.trackCount = 10;


console.log(playlist);


const x = { a: 1, b: 2, c: 3 };
const y = { a: 5, d: 5, y: 8, c: 1 }

const w = { ...x, ...y };
console.log(w);


const showProfileInfo = function (userProfile){
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userProfile; 

  console.log(name, tag, location, avatar, followers, views, likes);
  };

const profile = {
  name: "Jac Kusto",
  tag: "jcusto",
  location: "Monaco",
  avatar: "http://......jpg",
  stats: {
    followers: 5555,
    views: 4444,
    likes: 1111,
  },
};

showProfileInfo(profile);


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner:{
    name:"Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",  
  },
};


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length-1]
// Change code above this line


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location={
  country:"Jamaica",
    city:"Kingston",
};


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key])
};
console.log(keys);
console.log(values);


function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
}
  // Change code above this line
  return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
console.log(countProps({}));


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}
console.log(values);
console.log(keys);


function countProps(object) {
  // Change code below this line
  let propCount = 0;

  const keys = Object.keys(object);
    propCount = keys.length;
 
  return propCount;
  // Change code above this line
}
console.log(countProps({ name: "Mango", age: 2 }));


function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  const keys = Object.keys(salaries);
  const values = Object.values(salaries);

  for (const value of values) {
    totalSalary += value;
}

   // Change code above this line
  return totalSalary;
}
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

for (const book of books) {
  // Об'єкт книги
  //console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  //console.log(book.author);
  // Рейтинг
  //console.log(book.rating);
}

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
//const keys = Object.keys(colors);
//console.log(keys);
// Change code below this line

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
  console.log(hexColors);
  console.log(rgbColors)


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
     
    if (product.name === productName) {
      return product.price;
    } 
  }
      return "null";
}
  // Change code above this line

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Engine"));
console.log(getProductPrice("Scanner"));


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];



function getAllPropValues(propName) {
  // Change code below this line

  const valueArray = []; 
  

  for (const product of products) {
    if (product.hasOwnProperty([propName])) {
      
      let valuesOfPropName = product[propName];
      
      valueArray.push(valuesOfPropName);
    }
  }
  return valueArray;
}
  // Change code above this line

console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"])
console.log(getAllPropValues("quantity"));
console.log(getAllPropValues("price"));
console.log(getAllPropValues("category"));



const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line

  let totalAmount = 0;

  for (const product of products) {

    let nameToFind = product.name
   
    if (nameToFind === productName) {
      
      totalAmount = product.price * product.quantity
  
    }
    
    // Change code above this line
  }
  return totalAmount;
}

console.log(calculateTotalPrice("Blaster"));// 0
console.log(calculateTotalPrice("Radar"));// 5200)




const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow } = highTemperatures;

//const yesterday = highTemperatures.yesterday;
//const today = highTemperatures.today;
//const tomorrow = highTemperatures.tomorrow;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log(meanTemperature);
*/






/*
const cart = {
  items: [],
  getItems() { 
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) { },
  clear() { },
  countTotalPrice() { },
  increaseQuantity(productName) { },
  decreaseQuantity(productName) { },
};


cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "peach", price: 60 });
cart.add({ name: "tomato", price: 110 });


console.table(cart.getItems());
*/
