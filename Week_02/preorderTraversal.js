/**
 * 给定一个二叉树的根节点 root ，返回它的 前序遍历。
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
var preorderTraversal = function (root) {
  const array = [];
  traversal(root, array)
  return array;
};

var traversal = function (root, array) {
  if (root != null) {
    array.push(root.val)
    traversal(root.left, array)
    traversal(root.right, array)
  }
}