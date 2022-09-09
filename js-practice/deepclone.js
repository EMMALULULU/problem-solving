function deepClone(originObj) {
  if (typeof originObj === 'object') {
    const copy = Array.isArray(originObj) ? [] : {};
    for (let key in originObj) {
      copy[key] = deepClone(originObj[key]);
    }
    return copy;
  } else {
    return originObj;
  }
}
