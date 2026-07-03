var deleteDuplicates = function (head) {
    // Create a dummy node that points to the head
    let dummy = new ListNode(0, head);
    
    // 'prev' will always point to the last known distinct node
    let prev = dummy;
    
    while (head !== null) {
        // If we detect the start of a duplicate sequence
        if (head.next !== null && head.val === head.next.val) {
            // Skip all nodes that have the same value
            while (head.next !== null && head.val === head.next.val) {
                head = head.next;
            }
            // Connect the last distinct node to the node AFTER the duplicates
            prev.next = head.next;
        } else {
            // No duplicate detected, move the 'prev' pointer forward
            prev = prev.next;
        }
        // Move head forward
        head = head.next;
    }
    
    return dummy.next;
};