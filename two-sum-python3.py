# nums = [2,7,11,15], target = 9  ... [0,1]





def main() -> None:
    print(two_sum([2,7,11,15], 9))



def two_sum(nums: list[int], target: int) -> list[int]:
    
    tempDict: dict[int, int] = {}

    for i in range(len(nums)):

        complement: int = target - nums[i]

        if complement in tempDict:
            return [tempDict[complement], i]
        else:
            tempDict[nums[i]] = i

    return []


if __name__ == "__main__":
    main()