
class TreeNode {

    constructor(value) {

        this.value = value
        this.left = null
        this.right = null

    }

}


// O(log n)

function invertTree(root) {

    if (root === null) {
        return root
    }

    if (root.left && root.right !== null) {

        let temp = root.left
        root.left = root.right
        root.right = temp

        console.log(invertTree(root.left));
        console.log(invertTree(root.right));


    }

    return root

}


const nodeA = new TreeNode(4)
const nodeB = new TreeNode(2)
const nodeC = new TreeNode(7)
const nodeD = new TreeNode(1)
const nodeE = new TreeNode(3)
const nodeF = new TreeNode(6)
const nodeG = new TreeNode(9)

const root = nodeA
root.left = nodeB
root.right = nodeC
nodeB.left = nodeD
nodeB.right = nodeE
nodeC.left = nodeF
nodeC.right = nodeG

console.log(root);

console.log("-------");


console.log(invertTree(root));

