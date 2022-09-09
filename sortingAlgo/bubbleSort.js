function bubbleSort(array) {
  // Only change code below this line

  for (let j = array.length; j > 0; j--) {
    let swapped = false;
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    if (!swapped) {
      return array;
    }
  }
  return array;

  // Only change code above this line
}
