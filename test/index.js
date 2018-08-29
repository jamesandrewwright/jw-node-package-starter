import { assert } from "chai";
import greeting, { goodbye } from "../src";

describe("Greeting", () => {
  it("should greet James if no name is supplied", () => {
    const expectedVal = "Hello, James";
    assert(greeting() === expectedVal, "Greet James");
  });

  it("should greet by name if name is supplied", () => {
    const expectedVal = "Hello, Foobar";
    assert(greeting("Foobar") === expectedVal, "Greet custom name");
  });
});

describe("Goodbye", () => {
  it("should say goodbye", () => {
    const expectedVal = "Goodbye!";
    assert(goodbye() === expectedVal, "Said goodbye");
  });
});
