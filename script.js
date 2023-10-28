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
