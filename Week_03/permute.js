/**
  给定一个 没有重复 数字的序列，返回其所有可能的全排列。

  示例:

  输入: [1,2,3]
  输出:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutations
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

  /**
   * 解题思路：采用递归的方法。
   */
  const res = []
  const used = {}

  function helper(path) {
    // 当长度相等时结束递归
    if (path.length === nums.length) {
      res.push(path.slice())
      return
    }

    // 循环遍历，每个节点数字，就是一棵树即一组数据
    for (const num of nums) {
      if (used[num]) {
        continue
      }
      path.push(num)
      used[num] = true
      helper(path)
      path.pop()
      used[num] = false
    }
  }

  helper([])
  return res
};