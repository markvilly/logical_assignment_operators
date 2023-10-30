"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 enhance object literals
  openingHours,

  //ES6 METHOD
  orderDelivery({
    time = "20:00",
    address = "",
    mainIndex = 1,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizzas(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "la Plazza",
  owner: "Giovanni Rossi",
};

rest1.numGuests ??= 30;
rest2.numGuests ??= 30;

rest2.owner &&= "<ANONYMOUS>";
rest1.owner = !rest1.owner && "Piccolo";

console.log(rest1);
console.log(rest2);

//FOR OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// to get indeces
console.log("------FOR OF LOOP-----");

// for (const [index, el] of menu.entries()) {
//   console.log(`${index + 1}: ${el}`);
// }

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

//ENHANCED OBJECT LITERALS.
// there are of three types. objects can be declared globally, methods can be declared without the function keyword, global arrays can be used in the object.

//OPTIONAL CHAINING

// restaurant.hours.fri && console.log(restaurant.hours.fri.open);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with OPTIONAL CHAINING

// console.log(restaurant.openingHours.mon.open);

console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHour?.mon?.open);

const user = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Exampleville",
  },
};

const city = user.address && user.address.city;

const cityWithOptionalChaining = user.address?.city;

console.log(cityWithOptionalChaining);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const weOpen = "we are open at ";
  const opens =
    (weOpen && restaurant.openingHours[day]?.open) ?? "we are closed";

  console.log(`on ${day}, ${opens}`);
}

// ON METHODS.

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

console.log(restaurant.orderAlPaccino?.(2, 3) ?? "Method does not exist");

//ON ARRAYS
const users1 = [];
const users = [{ name: "Jonas", email: "hello@jonas.com" }];

console.log(users[0]?.name ?? "User array empty.");

console.log(users1[0]?.name ?? "User array empty");

weekDays.forEach((element) => {
  console.log(element);
});

for (const [i, el] of weekDays.entries()) console.log(`${i + 1}: ${el}`);

// LOOPING OVER OBJECTS
console.log("------LOOPING OVER OBJECTS KEYS-----");

const properties = Object.keys(openingHours);

let openStr = `we are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

console.log("-----OBJECT VALUES-----");

const values = Object.values(openingHours);
console.log(values);

// Entries forobjects.

console.log("------Entries for Objects-----");

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open: o, close: c }] of entries) {
  console.log(`On ${day} we are open at ${o} and close at ${c}`);
}

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

const scored = game.scored;

for (const [goal, name] of scored.entries()) {
  console.log(`Goal ${goal + 1} : ${name}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = game.odds;
console.log(odds);

const oddArray = Object.values(odds);
console.log(oddArray);

console.log("----LOOPS---");

let average = 0;
for (const odd of oddArray) average += odd;
console.log(average / oddArray.length);

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : "victory " + game[team];
  console.log(`Odd of ${teamStr}: ${odd}`);
}

/// CReATING SETS.

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSet);
console.log(new Set("Jonas"));

// to check the size of a set.

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("moo moo"));

//update sets

orderSet.add("Garlic Bread");
orderSet.add("Mdahu");
orderSet.delete("Risotto");
// orderSet.clear();

console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
// SET DOES NOT HAVE INDECES

console.log(new Set("Jonasschmedtmann").size);

// Sets are Cool

//MAPS - are a lot more useful than sets.

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

console.log(rest.set(3, "Kigali, Uganda"));

console.log("------CRUD/ UPDATE------ GET----");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegeterian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "we are closed");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(1);

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log("-----CRUD/READ----HAS----");

console.log(rest.has("categories"));
// console.log(rest.delete(2));
console.log(rest.size);

console.log("---OBJECTS AS KEYS---");
const arr = [1, 2];

rest.set(arr, "test");
rest.set(document.querySelector("h1"), "Heading");

// USING OBJECT AS KEYS:
// console.log(rest.get(arr));

const sabi = {
  name: "sabi",
  age: 42,
  sex: "fem",
  gender: "rather not say",
};

const games = ["Ps4", "PSVITA", "XBOX", "GITHUB"];
rest.set("games", games);
rest.set(sabi, "Sabi Jr.");

console.log(rest);

// NEW MAP IMPLEMENTATION.

const question = new Map([
  ["Question", "What is the best prorgamming langues in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again!"],
]);

// Converting Objects to Maps.

const [[key, valu], val, third] = new Map(Object.entries(openingHours));
console.log(key, valu);

// Using For Loop to loop over maps

//QUIZ APP.
console.log(question);
console.log(
  question.get("question") ??
    "there's something wrong somewhere, try looking at your KEY entry"
);
// use for loop to print options to the console.

for (const [key, value] of question) {
  // print elements with key as a number.
  if (typeof key === "number") console.log(`answer ${key}: ${value}`);
}

const answer = 3;
console.log(answer);
const logicAns = answer === question.get("correct");
console.log(question.get(logicAns));

//Convert Maps to ARRAY

console.log(...question);

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events = new Set(gameEvents.values());
console.log(events);

//2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

