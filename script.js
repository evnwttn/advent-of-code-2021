function partOne() {
  let oneCounter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i].one === "1") {
      oneCounter++;
    }
  }
  console.log(oneCounter);
}

partOne();
