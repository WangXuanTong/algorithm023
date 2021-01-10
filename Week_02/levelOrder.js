/**
  给定一个 N 叉树，返回其节点值的前序遍历。

  例如，给定一个 3叉树 :
  返回其前序遍历: [1,3,5,6,2,4]。
 */

function Node(val, children) {
  this.val = val;
  this.children = children;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  var array = [];
  traversal(root, array, 0);
  return array;
};

var traversal = function (root, array, k) {
  if (root == null) {
    return;
  }
  if (array[k] == undefined) {
    array[k] = [];
  }
  array[k].push(root.val);
  for (var i = 0; i < root.children.length; i++) {
    traversal(array, root.children[i], k + 1);
  }
}