const timed = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${timed / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL

for (const [time, event] of gameEvents) {
  let average = 45;
  const logic =
    time < average
      ? "[FIRST HALF] " + `${time}: ${event}`
      : "[SECOND HALF] " + `${time}: ${event}`;
  console.log(logic);
}

// Exercise 1: Working with Sets

// Create an empty Set called colorsSet.

// Add the following colors to the colorsSet: "red", "blue", "green", "yellow", "red" (Note: Sets only allow unique values, so make sure "red" is not duplicated).

// Check if "green" is in the colorsSet and log the result to the console.

// Remove "blue" from the colorsSet.

// Iterate through the colorsSet and print each color to the console.

const colorSet = new Set();

colorSet.add("red");
colorSet.add("blue");
colorSet.add("green");
colorSet.add("yellow");
colorSet.add("red");

console.log(`Is green in color set? ${colorSet.has("purple")}`);
colorSet.delete("blue");

console.log(colorSet);
for (const color of colorSet) console.log(color);

/*
Exercise 2: Working with Maps

    Create an empty Map called personInfo.

    Add the following key-value pairs to the personInfo map:
        "name" -> "Alice"
        "age" -> 30
        "city" -> "New York"

    Check if the map has the key "city" and log the result to the console.

    Change the value for the "age" key to 31.

    Iterate through the personInfo map and print each key and its corresponding value to the console.
*/

const personInfo = new Map();
personInfo.set("name", "Alice");
personInfo.set("age", 30);
personInfo.set("city", "New York");
console.log(personInfo.get("age"));

console.log(personInfo);
// WORKING WITH STRINGS.

const airline = "TAP Air Portugal";

const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.indexOf("A"));
console.log(
  airline.lastIndexOf("Air") === Number("-1")
    ? "cannot be found, check your string"
    : airline.lastIndexOf("Air")
);

let str = "Hello World!";

console.log(str.indexOf("World"));
console.log(str.slice(6));

console.log(airline.indexOf("Air"));
console.log(airline.slice(4));
// this is a sub string - you can not mutate string for it is a primitive data type.

console.log(airline.slice(0, airline.indexOf(" "))); // Extracting the first word.

console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(1, -1));
console.log(str.includes("World"));
const checkMiddleSeat = function (seat) {
  // B and E are middle seat.
  //   seat.includes("B") || seat.includes("E")
  //     ? console.log("Middle Seat")
  //     : console.log("Not Middle seat");
  // USING SLICE;
  seat.slice(-1) === "B" || seat.slice(-1) === "E"
    ? console.log("Middle Seat.")
    : console.log("Not Middle Seat.");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Jonas"));

//WORKING WITH STRINGS

console.log(airline.toLowerCase()); // no arguments needed for these ones.
console.log(airline.toUpperCase());
console.log(airline);

const passenger = "Jonas"; // jonas
const passengerToLower = passenger.toLowerCase();

const passengerCorrect =
  passengerToLower[0].toUpperCase() + passengerToLower.slice(1);

console.log(passengerCorrect);

//function that take name of the passengers and returns it with the proper capitalization.

const fixCap = function (firstname) {
  const properName = firstname.toLowerCase();
  console.log(properName[0].toUpperCase() + properName.slice(1));
};

fixCap("namor");
fixCap("spider");
fixCap("mecury");

//check a user input email/ comparing emails.

const email = "hello@jonas.io";
const loginEmail = "  Hello@jonas.io \n";

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail);

const priceGB = "288,97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
console.log(priceUS);

const announcement = "Passengers come to boarding door 23. Boarding door 23!";

// console.log(announcement.replaceAll("door", "gate"));

// REGULAR EXPRESSION.

console.log(announcement.replace(/door/g, "gate"));

// return BOOLEANS.

const planes = "Airbus A320neo";
console.log(planes.includes("Air"));
console.log(planes.includes("Boeing"));
console.log(planes.replace(/Air/g, "cow"));

// if (planes.startsWith("Airbus") && planes.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family");
// }

planes.startsWith("Airbus") &&
  planes.endsWith("neo") &&
  console.log("Part of the NEW Airbus Family.");

// Practice Exercise.
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  baggage.includes("knife") || baggage.includes("gun")
    ? console.log("You are NOT allowed on board.")
    : console.log("Welcome aboard!");
};

checkBaggage("I have a laptop, some food and a pocket KnIfe");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// SPLIT AND JOIN.
console.log("a+very+nice+string".split("+"));

console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

// TO capitalize
const capitalizeName = function (name) {
  const names = name.split(" ");
  const newNames = [];

  for (const n of names) {
    // newNames.push(n[0].toUpperCase() + n.slice(1));

    newNames.push(n.replace(n[0], n[0].toUpperCase(), ""));
  }
  console.log(newNames.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// padding

const message = "Go to gate 23!";
console.log(message.padStart(10, "*").padEnd(35));
console.log("Jonas".padStart(13, "*"));

// APPLICATIONS OF PADDING

const maskCredid = function (num) {
  // convert number to string
  const str = num + "";
  //getting the last 4 digits.
  const last = str.slice(-4);

  console.log(last.padStart(str.length, "*"));
};

maskCredid(3322333);
maskCredid("24243245454");

console.log("jonasey".padStart(10, "X"));

// REPEATING STRING METHOD.

const message2 = "Bad weather... All departures Delayed";

console.log(message.repeat(5));

const planesInLine = function (n) {
  console.log(`there are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(6);
planesInLine(3);
