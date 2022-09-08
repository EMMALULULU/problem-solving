/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let pointer = 0;
  let currMap = {};
  for (let i = 0; i < s.length; i++) {
    const currStr = s[i];
    if (currMap[currStr] !== undefined) {
      pointer = currMap[currStr] + 1;

      for (let key of Object.keys(currMap)) {
        if (currMap[key] < pointer) {
          delete currMap[key];
        }
      }
    }

    currMap[currStr] = i;
    maxLength = Math.max(Object.keys(currMap).length, maxLength);
  }
  return maxLength;
};

// using ES6 Map

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let pointer = 0;
  let letterMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let curChar = s[i];
    if (letterMap.has(curChar)) {
      pointer = letterMap.get(curChar) + 1;
      for (let char of letterMap.keys()) {
        if (letterMap.get(char) < pointer) {
          letterMap.delete(char);
        }
      }
    }
    letterMap.set(curChar, i);
    maxLength = Math.max(letterMap.size, maxLength);
  }
  return maxLength;
};
