/**
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   * 前序遍历：根|左|右
   * 中序遍历：左|根|右
   * 解题思路: 
   * 1、构造二叉树，首先要知道根节点、左右子树的字节
   * 2、首先根据前序遍历得到根节点
   * 3、依据根节点，在中序遍历中得出左右子树的节点集合
   * 4、依据前序遍历，分别得到左右子树的序列
   * 5、递归构建左右子树
   */

  if (preorder.length === 0) {
    return null
  }
  // 根节点
  var root = TreeNode(preorder[0])

  const rootIndex = inorder.indexOf(preorder[0])
  // 构造左子树
  root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));

  // 构造右子树
  root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));

  // 返回二叉树
  return root
};

/*
大佬的解法，一样的思路不一样的代码。。。
var buildTree = function(preorder, inorder) {
  p = i = 0
  build = function(stop) {
      if (inorder[i] != stop) {
          var root = new TreeNode(preorder[p++])
          root.left = build(root.val)
          i++
          root.right = build(stop)
          return root
      }
      return null
  }
  return build()
};
*/