/**
  给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

  示例 1：

  输入：nums = [1,1,2]
  输出：
  [[1,1,2],
  [1,2,1],
  [2,1,1]]
  示例 2：

  输入：nums = [1,2,3]
  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

  提示：

  1 <= nums.length <= 8
  -10 <= nums[i] <= 10

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/permutations-ii
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  const used = {}
  const len = nums.length
  nums.sort((a, b) => a - b)

  function helper(path) {
    // 当长度相等时结束递归
    if (path.length === nums.length) {
      res.push(path.slice())
      return
    }

    // 循环遍历，每个节点数字，就是一棵树即一组数据
    for (let i = 0; i < len; i++) {

      // 避免产生重复的排列
      if (nums[i - 1] == nums[i] && i - 1 >= 0 && !used[i - 1]) {
        continue;
      }
      if (used[i]) {
        continue;
      }
      path.push(nums[i])
      helper(path)
      path.pop()
      used[i] = false
    }
  }

  helper([])
  return res
};

