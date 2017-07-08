// * [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/#/description)
// Merge two sorted linked lists and return it as a new list. 
// The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let nodel1 = l1;
    let nodel2 = l2;
    let head = new ListNode();
    let node = new ListNode();
    head.next = null;
    node = head;
    while(nodel1 !== null && nodel2 !== null ) {
        if(nodel1.val > nodel2.val) {
            node.next = nodel2;
            nodel2 = nodel2.next;
        } else {
            node.next = nodel1;
            nodel1 = nodel1.next;
        }
        node = node.next;
    }
    if(nodel1 === null) {
        node.next = nodel2;
    }
    if(nodel2 === null) {
        node.next = nodel1;
    }
    return head.next;
};