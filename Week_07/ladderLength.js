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
var ladderLength = function(beginWord, endWord, wordList) {
  var wordSet = new Set(wordList);
  var queue = [];
  queue.push([beginWord, 1]);

  while (queue.length) {
    const [word, level] = queue.shift();  // 当前出列的单词
    if (word == endWord) {
      return level;
    }
    for (let i = 0; i < word.length; i++) { // 遍历当前单词的所有字符
      for (let c = 97; c <= 122; c++) { // 对应26个字母
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
        if (wordSet.has(newWord)) { // 单词表里有这个新词
          queue.push([newWord, level + 1]); // 作为下一层的词入列
          wordSet.delete(newWord);  // 避免该词重复入列
        }
      }
    }
  }
  return 0; // bfs结束，始终没有遇到终点
};