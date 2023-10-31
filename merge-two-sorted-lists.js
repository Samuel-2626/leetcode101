
class ListNode {

    constructor(value) {

        this.value = value
        this.next = null

    }

}


function mergeTwoLists(list1, list2) {

    let dummy = new ListNode(0)
    let head = dummy

    while (list1 && list2) {
        if (list1.value < list2.value) {
            dummy.next = list1
            list1 = list1.next
        } else {
            dummy.next = list2 
            list2 = list2.next
        }
        dummy = dummy.next
    }

    if (list1 !== null) {
        dummy.next = list1
    } else {
        dummy.next = list2
    }

    return head.next

 
}

const rootNodeA = new ListNode(1)
const nodeB = new ListNode(2)
const nodeC = new ListNode(4)

rootNodeA.next = nodeB
nodeB.next = nodeC


const rootNodeB = new ListNode(1)
const nodeD = new ListNode(3)
const nodeE = new ListNode(4)

rootNodeB.next = nodeD
nodeD.next = nodeE



let result = mergeTwoLists(rootNodeA, rootNodeB);

while (result) {
    console.log(result.value);
    result = result.next
}



