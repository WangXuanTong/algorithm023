/**
  给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

  具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

  示例 1：

  输入："abc"
  输出：3
  解释：三个回文子串: "a", "b", "c"

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/palindromic-substrings
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var countSubstrings = function (s) {
  const len = s.length
  let count = 0
  const dp = []

  for (let j = 0; j < len; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] == s[j] && (j - i <= 1 || dp[i + 1])) {
        dp[i] = true
        count += 1
      } else {
        dp[i] = false
      }
    }
  }
  return count
};