function flattenArray(array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element));
    } else {
      result.push(element);
    }
  }
  return result;
}
