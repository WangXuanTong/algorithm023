/**
  一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

  'A' -> 1
  'B' -> 2
  ...
  'Z' -> 26
  要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"111" 可以将 "1" 中的每个 "1" 映射为 "A" ，从而得到 "AAA" ，或者可以将 "11" 和 "1"（分别为 "K" 和 "A" ）映射为 "KA" 。注意，"06" 不能映射为 "F" ，因为 "6" 和 "06" 不同。

  给你一个只含数字的 非空 字符串 num ，请计算并返回 解码 方法的 总数 。

  题目数据保证答案肯定是一个 32 位 的整数。

  示例 1：

  输入：s = "12"
  输出：2
  解释：它可以解码为 "AB"（1 2）或者 "L"（12）。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/decode-ways
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string} s
* @return {number}
*/
var numDecodings = function (s) {
  if (s[0] == "0") {
    return 0
  }

  let dp = [1, 1], len = s.length

  for (let i = 1; i < len; ++i) {
    if (s[i - 1] != "0") {
      let num = (s[i - 1] + s[i] | 0)
      if (num >= 1 && num <= 26) {
        dp[i + 1] = s[i] != "0" ? dp[i - 1] + dp[i] : dp[i - 1]
      } else if (s[i] != "0") {
        dp[i + 1] = dp[i]
      } else {
        return 0
      }
    } else if (s[i] != "0") {
      dp[i + 1] = dp[i]
    } else {
      return 0
    }
  }
  return dp[len];
};