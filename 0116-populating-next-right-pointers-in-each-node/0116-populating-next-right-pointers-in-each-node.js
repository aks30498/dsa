/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    function update(node){
        if(!node?.left) return;
        node.left.next = node.right;
        node.right.next = node.next?.left || null;
        update(node.left, node);
        update(node.right, node)
    }

    update(root)
    return root;
};