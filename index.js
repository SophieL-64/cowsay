const studentInfo = require("./information");
let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Je suis ${studentInfo.userName}, du campus ${studentInfo.campus}`,
    e: "oO",
    T: "U ",
  })
);
