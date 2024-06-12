/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let sum = 0;
    function traverse(node) {
      sum += node.val;
      for (let child of node.children) {
        traverse(child);
      }
    }
    traverse(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = 0;
    function traverse(node) {
      if (node.val % 2 === 0) count++;
      for (let child of node.children) {
        traverse(child);
      }
    }
    traverse(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = 0;
    function traverse(node) {
      if (node.val > lowerBound) count++;
      for (let child of node.children) {
        traverse(child);
      }
    }
    traverse(this.root);
    return count;
  }
}

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

  /** minDepth(): return the minimum depth of the binary tree. */
  minDepth() {
    if (!this.root) return 0;

    function traverse(node) {
      if (!node) return Infinity;
      if (!node.left && !node.right) return 1;
      return 1 + Math.min(traverse(node.left), traverse(node.right));
    }
    return traverse(this.root);
  }

  /** maxDepth(): return the maximum depth of the binary tree. */
  maxDepth() {
    if (!this.root) return 0;

    function traverse(node) {
      if (!node) return 0;
      return 1 + Math.max(traverse(node.left), traverse(node.right));
    }
    return traverse(this.root);
  }

  /** maxSum(): return the maximum path sum in the binary tree. */
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

  /** nextLarger(x): return the value of the node that is the next largest element than x. */
  nextLarger(x) {
    if (!this.root) return null;

    let nextLargerValue = null;

    function traverse(node) {
      if (!node) return;
      if (node.val > x && (nextLargerValue === null || node.val < nextLargerValue )) {
        nextLargerValue = node.val;
      }
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return nextLargerValue;
  }
}

module.exports = { Tree, TreeNode, BinaryTree, BinaryTreeNode };
