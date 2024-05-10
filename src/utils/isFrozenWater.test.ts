import { isFrozenWater } from "./isFrozenWater";

test("should return true when the temperature of the water is -15ºC", () => {
  const isIce = isFrozenWater(-15);
  expect(isIce).toBe(true);
});

test("should return true when the temperature of the water is 0ºC", () => {
  const isIce = isFrozenWater(0);
  expect(isIce).toBe(true);
});

test("should return false when the temperature of the water is 15ºC", () => {
  const isIce = isFrozenWater(15);
  expect(isIce).toBe(false);
});
