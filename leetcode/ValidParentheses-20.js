/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (let braces of s) {
    if (map[braces] !== undefined) {
      stack.push(braces);
      continue;
    }
    const correctHalf = map[stack.pop()];
    if (correctHalf !== braces) {
      return false;
    }
  }
  return stack.length === 0;
};
