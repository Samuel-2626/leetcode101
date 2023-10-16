


// O(n)
function maxProfit(arr) {

    let minNum = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < minNum) {
            minNum = arr[i]
        }

    }

    let maxNum = minNum;
    let indexOfMinNum = arr.indexOf(minNum)

    for (let i = indexOfMinNum; i < arr.length; i++) {

        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }

    }

    if (maxNum === minNum) {
        return 0
    } else {
        return maxNum - minNum
    }


}

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0