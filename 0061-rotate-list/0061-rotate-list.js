/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;
    // Find the length first for cases of rotations > length
    let node = head;
    let len = 0;
    while(node) {
        len = len + 1;
        node = node.next;
    }

    const ek = k % len;

    if(ek === 0) return head;
    node = head;
    let nc = 1;

    while(nc < len - ek){
        nc++;
        node= node.next;
    }
    const breakNode = node;
    
    while(node.next) {
        node = node.next;
    }

    node.next = head;
    head = breakNode.next;
    breakNode.next = null;

    return head;
};