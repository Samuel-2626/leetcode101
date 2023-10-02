

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

console.log(twoSum([3,2,4], 6));

