/**
  给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

  示例：

  s = "leetcode"
  返回 0

  s = "loveleetcode"
  返回 2

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/first-unique-character-in-a-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
* @param {string} s
* @return {number}
*/
var firstUniqChar = function (s) {
  let hash = {}
  let result = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1
      result.set(s[i], i)
    } else {
      result.delete(s[i])
    }
  }
  if (result.size == 0) {
    return -1
  }
  return result.values().next().value
};

