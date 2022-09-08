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
