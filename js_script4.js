function greet(name) {
    return `Wellcome ${name}.`;
};

function registerGuest(name, callback) {
    console.log(`Register guest ${name}.`);
    callback(name);
}

registerGuest("Luca", greet)