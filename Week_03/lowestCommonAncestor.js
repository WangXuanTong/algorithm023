/** 
  给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

  百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

  例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  /**
   * 解题思路: 最近公共祖先 -> 在左、右子树上能不能同时找到 p、q 
   * -> 找不到就返回根节点，左子树找到，递归左子树，右子树找到递归右子树
   * 1、使用递归
   * 2、判断是遍历左子树还是右子树
   * 3、合并结果
   */

  //  1.递归终止条件: 节点不存在 或 当前节点是p或q直接返回当前节点
  if (root === null || root.val === p.val || root.val === q.val) {
    return root
  }

  // 2、递归左右子树
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // 3、.合并结果
  if (left === null && right === null) {
    return null
  }

  if (left === null) {
    return right
  }

  if (right === null) {
    return left
  }
  return root
};