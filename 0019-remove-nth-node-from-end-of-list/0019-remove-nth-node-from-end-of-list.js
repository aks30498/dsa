/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // moving fast node n-1 times
    let prev = head;
    let rem = head;
    let node = head;

    while(n>1) {
        node = node.next;
        n--;
    }

    //if we have reached end we need to remove the head itself
    if(!node.next){
        return head.next
    }

    // if it isnt at the end we start moving node, rem and prev
    node = node.next;
    rem = head.next;

    while(node.next){
        node=node.next;
        rem = rem.next;
        prev = prev.next;
    }

    prev.next = rem.next;
    return head;
};