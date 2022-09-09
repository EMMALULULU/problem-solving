function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  let leftHalf = mergeSort(array.slice(0, mid));
  let rightHalf = mergeSort(array.slice(mid));
  return merge(leftHalf, rightHalf);

  function merge(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] < arr2[p2]) {
        result.push(arr1[p1]);
        p1++;
      } else {
        result.push(arr2[p2]);
        p2++;
      }
    }
    if (p1 < arr1.length) {
      result = result.concat(arr1.slice(p1));
    }
    if (p2 < arr2.length) {
      result = result.concat(arr2.slice(p2));
    }
    return result;
  }
}
