/**
  运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
  实现 LRUCache 类：

  LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
  int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
  void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/lru-cache
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1
  }

  const v = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, v)
  return this.cache.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
  }
  this.cache.set(key, value)
  if (this.cache.size > this.capacity) {
    this.cache.delete(this.cache.keys().next().value)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */