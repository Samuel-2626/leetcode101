// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given
// nodes in BST.

// According to the definition of LCA in Wikipedia: "The lowest common ancestor is defined
// between two nodes p and q as the lowest nodes T that has both p and q as descendants
// (where we allow a node to be a descendants of itself)"

class TreeNode {

    constructor(value) {
        this.val = val
        this.left = null
        this.right = null
    }
    
}



function lowestCommonAncestor(root, p, q) {

   if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
   } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
   } else {
    return root
   }
    

}


let root = new TreeNode(6)
let nodeA = new TreeNode(2)
let nodeB = new TreeNode(8)
let nodeC = new TreeNode(0)
let nodeD = new TreeNode(4)
let nodeE = new TreeNode(7)
let nodeF = new TreeNode(9)
let nodeG = new TreeNode(3)
let nodeH = new TreeNode(5)

root.left = nodeA
root.right = nodeB

nodeA.left = nodeC
nodeA.right = nodeD

nodeB.left = nodeE
nodeB.right = nodeF

nodeD.left = nodeG
nodeD.right = nodeH

lowestCommonAncestor(root, 2, 8)

