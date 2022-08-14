if (!Number.isInteger) {
  // If Number.isInteger is not defined
  Number.isInteger = function (n) {
    return n.toString().indexOf(".") == -1;
  };
}
