nums = [2,7,11,15]
//  nums = [3,3], target = 6
target = 9

const twoSum = (nums, target) => {
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            console.log(nums[i], nums[j]);
            if (nums[i] + nums[j] === target) {
                return [i,j]
                // console.log([nums[i], nums[j]]);
            }
        }
    }
}

// twoSum(num, target); //log(On^2)

const twoSum2 = (nums, target) => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log(complement);
        if (complement in map) {
            return [hash[complement], i]
        }
        hash[nums[i]] = i;
    }
}

twoSum2(num, target);

const twoSum3 = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get[complement], i]
        }
        map.set(nums[i],i)
    }
}
//Map object holds key-value pairs and remembers the original insertion order of the keys.~