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
*/
