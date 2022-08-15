if (Number.isNumber) {
  Number.isNumber = () => {};
}

export const c = () => {
  console.log("c");
  return 10;
};
