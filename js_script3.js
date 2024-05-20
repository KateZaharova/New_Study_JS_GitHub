/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line


const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

//const highYesterday = highTemperatures.yesterday;
//const highToday = highTemperatures.today;
//const highTomorrow = highTemperatures.tomorrow;
//const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
console.log(meanTemperature);



function makeTask(data) {
  const completed = false;
  const defCategory = "General";
  const defPriority = "Normal";
  // Change code below this line
  //const text = "";

  const {
    text,
    category = defCategory,
    priority = defPriority,
  } = data;

  const newData = {category, priority, text, completed };

  return newData
  // Change code above this line
}

console.log(makeTask({ })); // повертає { category: "General", priority: "Normal", completed: false }

console.log(makeTask({ category: "Finance", text: "Take interest" }))// повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

console.log(makeTask({ priority: "Low", text: "Choose shampoo" })); // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

console.log(makeTask({ text: "Buy bread" })) // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }


function add(...args) {

  let total = 0;

  for (const arg of args) {
   
    total += arg;
  }
  return total;
  // Change code above this line
}


console.log(add(15, 27))// повертає 42
console.log(add(12, 4, 11, 48))// повертає 75
console.log(add(32, 6, 13, 19, 8))// повертає 78
console.log(add(74, 11, 62, 46, 12, 36))// повертає 241)

// Change code below this line
function addOverNum(item, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > item) {
      total += arg;
    }
    
  }

  return total;
  // Change code above this line
}
console.log(addOverNum(50, 15, 27))// повертає 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))// повертає 71
console.log(addOverNum(15, 32, 6, 13, 19, 8))// повертає 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36))// повертає 218
  

// Change code below this line
function findMatches(array,...args) {
  const matches = []; // Don't change this line

  for (const arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    
  }
}

  // Change code above this line
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));//[1,2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2))// повертає [17, 89, 2])


const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  }
  // Change code above this line
};
console.log(bookShelf.getBooks());
//console.log(bookShelf.addBook("Haze"))
//console.log(bookShelf.removeBook("Red sunset")) //повертає рядок "Deleting book Red sunset"
console.log(bookShelf.updateBook("Sands of dune", "Dune"))// повертає рядок "Updating book Sands of dune to Dune"


const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    let bookIndexToDelete = 0;

    bookIndexToDelete = this.books.indexOf(oldName);
    
    this.books.splice(bookIndexToDelete, 1, newName);


    return this.books;
    // Change code above this line
  },
};
//console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

console.log(bookShelf.updateBook("The last kingdom", "Dune")); //["Dune", "Haze", "The guardian of dreams"]



const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions() {
    return this.potions;
},
  // Change code above this line
};
console.log(atTheOldToad.getPotions());


const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);

    return this.potions;

    // Change code above this line
  },
};
console.log(atTheOldToad.addPotion("Invisibility"));
console.log(atTheOldToad.addPotion("Power potion"));

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    
    let indexPotionToFind = this.potions.indexOf(potionName);

    this.potions.splice(indexPotionToFind, 1);

    return this.potions;
    // Change code above this line
  },
};

console.log(atTheOldToad.removePotion("Dragon breath")) //["Speed potion", Stone skin"]
console.log(atTheOldToad.removePotion("Speed potion")) // ["Stone skin"])
  

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    
    let potionIndexToFind = this.potions.indexOf(oldName);

    this.potions.splice(potionIndexToFind, 1, newName);

    return this.potions;

    // Change code above this line
  },
};

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))// ["Speed potion", "Polymorth", "Stone skin"]
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"))//,  ["Speed potion", "Polymorth", "Invisibility"])
  */

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }
    this.potions.push(newPotion);

    return this.potions
  },
  removePotion(potionName) {
    
    for (const potion of this.potions){
      
      if (potion.name === potionName) {
        
        let potionIndex = this.potions.indexOf(potion);
        console.log(potionIndex);

        this.potions.splice(potionIndex, 1)
        return this.potions
      }
    } 
    return `Potion ${potionName} is not in inventory!`
  },

  updatePotionName(oldName, newName) {

    for (const potion of this.potions) {
     // console.log(potion)
     if (potion.name === oldName) {
       
       potion.name = newName; 

        return this.potions
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.log(atTheOldToad.getPotions());
//console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))//, повертає рядок "Error! Potion Stone skin is already in your inventory!")
//console.log(atTheOldToad.removePotion("Stone skin")) // [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ])
//console.log(atTheOldToad.updatePotionName("Invisible", "Polymorth"))// [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))//,  [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

/*const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
   
    return this.potions;
  },

  addPotion(newPotion) {
    for (const item of this.potions) {
      if (newPotion.name === item.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
         
  },

  removePotion(potionName) {
    for (let potionIndex = 0; potionIndex < this.potions.length; potionIndex += 1) {
      
      if (potionName === this.potions[potionIndex].name) {
        this.potions.splice(potionIndex, 1);
        return
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {

    for (let potionIndex = 0; potionIndex < this.potions.length; potionIndex += 1) {
      
      if (oldName === this.potions[potionIndex].name) {
        this.potions.splice(potionIndex, 1, {name:newName, price:this.potions[potionIndex].price });
        return
      }
    }
    return `Potion ${oldName} is not in inventory!`;

  },
  // Change code above this line
};*/




/*
const bookShelf = {
  books: ["Останнє королівство"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    console.log(bookIndex);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["Останнє королівство"]
bookShelf.addBook("Імла");
bookShelf.addBook("Страж снів");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
bookShelf.removeBook("Імла");
console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]*/