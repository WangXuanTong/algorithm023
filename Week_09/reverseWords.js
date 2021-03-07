/**
  给定一个字符串，逐个翻转字符串中的每个单词。

  说明：

  无空格字符构成一个 单词 。
  输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
  如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
   
  示例 1：

  输入："the sky is blue"
  输出："blue is sky the"

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-words-in-a-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.split(' ').filter(item => item).reverse().join(' ')
};

// // 正则
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
//   return s.match(/[\S]+/ig).reverse().join(" ")
// };