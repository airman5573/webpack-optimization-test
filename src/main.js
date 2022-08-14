import { isNull } from "./lodash";
import { A, B } from "./test";

const a = 100;
const b = a > 1000 ? null : "hi";
A();
B();
if (isNull(b)) {
  console.log("B is Null!");
}
