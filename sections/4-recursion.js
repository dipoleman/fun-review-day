const deepEntries = (obj) => {
  let arr = [];
  for (key in obj) {
    if (typeof obj[key] === "object") {
      arr.push([key, deepEntries(obj[key])]);
    } else {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
};

const deeplyEquals = (inputA, inputB) => {
  let truthy = true;
  if (typeof inputA === typeof inputB) {
    if (typeof inputA !== "object") {
      // checks primitive values
      truthy = inputA === inputB;
    } else {
      // now checks for [] or {}
      if (Array.isArray(inputA)) {
        for (let i = 0; i < inputA.length; i++) {
          truthy = deeplyEquals(inputA[i], inputB[i]);
        }
      } else {
        for (key in inputA) {
          truthy = deeplyEquals(inputA[key], inputB[key]);
        }
      }
    }
  } else {
    return false;
  }
  return truthy;
};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
