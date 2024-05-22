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
*/

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