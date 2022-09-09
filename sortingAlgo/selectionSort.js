function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let swapIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        swapIdx = j;
      }
    }
    [array[swapIdx], array[i]] = [array[i], array[swapIdx]];
  }
  return array;
}
