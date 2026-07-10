/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *     this.val = (val===undefined ? 0 : val)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    const nodes = [];
    
    // Step 1: Flatten the tree into an array via In-order traversal
    function inorder(node) {
        if (!node) return;
        
        inorder(node.left);
        nodes.push(node); // Store the actual node object references
        inorder(node.right);
    }
    
    inorder(root);
    
    let first = null;
    let second = null;
    
    // Step 2: Scan the array to locate the swapped nodes
    for (let i = 0; i < nodes.length - 1; i++) {
        // Look for a drop in value (breaking the strictly increasing order)
        if (nodes[i].val > nodes[i + 1].val) {
            if (!first) {
                // First drop: the larger element is out of place
                first = nodes[i];
                // Tentatively set second in case the swapped nodes are adjacent
                second = nodes[i + 1];
            } else {
                // Second drop: the smaller element is out of place
                second = nodes[i + 1];
                break; // Both nodes found, we can exit the loop early
            }
        }
    }
    
    // Step 3: Fix the tree by swapping the values back
    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
};