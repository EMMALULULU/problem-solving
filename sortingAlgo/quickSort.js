function pivot(array, left = 0, right = array.length - 1) {
  // always using the first num as pivot
  let pivotIdx = left;
  let swapIdx = left;

  for (let i = left + 1; i <= right; i++) {
    if (array[i] <= array[pivotIdx]) {
      swapIdx++;
      [array[i], array[swapIdx]] = [array[swapIdx], array[i]];
    }
  }
  [array[swapIdx], array[pivotIdx]] = [array[pivotIdx], array[swapIdx]];
  return swapIdx;
  // return pivot number index
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(array, left, right);
    quickSort(array, left, pivotIdx - 1);
    quickSort(array, pivotIdx + 1, right);
  }
  return array;
}
