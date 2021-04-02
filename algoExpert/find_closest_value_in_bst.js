function findClosestValueInBST(tree, target) {
    // cant get closer to the target then the target itself 
    if(target === tree.value) return target; 

    // holds the returning value from the recursive call 
    let subsequentValue = tree.value; 

    // if the value of the current node is less than the target then you could potentially get closer by traversing right
    // because the right side has larger values 
    // no point traversing left if this case because you will only move further away from the target
    // however if the target is smaller than the current value then you should traverse left because you could get closer  
    if(tree.value < target && tree.left !== null) {
        subsequentValue = findClosestValueInBST(tree.left, target)
    } else if (tree.value >= target && tree.right !== null ) {
        subsequentValue = findClosestValueInBST(tree.right, target)
    }

    // Math.abs is a good way to address positive and negative values 
    if(Math.abs(target - subsequentValue) > Math.abs(target - tree.value)) {
        return tree.value
    } else {
        return subsequentValue
    }
}