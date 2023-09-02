function generateMultiples(num) {
  // const multiplier = num
  function makeMultiples(noOfMult) {
    const output = [];
    for (let i = 1; i < noOfMult + 1; i++) {
      output.push(num * i);
    }
    return output;
  }
  return makeMultiples;
}

function secureFunc(secretPassWord, func) {
  function saySecret(inputPassWord, ...args) {
    if (inputPassWord === secretPassWord) {
      return func(...args);
    } else {
      return "Sorry your password is incorrect!";
    }
  }
  return saySecret;
}

module.exports = { generateMultiples, secureFunc };
