// // function partOne() {
// //   let oneCounter = 0;
// //   for (let i = 0; i < input.length; i++) {
// //     if (input[i].twelve === "1") {
// //       oneCounter++;
// //     }
// //   }
// //   console.log(oneCounter);
// // }

// // partOne();

// gamma = 2663;
// epsilon = 1432;
// pc = 3813416;
// console.log(2663 * 1432);
// console.log("101001100111");

function partTwo() {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (
      input[i].one === "0" &&
      input[i].two === "1" &&
      input[i].three === "0" &&
      input[i].four === "0" &&
      input[i].five === "1" &&
      input[i].six === "0" &&
      input[i].seven === "1" &&
      input[i].eight === "0" &&
      input[i].nine === "0"
    ) {
      counter++;
    }
  }
  console.log(counter);
}

oxygen = 100111011110;
oxy = 2526;
c02 = 010010100;
c0 = 148;

console.log(oxy * c0);

partTwo();
