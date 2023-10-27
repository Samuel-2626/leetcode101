

// O(log n)
function search(nums, target) {

    if (nums.length === 0) {
        return -1
    }
    

    let middleIndex = Math.floor(nums.length / 2)

    if (target === nums[middleIndex]) {
        return nums[middleIndex]
    }

    if (target < nums[middleIndex]) {
        let tempNums = nums.slice(0, middleIndex)
        console.log(tempNums);
        return search(tempNums, target)
    } else {
        let tempNums = nums.slice(middleIndex + 1, nums.length)
        console.log(tempNums);
        return search(tempNums, target)
    }


}

console.log(search([1, 2, 3, 4, 5, 6], 7));

