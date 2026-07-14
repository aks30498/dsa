/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const map = new Map();
    inorder.forEach((val, idx) => map.set(val, idx));

    let postIdx = inorder.length - 1;

    function arrayToTree(left, right) {
        if(left > right) return null;
        const root = new TreeNode(postorder[postIdx]);
        const mid = map.get(postorder[postIdx])
        postIdx--;


        root.right = arrayToTree(mid + 1, right);
        root.left = arrayToTree(left, mid - 1);

        return root;
    }

    return arrayToTree(0, inorder.length - 1);
};