/**
  给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

  示例:

  输入: n = 4, k = 2
  输出:
  [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/combinations
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

  /**
   * 解题思路：采用递归的方法。
   */
  const res = []

  // start是枚举选择的起点 temp是当前构建的路径（组合）
  const helper = (start, temp) => {
    // 当temp的长度为k时候结束递归
    if (temp.length === k) {
      res.push(temp.slice())
      return
    }

    // 枚举出所有选择
    for (let i = start; i <= n; i++) {
      temp.push(i)
      helper(i + 1, temp)
      temp.pop()
    }
  }
  // 开始递归，从数字1开始选
  helper(1, [])
  return res
};

combine(4, 2)

