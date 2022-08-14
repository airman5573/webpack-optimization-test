import { isNull, at, add } from "./lodash";

const a = 100;
const b = a > 1000 ? null : "hi";
if (isNull(b)) {
  console.log("B is Null!");
}
