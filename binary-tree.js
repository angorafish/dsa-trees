/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function traverse(node) {
      if (!node) return Infinity;
      if (!node.left && !node.right) return 1;
      return 1 + Math.min(traverse(node.left), traverse(node.right));
    }
    return traverse(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function traverse(node) {
      if (!node) return 0;
      return 1 + Math.max(traverse(node.left), traverse(node.right));
    }
    return traverse(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = 0;
  
    function traverse(node) {
      if (!node) return 0;
      const leftSum = Math.max(0, traverse(node.left));
      const rightSum = Math.max(0, traverse(node.right));
      maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
      return node.val + Math.max(leftSum, rightSum);
    }
    traverse(this.root);
    return maxSum;
    }
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  
  nextLarger(lowerBound) {
    if (!this.root) return null;

    let nextLargerValue = null;

    function traverse(node) {
      if (!node) return;
      if (node.val > lowerBound && (nextLargerValue === null || node.val < nextLargerValue)) {
        nextLargerValue = node.val;
      }
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return nextLargerValue;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
