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
      input[i].one === "1" &&
      input[i].two === "0" &&
      input[i].three === "0" &&
      input[i].four === "1" &&
      input[i].five === "1" &&
      input[i].six === "1" &&
      input[i].seven === "0" &&
      input[i].eight === "1" &&
      input[i].nine === "1" &&
      input[i].ten === "1" &&
      input[i].eleven === "1" &&
      input[i].twelve === "0"
    ) {
      counter++;
    }
  }
  console.log(counter);
}

oxygen = 100111011110;

partTwo();
