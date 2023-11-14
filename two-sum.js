

// O(n^2)
function twoSum(arr, target) {


    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {

            if (i === j) {
                continue;
            } else if (arr[i] + arr[j] === target) {
                return [i, j]
            }          

        }

    }

}

// O(n)
function twoSum(arr, target) {

    const tempArr = new Map();

    for (let i = 0; i < arr.length; i++) {

        let complement = target - arr[i];

        if (tempArr.has(complement)) {
            return [tempArr.get(complement), i]
        } else {
            tempArr.set(arr[i], i)
        }

    }

}

console.log(twoSum([3,2,4], 6));

