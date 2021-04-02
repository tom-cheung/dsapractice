function findClosestValueInBST(tree, target) {
    if(target === tree.value) return target; 

    let subsequentValue = tree.value; 

    if(tree.value < target && tree.left !== null) {
        subsequentValue = findClosestValueInBST(tree.left, target)
    } else if (tree.value >= target && tree.right !== null ) {
        subsequentValue = findClosestValueInBST(tree.right, target)
    }

    if(Math.abs(target - subsequentValue) > Math.abs(target - tree.value)) {
        return tree.value
    } else {
        return subsequentValue
    }
}