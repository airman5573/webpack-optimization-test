import { isNull } from "lodash";

const a = window.localStorage.getItem("aa");

if (isNull(a)) {
  consolelog("b is Null");
}
