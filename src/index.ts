import { isFrozenWater } from "./utils/isFrozenWater.ts";

const startApp = () => {
  console.log("Starting...");
  const temp = 200;
  const isIce = isFrozenWater(temp);
  console.log(
    `When the temperature of the water is ${temp}, it is ${
      isIce ? "" : "not "
    }frozen`
  );
};
startApp();
