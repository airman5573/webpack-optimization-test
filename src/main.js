import { isNull } from "./lodash";

const a = 1000;
const b = a > 100 ? null : "hallo";
if (isNull(b)) {
  console.log("B is Null!");
}
