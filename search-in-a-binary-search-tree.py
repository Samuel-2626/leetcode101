# You are given the root of a binary search tree (BST) and an integer val. 

# Find the node in the BST that the node's value equals val and return the subtree
# rooted with that node. 

# If a such a node does not exist, return null.


class TreeNode:

    def __init__(self, val, left = None, right = None):
        self.val = val
        self.left = left
        self.right = left


root: TreeNode = TreeNode(4)
node1: TreeNode = TreeNode(2)
node2: TreeNode = TreeNode(7)
node3: TreeNode = TreeNode(1)
node4: TreeNode = TreeNode(3)

root.left = node1
root.right = node2
node1.left = node3
node1.right = node4


def main() -> None:
    print(searchBST(root, 2))



def searchBST(root: TreeNode, val: int):

    if not root:
        return 

    if val == root.val:
        return root
    
    elif val < root.val:
        return searchBST(root.left, val)

    else:
        return searchBST(root.right, val)
            




if __name__ == "__main__":
    main()