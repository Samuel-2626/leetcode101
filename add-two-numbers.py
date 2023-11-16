
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


listNode1 = ListNode(2)
listNode2 = ListNode(4)
listNode3 = ListNode(3)

listNode1.next = listNode2
listNode2.next = listNode3


listNode4 = ListNode(5)
listNode5 = ListNode(6)
listNode6 = ListNode(4)

listNode4.next = listNode5
listNode5.next = listNode6



def main() -> None:
    add_two_numbers(listNode1, listNode4)



def add_two_numbers(l1, l2) -> ListNode:

    # reverse a linked list (l1)

    l1_reverse = None
   
    while l1:
        nextNode = l1.next
        l1.next = l1_reverse

        l1_reverse = l1
        l1 = nextNode

    # store value in a variable (l1)

    l1_val = ""
    
    
    while l1_reverse:
        l1_val += str(l1_reverse.val)
        l1_reverse = l1_reverse.next

    l1_val = int(l1_val)

    
    # reverse a linked list (l2)

    l2_reverse = None

    while l2:
        nextNode = l2.next
        l2.next = l2_reverse

        l2_reverse = l2
        l2 = nextNode


    # store value in a variable (l2)

    l2_val = ""

    while l2_reverse:
        l2_val += str(l2_reverse.val)
        l2_reverse = l2_reverse.next


    l2_val = int(l2_val)

    # add the two numbers

    add_number = l1_val + l2_val

    # convert the numbers to a string 

    add_number = str(add_number)

    # convert the reversed string to a linked list

    temp = ListNode(add_number[len(add_number) - 1])
    head = temp


    for digit in reversed(range(len(add_number) -1)):

        node = ListNode(add_number[digit])
        temp.next = node

        temp = node


    # return the head of the linked list

    return head





if __name__ == "__main__":
    main()
