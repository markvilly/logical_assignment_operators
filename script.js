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
