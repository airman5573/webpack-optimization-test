import * as AllUtils from "./lodash";

const a = window.localStorage.getItem("aa");
if (AllUtils.isNull(a)) {
  console.log("A is Null!");
} else {
  console.log("A is Not Null!");
}
