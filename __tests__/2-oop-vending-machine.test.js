const VendingMachine = require("../sections/2-oop-vending-machine.js");

describe("VendingMachine Properties", () => {
  test("VendingMachine has a property of credit with default value = 0", () => {
    const testMachine = new VendingMachine();
    expect(testMachine.credit).toBe(0)
  });
  test("VendingMachine has a property of stock", () => {
    const testMachine = new VendingMachine();
    expect(testMachine.stock).toEqual({A : {}, B : {}, C : {}})
  });
});
describe("VendingMachine Methods", () => {
  test("VendingMachine has a addStock method", () => {
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    expect(testMachine.stock).toEqual({ A: { name: 'marsBar', price: 50, quantity: 6 },
    B: {},
    C: {} })
  });
  test("VendingMachine has a addCredit method, which updates the credit property",()=>{
    const testMachine = new VendingMachine();
    testMachine.addCredit(20)
    expect(testMachine.credit).toBe(20)
    testMachine.addCredit(10)
    expect(testMachine.credit).toBe(30)

  })
  test("VendingMachine has a method of purchaseItem which should return item if you've paid sufficient money",()=>{
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(60);
    expect(testMachine.purchaseItem("A")).toBe('marsBar')
  })
  test("VendingMachine purchase method to return insufficient credit when user inputs insufficient credit",()=>{
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(30);
    expect(testMachine.purchaseItem("A")).toBe('Insufficient credit!')
  })
  test("expect when successfully purchased item, the item count will decrease, and the credit will decrease by the value of the item",()=>{
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    const testMachine = new VendingMachine();
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(60);
    testMachine.purchaseItem("A")
    expect(testMachine.stock).toEqual({ A: { name: 'marsBar', price: 50, quantity: 5 },
    B: {},
    C: {}
    })
    expect(testMachine.credit).toBe(10)

  })
  
});