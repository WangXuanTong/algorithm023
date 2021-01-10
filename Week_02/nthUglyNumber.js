/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n == 1) {
    return 1
  }
/**
  f(i) = Math.min(temp[a] * 2, temp[b] * 3, temp[c] * 5)
  在数学上的意思，丑数，肯定是之前的一个丑数✖️ （2 || 3 || 5 ）只要找到比现在大的就行
  开辟数组保存每个下标的丑数。
  不断更新a b c 的下标，一旦等于了向前挪一个，就会变成大于了，然后再次看这三个数的大小
 */

  let a = 0, b = 0, c = 0
  let temp = [1]
  for (let i = 1; i < n; i++) {
    temp[i] = Math.min(temp[a] * 2, temp[b] * 3, temp[c] * 5)
    temp[i] >= temp[a] * 2 ? (a+= 1) : 0
    temp[i] >= temp[b] * 3 ? (b+= 1) : 0
    temp[i] >= temp[c] * 5 ? (c+= 1) : 0
  }
  return temp[temp.length - 1]
};