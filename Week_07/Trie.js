/**
  实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

  示例:

  Trie trie = new Trie();

  trie.insert("apple");
  trie.search("apple");   // 返回 true
  trie.search("app");     // 返回 false
  trie.startsWith("app"); // 返回 true
  trie.insert("app");   
  trie.search("app");     // 返回 true
  说明:

  你可以假设所有的输入都是由小写字母 a-z 构成的。
  保证所有输入均为非空字符串。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/implement-trie-prefix-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.h = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  var h = this.h
  for (var w of word) {
    !h[w] && (h[w] = {}), h = h[w]
  }
  h.isEnd = 1
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return (h = this.s(word)) && h.isEnd !== undefined
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.s(prefix) !== false
};


Trie.prototype.s = function (word) {
  var h = this.h
  for (var w of word) {
    if (!h[w]) return false
    h = h[w]
  }
  return h
}


