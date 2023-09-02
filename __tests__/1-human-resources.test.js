const {
  createPoll,
  makeNameTags,
  removeAgents,
} = require("../sections/1-human-resources.js");

describe("removeAgents", () => {
  test("function should return an array", () => {
    expect(Array.isArray(removeAgents([]))).toBe(true)
  });
  test("if passed an empty array should return an empty array", () => {
    expect(removeAgents([])).toEqual([])
  });
  test("should return an array without the 'mole", () => {
    const input = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    const output = removeAgents(input)
    const expected = [{name: 'Sam', profession: 'artist'}]
    expect(output).toEqual(expected)
  });
  test("function should not mutate input", () => {
    const input = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    removeAgents(input)
    const expected = [
      { name: "Sam", profession: "artist" },
      { name: "Mitch", profession: "mole" },
    ];
    expect(input).toEqual(expected)
  });

});

describe("makeNameTags", () => {
  test("function should return an array", () => {
    expect(Array.isArray(makeNameTags([]))).toBe(true)
  });
  test("if passed an empty array should return an empty array", () => {
    expect(makeNameTags([])).toEqual([])
  });
  test("function should create name tags", () => {
    const input = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    const output = makeNameTags(input)
    const expected = ['Mr Sam Caine, Northcoders', 'Mr Kermit The Frog, Jim Henson Studios'];
    expect(output).toEqual(expected)
  });
  test("function should not mutate input", () => {
    const input = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    makeNameTags(input)
    const expected = [
      {
        title: "Mr",
        forename: "Sam",
        surname: "Caine",
        age: 30,
        company: "Northcoders",
      },
      {
        title: "Mr",
        forename: "Kermit",
        surname: "The Frog",
        age: 35,
        company: "Jim Henson Studios",
      },
    ];
    expect(input).toEqual(expected)
  });
  
  

});

describe("createPoll",()=>{
  test("should return an empty object if passed in an empty array",()=>{
    expect(createPoll([])).toEqual({})
  })
  test("function creates a poll",()=>{
    const input = ["cake", "biscuit", "biscuit"];
    const output = createPoll(input)
    const expected = { cake: 1, biscuit: 2 }
    expect(output).toEqual(expected)
  })
  test("function should not mutate",()=>{
    const input = ["cake", "biscuit", "biscuit"];
    createPoll(input)
    const expected = ["cake", "biscuit", "biscuit"]
    expect(input).toEqual(expected)
  })
  test("input large data to test function",()=>{
    const NCFruitBowl = require("../data/poll-data.js")
    const output = createPoll(NCFruitBowl)
    const expected = {
      apple: 276,
      pear: 223,
      banana: 263,
      orange: 238,
      'lonesome plum': 1
    }
    expect(output).toEqual(expected)
  })

})