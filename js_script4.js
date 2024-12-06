/*function greet(name) {
    return `Wellcome ${name}.`;
};

function registerGuest(name, callback) {
    console.log(`Register guest ${name}.`);
    callback(name);
}

registerGuest("Luca", greet)


function processCall(recipient, onAvailable, onNotAvailable) {
    const isRecipientAvailable = Math.random() > 0.5;
    console.log(isRecipientAvailable);

    if (!isRecipientAvailable) {
        onNotAvailable(recipient);
        return;
    }
    onAvailable(recipient);
};

function takeCall(name) {
    console.log(`Connect with ${name}, pls wait... `);
};

function activateAnsweringMachine(name) {
    console.log(`Abonent ${name} is not available, pls leave a message.`);
};

function leaveHoloMessage(name) {
    console.log(`Abonent ${name} is not available, pls leave a holomessage.`);
};

processCall("Luca", takeCall, activateAnsweringMachine);
processCall("Irsy", takeCall, leaveHoloMessage);



function repeatLog(n) {
    for (let i = 0; i < n; i+=1) {
        console.log(i);
    };
};

repeatLog(6);


function printValue(value) {
    console.log(value);
};

function prettyPrint(value) {
    console.log("Logging value: ", value);
};

function repeat(n, action) {
    for (let i = 0; i < n; i += 1){
        action(i);
    }
};

repeat(3, printValue);
repeat(6, prettyPrint);


const numbers = [5, 10, 15, 20, 25];

for (let i = 0; i < numbers.length; i += 1){
    console.log(`Index ${i}, value: ${numbers[i]}. `)
}

numbers.forEach(function (number, index) {
    console.log(`Index ${index}, value: ${number}.`)
})


function classicAdd(a, b, c) {
    return a+b+c
};

const arrowAdd = (a, b, c) => {
    return a + b + c;
}

const hello = () => {
    console.log("Hello!")
}

hello()


const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {

        if (test(el)) {
            filteredArray.push(el);
        }
    }
    return filteredArray;
}


const r1 = filter([1,2,3,4,5,6,7,8,9], function (value){
    return value >= 5;
});
console.log(r1);


const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
    return value <= 4;
});
console.log(r2);


const filter = function (array, test) {
    for (const a of array) {
        if (test(a)) {
            return `We have found ${a}!`
        }
    }
};

const arguments1 = filter(["apple", "banana", "orange"], function (item) {
    return item.includes("orange");
})

console.log(arguments1);


const filter = function (array, start) {
    
    const positiveArray = []

    for (const a of array) {
        if (start(a)%2===0) {
                positiveArray.push(a)
            }
    }
    return positiveArray;
};

const test = filter([1, 2, 3, 4, 5, 6, 7, 98], function (value) {
    return value ;   
})

console.log(test);

const test2 = filter([4, 0, -4, 10, -3, 15], function (value) {
    return value ;   
})

console.log(test2);

const filter = function (art, start) {
    let total = 0;
    for (const a of art) {
        //console.log(a)
        if (start(a)){
            total += a;   
        }
    }
    return total;
}

const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value){
    return value >= 5;
}
);
console.log(result);*

const letItBe = function (array, cb) {
    let newArray = [];
    for (const a of array) {
        console.log(a)
        if (cb(a)) {
            newArray.push(a);
        }
    }
    return newArray;
};

const result = letItBe([15,25,24,12,13,0,18,19,55], function (element) {
    return element % 2 === 0;
})

console.log(result);


const mainFunction = function (array, test) {
    let newArray = [];
    let minItem=array[0]

    for (const a of array) {
        console.log(a)
        if (test(a)) {
        
            newArray.push(a);
}
    }
    console.log(newArray)
    return Math.max(...newArray);
};

const additionalFunction = mainFunction([85,17,35,14,5,20,15,16,71,85,13], function (value) {
    return value%2===0;
});

console.log(additionalFunction);


const fruits = [
    { name: "apples", price: 150, quantity: 100, isFresh: true },
    { name: "tomato", price: 50, quantity: 300, isFresh: true },
    { name: "mango", price: 400, quantity: 50, isFresh: false },
    { name: "banana", price: 200, quantity: 80, isFresh: true },
];

let getFruitsWithName = function (qweqwe) {
    return qweqwe.name=== "banana";
}

let mainFunction = function (array, test) {
    let newArray = [];

    for (const a of array) {

        if (test(a)) {
            newArray.push(a)
        }
    } return newArray;
}

let result = mainFunction(fruits, getFruitsWithName);
    
console.log(result);

const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(function (number) {
        console.log('number', number);
});

console.log(numbers)

const numbers = [1, 2, 3, 4, 5, 6];
//map перебирает поєлементно массив
//возвращает новый массив такой же длины
// не изменяет старый массив
const doubleNums = numbers.map(number => {
    console.log(number);
    return number*3;
});
console.log('numbers:', numbers);
console.log('doubleNums:', doubleNums);



const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

const levelTimePlayed = 200;

const newLevelTime = players.map(player => {
    if (player.timePlayed > levelTimePlayed) {
        return {
            ...player,
            name: player.name + "SuperStar",
            points: player.points + 200,
            online: true,
        }
    }
    return player
});
console.table(newLevelTime);


const playerNew = players.map(player => {
    if (player.name === playerToUpdate) {
        return {
            ...player,
            points: player.points * 3
        }
    }
    return player;
}
);
console.table(playerNew);



const newPlayer = players.map(player =>
    player.name === playerToUpdate
        ? { ...player, points: player.points * 1.1 }
        : player
);
console.table(newPlayer);

const secondPlayer = players.map(player => ({
        ...player,
        id: player.id + "111",
        name: player.name + "star",
        timePlayed: player.timePlayed * 2,
        points: player.points / 10,
        online: !player.online
    
}));
console.table(secondPlayer);

const updatePLayer = players.map(player => {

    if (player.id === playerToUpdate) {
        return {
            ...player,
            id: player.id = 'X! New name',
            name: player.name = 'Cherry',
        }
    }
    return player;
});
console.table(updatePLayer);

const res = players.map(player => ({
          ...player,
        name: player.name + 123,
        points: player.points * 1.1,
        online: !player.online,
        timePlayed: player.timePlayed/2,
    }))

console.table(res);

const newPlayer = players.map(player =>
    player.id === playerToUpdate
        ? { ...player, id: player.id = 'X! New name', }
        : player,
);
console.table(newPlayer);

const numbers = [1, 5, 6, 7, 9, 10, 15, 20, 25, 28];

const filteredNumbers = numbers.filter(number => number < 10 || number >= 25);

console.log(filteredNumbers);



const playersOnline = players.filter(player => !player.online)
console.table(playersOnline);

const player2Online = players.filter(({ online }) => !online);
console.table(player2Online);

console.table(players);

//м - д filter:
// поєлементно перебирает оригинальный массив
// возвращает новый массив (с элементами или пустой)
// добавляет в возвращаемый массив элементы, которые удовлетворяют условию колбэк-функции
// - если колбэк вернул true-  элемент добавляется в возвращаемый массив
// - если колбэк вернул false - элемент не добавляется в возвращаемый массив

// м-д find
// - поэлементно перебирает оригинальный массив
// - возвращает первый элемент, который удовлетворяет условию или undefined

const number1 = [1, 4, 5, 6, 8, 9, 7, 11, 12, 15, 18];

const findNumber = number1.find(number =>  number < 7 );
//console.log(findNumber);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const itemToFind = "player-3";

//const findPlayer = players.find(player => player.id === itemToFind);
//console.log(findPlayer);

const findPLayerById = (allPLayer, playerId) => {
    return allPLayer.find(({ id })=>id===playerId);
}


console.log(findPLayerById(players, "player-3"));
console.log(findPLayerById(players, "player-5"));

const findTheNumber = (allNumbers) =>
    allNumbers.find(number => number > 5);

console.log(findTheNumber(number1));
*/

