/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const inOrderMap = new Map();
    inorder.forEach((val, index) => {
        inOrderMap.set(val, index)
    })

    let preInd = 0;

    function arrayToTree(left, right) {
        if(left > right) return null;

        const rootVal = preorder[preInd];
        const root = new TreeNode(rootVal);
        preInd++;

        const mid = inOrderMap.get(rootVal);

        root.left = arrayToTree(left, mid - 1);
        root.right = arrayToTree(mid+1, right)

        return root;
    }

    return arrayToTree(0, inorder.length - 1)
};