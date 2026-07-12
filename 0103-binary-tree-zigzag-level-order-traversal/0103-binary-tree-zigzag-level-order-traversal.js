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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    const ans = [];

    function bfsLo(node, level) {
        if(!node) return;

        if(!ans[level]) {
            ans[level] = [node.val];
        }else {
            ans[level].push(node.val)
        }

        bfsLo(node.left, level+1);
        bfsLo(node.right, level+1);
    }
    
    bfsLo(root,0);

    ans.forEach((a, i) => {
        if(i%2 !== 0){
            ans[i].reverse();
        }
    })

    return ans;
};