// м-д every - поэлементно перебирает оригинальный массив, если все елементы удовлетворяют условию
// возвращает true, иначе false.

/*const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: false },
];

const nameToFind = "Kiwi";

const everyTimePLayed = players.some(player => player.timePlayed > 100);
console.log(everyTimePLayed);*/



/*const everyPlayer = players.every(player=>player.nameToFind)
console.log(everyPlayer);

const playerOnline = players.every(player => player.online);
console.log(playerOnline);

const playerId = "player-2";

const everyId = players.every(player => player.playerId);
console.log(everyId);*/

// м-д some - перебирає весь оригінальний  масив, повертає true, якщо є хоч 
// 1 елемент, що задовольняє умові

/*const someName = players.some(player => player.name);
console.log(someName);

const isAnyOnline = players.some(player => player.online);
console.log(isAnyOnline);*/

//Create an empty array.

let jsonData = {
    "Timezones":
[
    {
        "id": 1,
        "name": "Midway Island, American Samoa",
        "timezone": "Pacific/Midway",
        "utc_offset": -11
    },
    {
        "id": 2,
        "name": "Hawaii",
        "timezone": "Pacific/Honolulu",
        "utc_offset": -10
    },
    {
        "id": 3,
        "name": "Alaska",
        "timezone": "America/Anchorage",
        "utc_offset": -8
    },
    {
        "id": 4,
        "name": "Baja California",
        "timezone": "America/Tijuana",
        "utc_offset": -7
    },
    {
        "id": 5,
        "name": "Pacific Time US and Canada",
        "timezone": "America/Los_Angeles",
        "utc_offset": -7
    },
    {
        "id": 6,
        "name": "Arizona",
        "timezone": "America/Phoenix",
        "utc_offset": -7
    },
    {
        "id": 7,
        "name": "Chihuahua, La Paz, Mazatlan",
        "timezone": "America/Chihuahua",
        "utc_offset": -6
    },
    {
        "id": 8,
        "name": "Mountain Time US and Canada",
        "timezone": "America/Denver",
        "utc_offset": -6
    }
]
};

/*let createOptions = (arr, targetSelector) => (targetSelector).append(arr.map(o => `<option value="${o.utc_offset}">${o.America/Denver} + ${o.name}</option>`));
console.log(createOptions(jsonData.Timezones, 'select.Timezones'));*/

const elements = {
    form: document.querySelector(".select-form"),
    div: document.querySelector(".div-select")
};

 async function getData(data = {}) {
      const response = await fetch(
        "https://dev-viewer-api.eyesofai.com/api/v1/dictionary/timezones",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
     each(data,
            function(i, v) {
                (elements.form).append('<option value="' + v.utc_offset + '">' + v.timezone + v.name + '</option>');
            });
    };
      //return response.json();
    

//console.log(getData);


/*
$(document).ready(function () {
    $('#id').empty();
    $.get("https://dev-viewer-api.eyesofai.com/api/v1/dictionary/timezones").done(function(data){
        $.each(data,
            function(i, v) {
                $('#id').append('<option value="' + v.utc_offset + '">' + v.timezone + v.name + '</option>');
            });
    });
});*/

/*var list = [];

//Add each option from JSON to the list array
$.each(jsonData, function (key, value) {
    list.push(key);
});

//For every option in the list, add it into the select menu
$.each(list, function (key, value) {
    $("#my-select-element").append("<option value='" + value + "'>" + value + "</option>");
});*/