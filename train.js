// TASK E
const getReverse = (word) => {
  if (typeof word !== "string") {
    console.log("Please insert a string");
  }
  const reverse = word.split("").reverse().join("");
  console.log(reverse);
};
getReverse("hello");

// // TASK D

// const moment = require("moment");

// class Shop {
//   constructor(bread, steak, juice) {
//     this.products = {
//       bread,
//       steak,
//       juice,
//     };
//   }

//   getTime() {
//     return moment().format("HH:mm");
//   }

//   stock() {
//     console.log(
//       `At ${this.getTime()} we have ${this.products.bread} bread, ${
//         this.products.steak
//       } steak, and ${this.products.juice} juice available!`
//     );
//   }

//   sell(item, qty) {
//     if (this.products[item] === undefined) {
//       console.log(`We don't sell ${item}.`);
//       return;
//     }
//     if (this.products[item] < qty) {
//       console.log(`Not enough ${item} to sell.`);
//       return;
//     }
//     this.products[item] -= qty;
//     console.log(
//       `At ${this.getTime()} sold ${qty} ${item}(s). Remaining: ${
//         this.products[item]
//       }.`
//     );
//   }

//   receive(item, qty) {
//     if (this.products[item] === undefined) {
//       console.log(`We don't accept ${item}.`);
//       return;
//     }
//     this.products[item] += qty;
//     console.log(
//       `At ${this.getTime()} received ${qty} ${item}(s). Now we have: ${
//         this.products[item]
//       }.`
//     );
//   }
// }

// const shop = new Shop(4, 3, 6);

// shop.stock();

// shop.sell("bread", 2);
// shop.receive("juice", 5);
// shop.stock();

// TASK C
// const compareStrings = (word1, word2) => {
//   if (typeof word1 !== "string" && typeof word2 !== "string") {
//     console.log("ERROR PLEASE INSERT A STRING");
//   }
//   const a = word1.split("").sort();
//   const b = word2.split("").sort();
//   if (b.length !== a.length) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// };

// compareStrings("1salomlra", "salomlar1");

// TASK B

// const numCount = (a) => {
//   if (typeof a === String) {
//     console.log("Please enter a string");
//   } else {
//     const count = a.split("").filter((char) => !isNaN(Number(char))).length;
//     console.log(count);
//   }
// };

// numCount("aeefsetw2g44gew");

//TASK A

// const letterInWord = (a, word) => {
//   const count = word.split("").filter((letter) => letter === a).length;
//   console.log(count);
// };

// letterInWord("a", "saloma");

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq hato qiling", //21-30
//   "ozingizga ishlashni boshlang", //31-40
//   "siz kuchli bolgan narsalar qiling", //41-50
//   "yoshlarga invest qiling", //51-60
//   "endi dam oling, foydasi yoooooq", //61+
// ];

// // function maslahatBerish(a, callback) {
// //   if (typeof a !== "number") callback("Iltimos raqam kiriting", null);
// //   else if (a <= 20) callback(null, list[0]);
// //   else if (a > 20 && a <= 30) callback(null, list[1]);
// //   else if (a > 30 && a <= 40) callback(null, list[2]);
// //   else if (a > 40 && a <= 50) callback(null, list[3]);
// //   else if (a > 50 && a <= 60) callback(null, list[4]);
// //   else {
// //     setTimeout(function () {
// //       callback(null, list[5]);
// //     }, 5000);
// //   }
// // }

// // console.log("passed here 0");
// // maslahatBerish(67, (err, data) => {
// //   if (err) {
// //     console.log("Error", err);
// //   } else {
// //     console.log("JAVOB:", data);
// //   }
// // });

// // console.log("passed here 1");

// async function maslahatBerish(a) {
//   if (typeof a !== "number") throw new Error("Iltimos raqam kiriting");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//   }
// }

// console.log("===============1");
// // maslahatBerish(12)
// //   .then((data) => {
// //     console.log("Javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("Error", err);
// //   });
// console.log("=====================2");
// async function run() {
//   let javob = await maslahatBerish(20);
//   console.log(javob);
//   javob = await maslahatBerish(31);
//   console.log(javob);
//   javob = await maslahatBerish(41);
//   console.log(javob);
// }
// run();
