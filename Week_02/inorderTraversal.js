/**
 * 给定一个二叉树的根节点 root ，返回它的 中序遍历。
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const array = [];
  traversal(root, array)
  return array;
};

var traversal = function (root, array) {
  if (root != null) {
    traversal(root.left, array)
    array.push(root.val)
    traversal(root.right, array)
  }
}