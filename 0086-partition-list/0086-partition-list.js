/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    // 1. Initialize dummy heads for our two separate lists
    let lessHead = new ListNode(0);
    let greaterHead = new ListNode(0);
    
    // 2. Maintain pointers to track the tail ends of both lists
    let lessTail = lessHead;
    let greaterTail = greaterHead;
    
    let current = head;
    
    // 3. Traverse the original list and sort nodes into the two categories
    while (current !== null) {
        if (current.val < x) {
            lessTail.next = current;
            lessTail = lessTail.next;
        } else {
            greaterTail.next = current;
            greaterTail = greaterTail.next;
        }
        current = current.next;
    }
    
    // 4. Cut off any trailing nodes from the greater list to avoid cycles
    greaterTail.next = null;
    
    // 5. Connect the 'less' list with the 'greater' list
    lessTail.next = greaterHead.next;
    
    // Return the start of our new partitioned list (skipping the dummy node)
    return lessHead.next;
};