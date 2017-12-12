function addAllStateVal(state, exclude) {
  let sum = 0;
  for (var key in state) {
    if(!exclude || !exclude.includes(key)) {
      sum += +state[key];
    }
  }
  return sum;
}

export { addAllStateVal };