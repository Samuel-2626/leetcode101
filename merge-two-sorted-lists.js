
class ListNode {

    constructor(value) {

        this.value = value
        this.next = null

    }

}


function mergeTwoLists(list1, list2) {

    if (!list1 && !list2) {
        return
    } 
    
    if (!list1) {
        return list2
    } 
    
    if (!list2) {
        return list1
    } 

 

}

const rootNodeA = new ListNode(1)
const nodeB = new ListNode(2)
const nodeC = new ListNode(4)

rootNodeA.next = nodeB
nodeB.next = nodeC

// console.log(rootNodeA);

const rootNodeB = new ListNode(1)
const nodeD = new ListNode(3)
const nodeE = new ListNode(4)

rootNodeB.next = nodeD
nodeD.next = nodeE

// console.log(rootNodeB);



console.log(mergeTwoLists(rootNodeA, rootNodeB));