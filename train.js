console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlang va koproq hato qiling", //21-30
  "ozingizga ishlashni boshlang", //31-40
  "siz kuchli bolgan narsalar qiling", //41-50
  "yoshlarga invest qiling", //51-60
  "endi dam oling, foydasi yoooooq", //61+
];

// function maslahatBerish(a, callback) {
//   if (typeof a !== "number") callback("Iltimos raqam kiriting", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBerish(67, (err, data) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("JAVOB:", data);
//   }
// });

// console.log("passed here 1");

async function maslahatBerish(a) {
  if (typeof a !== "number") throw new Error("Iltimos raqam kiriting");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];
  }
}

console.log("===============1");
// maslahatBerish(12)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });
console.log("=====================2");
async function run() {
  let javob = await maslahatBerish(20);
  console.log(javob);
  javob = await maslahatBerish(31);
  console.log(javob);
  javob = await maslahatBerish(41);
  console.log(javob);
}
run();
