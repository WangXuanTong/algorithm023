/**
  给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

  示例 1:

  输入: 1
  输出: true
  解释: 2^0 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && (n & (n - 1)) === 0
};