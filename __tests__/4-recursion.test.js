const {
  deepEntries,
  deeplyEquals,
  flat,
} = require("../sections/4-recursion.js");

describe("deepEntries", () => {
  test("empty object should return empty array", () => {
    expect(deepEntries({})).toEqual([]);
  });
  test("expect no recursion when object with one key is passed in", () => {
    const input = { name: "Sam" };
    const output = deepEntries(input);
    const expected = [["name", "Sam"]];
    expect(output).toEqual(expected);
  });
  test("expect no recursion when simple object with multiple keys is passed in", () => {
    const input = { name: "Sam", favBook: "Blood Meridian" };
    const output = deepEntries(input);
    const expected = [
      ["name", "Sam"],
      ["favBook", "Blood Meridian"],
    ];
    expect(output).toEqual(expected);
  });
  test("expect  recursion when object is passed in with nested objects", () => {
    const input = { name: "Sam", pets: { name: "fido" } };
    const output = deepEntries(input);
    const expected = [
      ["name", "Sam"],
      ["pets", [["name", "fido"]]],
    ];
    expect(output).toEqual(expected);
  });
  test("even deeper nesting", () => {
    const input = {
      name: "Sam",
      favBook: { title: "Blood Meridian", author: { name: "Cormac McCarthy" } },
    };
    const output = deepEntries(input);
    const expected = [
      ["name", "Sam"],
      [
        "favBook",
        [
          ["title", "Blood Meridian"],
          ["author", [["name", "Cormac McCarthy"]]],
        ],
      ],
    ];
    expect(output).toEqual(expected);
  });
});

describe("deeplyEquals", () => {
  test("function should return a boolean", () => {
    expect(typeof deeplyEquals()).toBe("boolean");
  });
  test("check equality when passed primitive data types", () => {
    expect(deeplyEquals(3, 3)).toBe(true);
    expect(deeplyEquals(3, 4)).toBe(false);
    expect(deeplyEquals("a", "a")).toBe(true);
    expect(deeplyEquals("a", "b")).toBe(false);
  });
  test("check simple no nested array", () => {
    expect(deeplyEquals([1, 2], [1, 2])).toBe(true);
  });
  test("check simple false no nested array", () => {
    expect(deeplyEquals([1, 2], [1, 3])).toBe(false);
  });
  test("check simple no nested object", () => {
    expect(deeplyEquals({ a: 2 }, { a: 2 })).toBe(true);
  });
  test("check simple false no nested object different key", () => {
    expect(deeplyEquals({ a: 2 }, { b: 2 })).toBe(false);
  });
  test("check simple no nested object with different value", () => {
    expect(deeplyEquals({ a: 2 }, { a: 1 })).toBe(false);
  });
  test("check simple nested array", () => {
    expect(deeplyEquals([1, [1, 2]], [1, [1, 2]])).toBe(true);
  });
  test("mixed object", () => {
    expect(deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "hello" }])).toBe(
      true
    );
  });
  test("mixed object false", () => {
    expect(deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "bye" }])).toBe(
      false
    );
  });
});
