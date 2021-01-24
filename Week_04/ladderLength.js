/**
  字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：

  序列中第一个单词是 beginWord 。
  序列中最后一个单词是 endWord 。
  每次转换只能改变一个字母。
  转换过程中的中间单词必须是字典 wordList 中的单词。
  给你两个单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。


  示例 1：

  输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
  输出：5
  解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/word-ladder
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!endWord || wordList.indexOf(endWord) == -1) {
    return 0
  }
  // 各个通用状态对应所有单词
  var comboDicts = {}
  var len = beginWord.length
  for (var i = 0; i < wordList.length; i++) {
    for (var r = 0; r < len; r++) {
      var newWord = wordList[i].substring(0, r) + '*' + wordList[i].substring(r + 1, len)
        (!comboDicts[newWord]) && (comboDicts[newWord] = [])
      comboDicts[newWord].push(wordList[i])
    }
  }
  // Queue for BFS
  var queue = [[beginWord, 1]]
  // visited
  var visited = { beginWord: true }
  while (queue.length > 0) {
    var currNode = queue.shift()
    var currWord = currNode[0]
    var currLevel = currNode[1]
    for (var i = 0; i < len; i++) {
      // 通用状态
      var newWord = currWord.substring(0, i) + '*' + currWord.substring(i + 1, len)
      if (newWord in comboDicts) {
        var tmpWords = comboDicts[newWord]
        for (var z = 0; z < tmpWords.length; z++) {
          if (tmpWords[z] == endWord) {
            return currLevel + 1
          }
          if (!visited[tmpWords[z]]) {
            visited[tmpWords[z]] = true
            queue.push([tmpWords[z], currLevel + 1])
          }
        }
      }
    }
  }
  return 0
};
