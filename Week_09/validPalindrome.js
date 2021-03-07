/**
  给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

  示例 1:

  输入: "aba"
  输出: True
  示例 2:

  输入: "abca"
  输出: True
  解释: 你可以删除c字符。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/valid-palindrome-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let n = s.length
  if (n < 2) {
    return s
  }
  let isPalindrome = (left, right) => {
    while (left < right) {
      if (s[left++] != s[right--]) {
        return false
      }
    }
    return true
  }
  for (let i = 0; i < n; i++) {
    if (s[i] != s[n - i - 1]) {
      return isPalindrome(i + 1, n - i - 1) || isPalindrome(i, n - 1 - i - 1)
    }
  }
  return true
};