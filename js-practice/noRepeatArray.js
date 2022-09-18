// using ES6
Array.from(new Set(array));

function uniqueArray(array) {
  let map = {};
  let result = [];
  for (let element of array) {
    if (!map.hasOwnProperty(element)) {
      map[element] = 1;
      result.push(element);
    }
  }
  return result;
}
