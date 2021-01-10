/**
  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

  示例 1:

  输入: s = "anagram", t = "nagaram"
  输出: true
  示例 2:

  输入: s = "rat", t = "car"
  输出: false

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/valid-anagram
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false
  }

  const array = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
      array[s.charCodeAt(i) - "a".charCodeAt(0)] += 1
      array[t.charCodeAt(i) - "a".charCodeAt(0)] -= 1
  }

  var isAna = true
  for (let i = 0; i < array.length; i++) {
      if (array[i] != 0) {
          isAna = false
          break
      }
  }

  return isAna
};
