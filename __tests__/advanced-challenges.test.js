const {removeSmarterAgents,rememberMe} = require("../sections/advanced-challenges");

describe("Remove Smarter Agents", () => {
  test("function should return an array", () => {
    expect(Array.isArray(removeSmarterAgents([]))).toBe(true);
  });
  test("if passed an empty array should return an empty array", () => {
    expect(removeSmarterAgents([])).toEqual([]);
  });
  test("check a single mole", () => {
    const sam = {
      name: "Sam",
      age: 30,
      aboutMe: "I have no personality! :D",
      interests: ["code", "guacamole"],
    };
    const output = removeSmarterAgents([sam]);
    expect(output).toEqual([]);
  });
  test("check two moles", () => {
    const sam = {
      name: "Sam",
      age: 30,
      aboutMe: "I have no personality! :D",
      interests: ["code", "guacamole"],
    };
    const jonny = {
      name: "Jonny",
      age: 32,
      aboutMe: "I'm a father of two girls - it's great!",
      interests: ["parenting"],
    };
    const output = removeSmarterAgents([sam, jonny]);
    expect(output).toEqual([]);
  });
  test("two moles and an innocent", () => {
    const sam = {
      name: "Sam",
      age: 30,
      aboutMe: "I have no personality! :D",
      interests: ["code", "guacamole"],
    };
    const jonny = {
      name: "Jonny",
      age: 32,
      aboutMe: "I'm a father of two girls - it's great!",
      interests: ["parenting"],
    };
    const dipoleman = {
      name: "dipoleman",
      age: 55,
      aboutMe: "I'm a father of one!",
      interests: ["music", "Maths"],
    };

    const output = removeSmarterAgents([sam, jonny, dipoleman]);
    expect(output).toEqual([dipoleman]);
  });
  test("four moles and an innocent", () => {
    const sam = {
      name: "Sam",
      age: 30,
      aboutMe: "I have no personality! :D",
      interests: ["code", "guacamole"],
    };
    const mitch = {
      name: "Mitch",
      age: 29,
      aboutMe: "I am not a mole - I am a human being!",
      interests: ["Tudor hymns", "dancing"],
    };
    const jonny = {
      name: "Jonny",
      age: 32,
      aboutMe: "I'm a father of two girls - it's great!",
      interests: ["parenting"],
    };
    const vel = {
      name: "Vel",
      age: 28,
      aboutMe: "I love games!",
      interests: ["Magic", "Monopoly Express"],
    };
    const dipoleman = {
      name: "dipoleman",
      age: 55,
      aboutMe: "I'm a father of one!",
      interests: ["music", "Maths"],
    };

    const output = removeSmarterAgents([sam, mitch, jonny, vel, dipoleman]);
    expect(output).toEqual([dipoleman]);
  });
});

describe("rememberMe",()=>{
    test("should return a function",()=>{
        const remember = rememberMe();
    expect(typeof remember).toBe("function");
    })
    test("new function should return value ",()=>{
        const func = (x,y)=>x+y
        const newFunc = rememberMe(func)
        console.log(newFunc)
        expect(newFunc(2,4)).toBe(6)
    })
    test("new function should return values when distinct args ",()=>{
        const func = (x,y)=>x+y
        const newFunc = rememberMe(func)
        console.log(newFunc)
        expect(newFunc(2,4)).toBe(6)
        expect(newFunc(4,4)).toBe(8)
    })
    test("new function should only be called twice when repeat arrs ",()=>{
        const consoleSpy = jest.spyOn(console, "log");
        const func = (x,y)=>x+y
        const newFunc = rememberMe(func)
        console.log(newFunc)
        expect(newFunc(2,4)).toBe(6)
        expect(newFunc(4,4)).toBe(8)
        expect(newFunc(2,4)).toBe(6)
        expect(consoleSpy).toHaveBeenCalledWith('input seen before!');

    })
    test("use a mock function to test that the function is only called once when repeated values are input",()=>{
        const mockFunc = jest.fn();
        const func = rememberMe(mockFunc)
        func(1,2,3)
        expect(mockFunc).toHaveBeenCalledTimes(1)
        func(1,2,3)
        expect(mockFunc).toHaveBeenCalledTimes(1)
        func(1,2,4)
        expect(mockFunc).toHaveBeenCalledTimes(2)
        func(5,3,6)
        expect(mockFunc).toHaveBeenCalledTimes(3)
        func(5,3,6)
        expect(mockFunc).toHaveBeenCalledTimes(3)
        func(1,2,3)
        expect(mockFunc).toHaveBeenCalledTimes(3)

    })
})