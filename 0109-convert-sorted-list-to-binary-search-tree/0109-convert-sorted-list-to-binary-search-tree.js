/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // 1. Count the total number of nodes in the linked list
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }

    // Moveable reference to the current head of the list
    let currentHead = head;

    // 2. Helper function that builds the tree based on size boundaries
    function convert(start, end) {
        // Base case: no elements left in this segment
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);

        // First: Recursively build the left subtree
        const leftChild = convert(start, mid - 1);

        // Second: The currentHead pointer is now perfectly aligned 
        // with the middle element. Create the root node.
        const root = new TreeNode(currentHead.val);
        root.left = leftChild;

        // Crucial Step: Move the linked list pointer forward!
        currentHead = currentHead.next;

        // Third: Recursively build the right subtree
        root.right = convert(mid + 1, end);

        return root;
    }

    return convert(0, size - 1);
};